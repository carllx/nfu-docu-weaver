import json
# import requests
import mimetypes
import os, sys
from codecs import encode
import subprocess
import http.client
import ssl
"""
Client ID: 3d04593d5c23c30
Client secret: c830aab949fa9f2d664e674a5abc28c3c850a523
"""


YOUR_CLIENT_ID = "3d04593d5c23c30"
IS_Video = False

"""
This method uses the `http.client.HTTPSConnection` to create a connection to the Imgur API endpoint, and manually builds the request by setting the headers, payload, and the request method. The file is read as binary data using the `open(file_path, 'rb').read()` method and passed as the body of the request.
Once the request is sent, the response is read using the `conn.getresponse()` method, and the status code and response data are checked to ensure that the file was successfully uploaded. If the status code is not 200, an error is raised, otherwise, the response data is returned as a Python dictionary.

Please note that this method doesn't handle proxy and ssl verification, if you need to handle these cases you should add the necessary code to handle them.
"""
def upload_to_imgur(file_path: str) -> dict:
    media_type = 'image'
    file_type = mimetypes.guess_type(file_path)[0]
    if file_type.startswith('image'):
        max_size = 10 * 1024 * 1024  # 10MB
    elif file_type.startswith('video'):
        IS_Video = True
        max_size = 200 * 1024 * 1024  # 200MB
        media_type = 'video'
    else:
        raise ValueError(f'Unsupported file type: {file_type}')
    file_size = os.path.getsize(file_path)
    if file_size > max_size:
        raise ValueError(f'File size exceeds the limit ({max_size} bytes)')
    
    
    
    result = subprocess.run(["pgrep", "Charles"], stdout=subprocess.PIPE)
    isCharlesRunning = result.returncode == 0
    context = None
    if isCharlesRunning:
        os.environ['HTTP_PROXY'] = 'http://192.168.10.4:8888'
        os.environ['HTTPS_PROXY'] = 'http://192.168.10.4:8888'
        context = ssl._create_unverified_context()
        context.check_hostname = False
        context.verify_mode = ssl.CERT_NONE
    conn = http.client.HTTPSConnection("api.imgur.com",context =context )
    
    file_name=os.path.basename(file_path)
    dataList = []
    boundary = 'wL36Yn8afVp8Ag7AmP8qZ0SA4n1v9T'
    dataList.append(encode('--' + boundary))
    dataList.append(encode(f'Content-Disposition: form-data; name={media_type}; filename={0}'.format(file_name)))
    fileType = mimetypes.guess_type(file_path)[0] or 'application/octet-stream'
    dataList.append(encode('Content-Type: {}'.format(fileType)))
    dataList.append(encode(''))
    with open(file_path, 'rb') as f:
        dataList.append(f.read())
        dataList.append(encode('--' + boundary))
        dataList.append(encode('Content-Disposition: form-data; name=type;'))
        dataList.append(encode('Content-Type: {}'.format('text/plain')))
        dataList.append(encode(''))
        dataList.append(encode("file"))
        dataList.append(encode('--' + boundary))
        dataList.append(encode('Content-Disposition: form-data; name=name;'))
        dataList.append(encode('Content-Type: {}'.format('text/plain')))
        dataList.append(encode(''))
        dataList.append(encode(file_name))
        dataList.append(encode('--'+boundary+'--'))
        dataList.append(encode(''))
        body = b'\r\n'.join(dataList)
        payload = body
        headers = { 
            'Authorization': f'Client-ID {YOUR_CLIENT_ID}',
            'Content-type': 'multipart/form-data; boundary={}'.format(boundary),
        }
        conn.request("POST", "/3/upload", body=payload, headers=headers)
        res = conn.getresponse()
        data = res.read()
        if res.status != 200:
            raise ValueError(f'Failed to upload {media_type}: {data}')
    return json.loads(data)

# This code converts a JSON response to a Markdown link
# The JSON response is expected to have a "link" element, which is a URL
# The Markdown link is a Markdown image, with the URL as the image source
def toMD(response: dict) -> str:
    link: str = response['data']['link']
    type: str = response['data']['type']
    if type == 'video/mp4':
        md_link = f'<video height="150" muted="true" controls="" preload="metadata" name="media"><source src="'+link+'" type="video/mp4"></video>'
    else: # image
        # Change the file suffix of the return link (the last three characters of the string) to webp format
        md_link = link[:-3] + 'webp'
        md_link: str = '![150|]('+link+')'
    return md_link





if __name__ == "__main__":
    path = sys.argv[1]
    # path = "/Users/yamlam/Downloads/clipboard.png"
    # path = "/Users/yamlam/Downloads/1665548977231046.mp4"
    res = upload_to_imgur(path) 
    markdown = toMD(res)
    print(markdown)

# <video height="150" muted="true" controls="" preload="metadata" name="media"><source src="https://i.imgur.com/R6cbMZ6.mp4" type="video/mp4"></video>

# video_response = {
#     'status': 200,
#     'success': True,
#     'data': {
#         'id': 'R6cbMZ6', 'deletehash': 'fGVl6YM5PtNKUtP', 'account_id': None, 'account_url': None, 'ad_type': None, 'ad_url': None, 'title': None, 'description': None, 'name': '1665548977231046.mp4', 'type': 'video/mp4', 'width': 0, 'height': 0, 'size': 0, 'views': 0, 'section': None,
#         'vote': None, 'bandwidth': 0, 'animated': True, 'favorite': False, 'in_gallery': False, 'in_most_viral': False, 'has_sound': False, 'is_ad': False, 'nsfw': None, 'link': 'https://i.imgur.com/R6cbMZ6.mp4', 'tags': [], 'processing': {'status': 'pending'}, 'datetime': 1674649546, 'mp4': 'https://i.imgur.com/R6cbMZ6.mp4', 'hls': ''
#         }}
# def upload_to_imgur(file_path: str) -> dict:
#     media_type = 'image'
#     file_type = mimetypes.guess_type(file_path)[0]
#     if file_type.startswith('image'):
#         max_size = 10 * 1024 * 1024  # 10MB
#     elif file_type.startswith('video'):
#         max_size = 200 * 1024 * 1024  # 200MB
#         media_type = 'video'
#     else:
#         raise ValueError(f'Unsupported file type: {file_type}')

#     file_size = os.path.getsize(file_path)
#     if file_size > max_size:
#         raise ValueError(f'File size exceeds the limit ({max_size} bytes)')
#     proxies = None
#     result = subprocess.run(["pgrep", "Charles"], stdout=subprocess.PIPE)
#     isCharlesRunning = result.returncode == 0
#     if isCharlesRunning:
#         proxies = {'http': 'http://localhost:8888','https': 'http://localhost:8888'}
#         print("Charles is running")
#     url = 'https://api.imgur.com/3/upload'# url = 'https://api.imgur.com/3/image'
#     headers = {'Authorization': f'Client-ID {YOUR_CLIENT_ID}'}
#     # data = {'image': open(file_path, 'rb'), 'type': 'file'}
#     # data = {'image':  f'@{file_path}',  'type': 'file'}
#     file_name = os.path.basename(file_path)
#     payload = {'type': 'file', 'name': file_name}
#     files = [(media_type, (file_name, open(file_path, 'rb'), file_type))]
#     print(file_type)
#     response = requests.post(
#         url, headers=headers, data=payload, proxies=proxies, files=files, verify=False)
#     if response.status_code != 200:
#         raise ValueError(f'Failed to upload image: {response.text}')
#     return response.json()