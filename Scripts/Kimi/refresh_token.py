# -*- coding: utf-8 -*-

import requests
import json
import time
import datetime
import os
import sys

DURATION_REFRESH = 300 # 5 minite
DURATION_REFRESH = 1
DURATION_REFRESH = 60 # 1 minite
DURATION_REFRESH = 120 # 2 minite

def Query(access_token: str):
    url = "https://kimi.moonshot.cn/api/auth/token/refresh"

    headers = {
    'Host': 'kimi.moonshot.cn',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
    'sec-ch-ua-mobile': '?0',
    # 'authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTcxNjUxNDM1MywiaWF0IjoxNzA4NzM4MzUzLCJqdGkiOiJjbmNrZWNhbG5sOTU3N3Y3bXFvZyIsInR5cCI6InJlZnJlc2giLCJzdWIiOiJjbjM0Y2hrdWR1NjlhcGdtbnFiZyIsInNwYWNlX2lkIjoiY24zNGNoa3VkdTY5YXBnbW5xYjAiLCJhYnN0cmFjdF91c2VyX2lkIjoiY24zNGNoa3VkdTY5YXBnbW5xYWcifQ.8_rE1Yiz_QWeZLDJ2-qxdPvCFepoZlOASjjFs6_rfTp46PTH5zq6MwWn1egl8QMf4aQFEJXQqcgDN0TCdxpZ_Q',
    'authorization': f'Bearer {access_token}',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"macOS"',
    'accept': '*/*',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://kimi.moonshot.cn/chat/cn34r0cudu60s03priqg',
    'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7'
    }
    response = requests.request("GET", url, headers=headers)
    
    refresh_token = response.json()
    return refresh_token

def RefreshToken():
    script_dir = os.path.dirname(os.path.realpath(__file__))
    # Build the path to config.json
    config_path = os.path.join(script_dir, 'config.json')

    config = json.loads(open(config_path).read())
    # caculate if the refresh_time from config is over 5 minite from now
    refresh_time = datetime.datetime.strptime(config['refresh_time'], "%Y-%m-%d %H:%M:%S")
    now = datetime.datetime.now()
    if (now - refresh_time).seconds < DURATION_REFRESH: 
        return { "access_token":config['access_token'], "refresh_token":config['refresh_token'] }
    else:
        sys.stderr.write("refresh token ...\n")
        refresh_token = config['refresh_token']
        new_token =  Query(refresh_token)
        
        # if the new_token is invalid, we need refresh again
        # {'error_type': 'auth.token.invalid', 'message': '您的授权已过期，请重新登录'}
        if 'error_type' in new_token:
            sys.stderr.write("refresh token again ...")
            time.sleep(5)
            new_token =  Query(refresh_token)

            


        config['refresh_token'] = new_token['refresh_token']
        config['access_token'] = new_token['access_token']
        config['refresh_time'] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
        open(config_path, 'w' ).write(json.dumps(config, indent=4))
        return config



if __name__ == "__main__":
    sys.stdout.write(RefreshToken())
    