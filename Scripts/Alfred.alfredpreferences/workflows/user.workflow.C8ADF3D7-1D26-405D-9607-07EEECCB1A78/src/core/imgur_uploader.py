import os
import sys
import json
from typing import Optional
from dataclasses import dataclass

# 尝试导入 PIL，如果失败则提供友好错误信息
try:
    from PIL import Image, ImageGrab
except ImportError:
    print("错误: PIL/Pillow 未安装。请运行: python3 -m pip install Pillow", file=sys.stderr)
    print("Error: PIL/Pillow not installed. Please run: python3 -m pip install Pillow", file=sys.stderr)
    sys.exit(1)

# 尝试导入 requests
try:
    import requests
except ImportError:
    print("错误: requests 未安装。请运行: python3 -m pip install requests", file=sys.stderr)
    print("Error: requests not installed. Please run: python3 -m pip install requests", file=sys.stderr)
    sys.exit(1)

@dataclass
class ImgurConfig:
    CLIENT_ID: str = "546c25a59c58ad7"
    API_URL: str = "https://api.imgur.com/3/image"
    TEMP_DIR: str = '/tmp/'  # 使用系统临时目录，性能更好
    MAX_SIZE: int = 1024
    
    @property
    def headers(self) -> dict:
        return {
            'authority': 'api.imgur.com',
            'accept': '*/*',
            'origin': 'https://imgur.com',
            'referer': 'https://imgur.com/',
            'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
        }

class ImageProcessor:
    def __init__(self, config: ImgurConfig = ImgurConfig()):
        self.config = config
        
    def read_image(self, file_path: Optional[str] = None) -> Optional[Image.Image]:
        try:
            if file_path:
                # 检查是否为 GIF
                if file_path.lower().endswith('.gif'):
                    return Image.open(file_path)  # 不复制 GIF，保持原始格式
                with Image.open(file_path) as image:
                    return image.copy()
            return ImageGrab.grabclipboard()
        except Exception as e:
            print(f"Error reading image: {e}")
            return None
    
    def normalize_image(self, image: Image.Image) -> Image.Image:
        if not image:
            raise ValueError("No image provided")
            
        # 如果是 GIF，直接返回
        if getattr(image, 'is_animated', False):
            return image
            
        # 处理静态图片
        if image.mode in ('RGBA', 'LA', 'P'):  # 添加 'P' 模式的处理
            if image.mode == 'P':
                image = image.convert('RGB')
            else:
                background = Image.new('RGB', image.size, (255, 255, 255))
                background.paste(image, mask=image.split()[-1])
                image = background
            
        width, height = image.size
        if width > self.config.MAX_SIZE or height > self.config.MAX_SIZE:
            image.thumbnail((self.config.MAX_SIZE, self.config.MAX_SIZE), Image.Resampling.LANCZOS)
        return image
    
    def save_temp_image(self, image: Image.Image) -> str:
        import tempfile
        
        # 确定保存格式
        is_animated = getattr(image, 'is_animated', False)
        if is_animated:
            suffix = '.gif'
            save_format = 'GIF'
            save_params = {'save_all': True, 'optimize': True}
        else:
            suffix = '.png' if image.mode == 'RGBA' else '.jpg'
            save_format = 'PNG' if suffix == '.png' else 'JPEG'
            save_params = {'optimize': True}
            if save_format == 'JPEG':
                save_params['quality'] = 85
        
        temp_fd, temp_path = tempfile.mkstemp(suffix=suffix)
        os.close(temp_fd)
        image.save(temp_path, save_format, **save_params)
        return temp_path

class ImgurUploader:
    def __init__(self, config: ImgurConfig = ImgurConfig()):
        self.config = config
        self.session = requests.Session()
        self.request_delay = 3   # 修改为2分钟
        self.upload_credit_cost = 10
        self.max_daily_uploads = 1250
        self.max_hourly_posts = 1250
        
    def check_credits(self) -> dict:
        """检查当前配额状态"""
        try:
            response = self.session.get(
                "https://api.imgur.com/3/credits",
                headers={'Authorization': f'Client-ID {self.config.CLIENT_ID}'}
            )
            response.raise_for_status()
            credits_info = response.json().get('data', {})
            print(f"当前配额状态: {credits_info}", file=sys.stderr)
            return credits_info
        except Exception as e:
            print(f"警告: 无法获取配额信息 - {str(e)}", file=sys.stderr)
            return {}

    def check_rate_limits(self, response: requests.Response) -> None:
        """检查所有速率限制"""
        # 获取所有限制信息
        limits = {
            'client': {
                'limit': int(response.headers.get('X-RateLimit-ClientLimit', 12500)),  # 每天约12500请求
                'remaining': int(response.headers.get('X-RateLimit-ClientRemaining', 0)),
                'reset': int(response.headers.get('X-RateLimit-ClientReset', 86400))  # 24小时重置
            },
            'user': {
                'limit': int(response.headers.get('X-RateLimit-UserLimit', 500)),
                'remaining': int(response.headers.get('X-RateLimit-UserRemaining', 0)),
                'reset': int(response.headers.get('X-RateLimit-UserReset', 3600))  # 1小时重置
            },
            'post': {
                'limit': int(response.headers.get('X-Post-Rate-Limit-Limit', 1250)),  # 每小时1250 POST
                'remaining': int(response.headers.get('X-Post-Rate-Limit-Remaining', 0)),
                'reset': int(response.headers.get('X-Post-Rate-Limit-Reset', 3600))  # 1小时重置
            }
        }
        
        # 检查客户端应用每日限制
        if limits['client']['remaining'] < self.upload_credit_cost:
            reset_time = limits['client']['reset']
            print(f"警告: 客户端每日配额不足 (剩余: {limits['client']['remaining']}/{limits['client']['limit']})")
            raise Exception(f"RATE_LIMIT:CLIENT:{reset_time}")
        
        # 检查用户IP限制
        if limits['user']['remaining'] < self.upload_credit_cost:
            reset_time = limits['user']['reset']
            print(f"警告: 用户IP配额不足 (剩余: {limits['user']['remaining']}/{limits['user']['limit']})")
            raise Exception(f"RATE_LIMIT:USER:{reset_time}")
        
        # 检查POST请求限制
        if limits['post']['remaining'] < 1:  # POST限制按请求次数计算，不是按信用点数
            reset_time = limits['post']['reset']
            print(f"警告: POST请求配额不足 (剩余: {limits['post']['remaining']}/{limits['post']['limit']})")
            raise Exception(f"RATE_LIMIT:POST:{reset_time}")
        
        # 打印当前限制状态（调试用）
        print(f"速率限制状态:", file=sys.stderr)
        print(f"- 客户端: {limits['client']['remaining']}/{limits['client']['limit']} (重置时间: {limits['client']['reset']}秒后)", file=sys.stderr)
        print(f"- 用户IP: {limits['user']['remaining']}/{limits['user']['limit']} (重置时间: {limits['user']['reset']}秒后)", file=sys.stderr)
        print(f"- POST请求: {limits['post']['remaining']}/{limits['post']['limit']} (重置时间: {limits['post']['reset']}秒后)", file=sys.stderr)
    
    def upload(self, image_path: str) -> dict:
        import time
                
        # 先检查总体配额状态
        credits = self.check_credits()
        
        url = "https://api.imgur.com/3/upload"
        
        # 获取文件名和 MIME 类型
        filename = os.path.basename(image_path)
        mime_type = {
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif'
        }.get(os.path.splitext(filename)[1].lower(), 'image/png')
        
        # 构建请求头
        headers = {
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'origin': 'https://imgur.com',
            'referer': 'https://imgur.com/',
            'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36'
        }
        
        try:
            with open(image_path, 'rb') as img_file:
                files = {'image': (filename, img_file, mime_type)}
                data = {'type': 'file', 'name': filename}
                
                while True:
                    try:
                        response = self.session.post(
                            f"{url}?client_id={self.config.CLIENT_ID}",
                            headers=headers,
                            files=files,
                            data=data
                        )
                        response.raise_for_status()
                        
                        # 检查速率限制
                        self.check_rate_limits(response)
                        
                        # 添加延时避免触发限制
                        time.sleep(self.request_delay)
                        return response.json()
                        
                    except requests.exceptions.HTTPError as e:
                        if e.response.status_code == 429:
                            # 统一使用与 check_rate_limits 相同的错误格式
                            reset_time = int(e.response.headers.get('X-RateLimit-ClientReset', 
                                      e.response.headers.get('X-RateLimit-UserReset', 
                                      e.response.headers.get('X-Post-Rate-Limit-Reset', 3600))))
                            raise Exception(f"RATE_LIMIT:POST:{reset_time}")  # 使用统一的错误格式
                        raise
                    
        except Exception as e:
            raise Exception(f"上传失败: {e}")
        finally:
            try:
                os.unlink(image_path)
            except:
                pass

def main(file_path: Optional[str] = None) -> str:
    try:
        processor = ImageProcessor()
        uploader = ImgurUploader()
        
        # 读取并处理图片
        # 打印正在处理的图片名称
        print(f"\n正在上传图片: {os.path.basename(file_path)}", file=sys.stderr)
        image = processor.read_image(file_path)
        if not image:
            raise ValueError("Failed to read image")
            
        normalized_image = processor.normalize_image(image)
        temp_path = processor.save_temp_image(normalized_image)
        
        # 上传图片并获取响应
        response = uploader.upload(temp_path)
        
        # 确保返回链接
        if 'data' in response and 'link' in response['data']:
            return response['data']['link']
        else:
            raise ValueError("Invalid response from Imgur")
        
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    input_path = sys.argv[1] if len(sys.argv) > 1 else None
    result = main(input_path)
    print(result)