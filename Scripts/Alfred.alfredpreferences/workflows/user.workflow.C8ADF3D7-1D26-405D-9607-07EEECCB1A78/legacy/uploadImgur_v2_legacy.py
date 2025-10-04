import os
import sys
import json
import ssl
import http.client
from codecs import encode
from PIL import Image
from PIL import ImageGrab
import base64
import requests
import base64
import os

YOUR_CLIENT_ID = "3d04593d5c23c30"
# read image data from clipboard via PIL
def read_image_from_clipboard():
    im = ImageGrab.grabclipboard()
    return im


# read image data from file_path via PIL
def read_image_from_path(file_path):
    im = Image.open(file_path)
    return im

# normalize_image im, if it is not png and super 1024p, covert it to png and resize it
def normalize_image(im):
    width, height = im.size
    # if image size is super 1024p, resize it
    if width > 1024 or height > 1024:
        im.thumbnail((1024, 1024))
    
    return im

# upload image to imgur via requests
def upload_to_imgur(im):
    # dirPath 
    dir = '/Users/yamlam/Downloads/'
    file =  'clipboard'
    file_name = dir + file
    im.save(file_name, im.format) # 'PNG' or 'JPEG'

    # check if Charles is running
    url = "https://api.imgur.com/3/image?client_id=546c25a59c58ad7"
    payload = {'type': 'file',
               'name': file_name}
    files = [
        ('image', ('file', open(file_name, 'rb'), 'application/octet-stream'))
    ]
    headers = {
    'authority': 'api.imgur.com',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
    'cookie': 'is_authed=1; accesstoken=a74d00794c7fb07fb835bf14c4e405beee5a5e71; postpagebetalogged=1; is_emerald=0; frontpagebetav2=1; pp=1637972230417941; IMGURSESSION=40e43144b683e542097395f2ba13006a; _nc=1; amp_f1fc2a=S2049PIn-AiZ6JHjT0v8T0.MTY0MDU2NDI5..1hk39ne98.1hk39sn50.7.8.f',
    'origin': 'https://imgur.com',
    'referer': 'https://imgur.com/',
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
    }

    response = requests.request("POST", url, headers=headers, data=payload, files=files)
    return json.loads(response.text)

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
        md_link: str = '![bg fit left:50% vertical]('+md_link+')'
    return md_link

def uopload_to_imgur_from_path(file_path):
    im = read_image_from_path(file_path)
    im = normalize_image(im)
    res = upload_to_imgur(im)
    markdown = toMD(res)
    return markdown

def uopload_to_imgur_from_clipboard():
    im = read_image_from_clipboard()
    im = normalize_image(im)
    res = upload_to_imgur(im)
    markdown = toMD(res)
    return markdown
    

if __name__ == "__main__":
    if len(sys.argv) > 1:
        path = sys.argv[1]
        if os.path.isfile(path):
            res = uopload_to_imgur_from_path(path)
            print(res)
    else:
        res = uopload_to_imgur_from_clipboard()
        print(res)