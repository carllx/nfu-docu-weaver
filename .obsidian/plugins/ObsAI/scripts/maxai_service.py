import json
import time
import hmac
import hashlib
import requests
from typing import Dict, Any, Optional
from urllib.parse import urlparse

class MaxAIService:
    CONFIG = {
        'APP_VERSION': 'webpage_7.1.0',
        'APP_ENV': 'MaxAI-Browser-Extension',
        'DEVICE_ID': '1a260f8e-4c6c-4b33-8062-da318ae0376e',
        'USER_AGENT': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'REQUEST_TIMEOUT': 999999,
        'BASE_HEADERS': {
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'cache-control': 'no-cache',
            'pragma': 'no-cache',
            'origin': 'https://www.maxai.co',
            'referer': 'https://www.maxai.co/',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'x-browser-major': '133',
            'x-browser-name': 'Chrome',
            'x-browser-version': '133.0.0.0',
            'priority': 'u=1, i'
        }
    }

    def __init__(self, settings: Dict[str, Any]):
        self.settings = settings
        self.base_url = settings.get('baseUrl', 'https://api.maxai.me')
        self.access_token = settings.get('accessToken', '')
        self.user_id = settings.get('userId', '')
        self.sign_key = settings.get('signKey', '')
        self.time_diff = 0

    def _get_api_fetch_timestamp(self) -> int:
        return int(time.time() * 1000) + self.time_diff

    def _get_domain(self, url: str) -> str:
        try:
            hostname = urlparse(url).hostname
            return hostname.replace('www.', '') if hostname else 'maxai.co'
        except:
            return 'maxai.co'

    def _generate_authorization(self, api_url: str, referrer_url: str) -> str:
        url_obj = urlparse(api_url)
        pathname = url_obj.path
        if pathname.startswith('//'): 
            pathname = pathname.replace('//', '/')

        timestamp = self._get_api_fetch_timestamp()
        sign_str = f"{self.CONFIG['APP_VERSION']}:{timestamp}:{pathname}:{self.user_id}"
        sha1_secret_key = f"{timestamp}:{self.sign_key}"

        # 生成 SHA1 哈希
        sha1_hash = hmac.new(
            sha1_secret_key.encode(),
            sign_str.encode(),
            hashlib.sha1
        ).hexdigest()

        # 生成 SM3 签名
        final_sm3_sign = self._sm3(f"{timestamp}:{sha1_hash}:{self.sign_key}")

        auth_data = {
            "X-Client-Domain": self._get_domain(referrer_url),
            "X-Client-Path": referrer_url,
            "X-Random": str(int(time.time() * 1000) % 900000 + 100000),
            "d": self.CONFIG['DEVICE_ID'],
            "p": final_sm3_sign,
            "t": timestamp
        }
        
        return self._encrypt_auth_data(auth_data, self.user_id)

    def chat(self, params: Dict[str, Any]) -> Dict[str, Any]:
        conversation_id = params.get('conversationId', '')
        request_params = {
            **self._get_base_params(conversation_id),
            'message_content': params.get('messageContent', []),
            'model_name': params.get('modelName', 'gpt-4'),
            'prompt_inputs': {
                'AI_RESPONSE_LANGUAGE': params.get('responseLanguage', 'Simplified Chinese'),
                'RELATED_QUESTION_CNT': '5'
            }
        }

        return self.make_request(
            '/gpt/cwc/chat',
            'POST',
            request_params,
            f"https://www.maxai.co/app/?id={conversation_id}"
        )

    def make_request(self, endpoint: str, method: str = 'POST', 
                    data: Optional[Dict] = None, referrer_url: str = '') -> Dict[str, Any]:
        url = f"{self.base_url}{endpoint}"
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {self.access_token}',
            'x-app-env': self.CONFIG['APP_ENV'],
            'x-app-version': self.CONFIG['APP_VERSION'],
            'user-agent': self.CONFIG['USER_AGENT'],
            'Origin': 'https://www.maxai.co',
            'Referer': referrer_url,
            **self.CONFIG['BASE_HEADERS']
        }

        headers['x-authorization'] = self._generate_authorization(url, referrer_url)

        response = requests.request(
            method=method,
            url=url,
            headers=headers,
            json=data,
            timeout=self.CONFIG['REQUEST_TIMEOUT'] / 1000
        )

        if not response.ok:
            error_data = response.json()
            error_message = error_data.get('detail') or error_data.get('msg') or f'请求失败 ({response.status_code})'
            raise Exception(f'API 请求失败: {error_message}')

        response_data = response.json()
        if response_data.get('status') == 'OK':
            return response_data
        
        raise Exception('Invalid response format or status not OK')

    def _get_base_params(self, conversation_id: str = '') -> Dict[str, Any]:
        return {
            'conversation_id': conversation_id,
            'chat_history': [],
            'doc_ids': [],
            'event_source': 'web',
            'feature_name': 'immersive_chat',
            'chrome_extension_version': self.CONFIG['APP_VERSION'],
            'prompt_type': 'freestyle',
            'source_type': 'NA',
            'prompt_id': 'chat',
            'prompt_name': 'chat',
            'streaming': False,
            'use_artifact': True
        }

if __name__ == '__main__':
    # 示例使用
    settings = {
        'baseUrl': 'https://api.maxai.me',
        'accessToken': 'your_access_token',
        'userId': 'your_user_id',
        'signKey': 'your_sign_key'
    }
    
    service = MaxAIService(settings)
    try:
        response = service.chat({
            'conversationId': 'test-conversation',
            'messageContent': [{'type': 'text', 'text': '你好'}],
            'responseLanguage': 'Simplified Chinese',
            'modelName': 'gpt-4'
        })
        print(json.dumps(response, ensure_ascii=False, indent=2))
    except Exception as e:
        print(f'Error: {e}')