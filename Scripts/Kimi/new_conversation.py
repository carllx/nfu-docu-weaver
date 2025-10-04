# -*- coding: utf-8 -*-

import requests
import json
import os
import sys

from refresh_token import RefreshToken

def Query(name: str="未命名会话", access_token: str=""):
    url = "https://kimi.moonshot.cn/api/chat"

    payload = json.dumps({
    "name": name,
    "is_example": False
    })
    headers = {
        'Host': 'kimi.moonshot.cn',
        'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        'content-type': 'application/json',
        'r-timezone': 'Asia/Shanghai',
        'sec-ch-ua-mobile': '?0',
        # "authorization": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTcwODc0NzIzNSwiaWF0IjoxNzA4NzQ2MzM1LCJqdGkiOiJjbmNtY25vM3IwN2RqN3B1NXRoMCIsInR5cCI6ImFjY2VzcyIsInN1YiI6ImNuMzRjaGt1ZHU2OWFwZ21ucWJnIiwic3BhY2VfaWQiOiJjbjM0Y2hrdWR1NjlhcGdtbnFiMCIsImFic3RyYWN0X3VzZXJfaWQiOiJjbjM0Y2hrdWR1NjlhcGdtbnFhZyJ9.MVbeeKMzLYhzUg_r3cT8FqzHK9yidmUVMnE9Z8y1NqKkxc_Fjpmo0n_WlKS2u9_Ucks4GBkuqPyxEe2PC2bQ6A",
        'authorization': f'Bearer {access_token}',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"',
        'accept': '*/*',
        'origin': 'https://kimi.moonshot.cn',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://kimi.moonshot.cn/chat/cn34d6pkqq4rls03np80',
        'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7'
    }
    
    response = requests.request("POST", url, headers=headers, data=payload)
    Res = response.json()
    return(Res)
# Ouptput: 
# {
#     "id": "cncjaag3r07e3krvk73g",
#     "name": "lesson011",
#     "thumb_status": {
#         "is_thumb_up": false,
#         "is_thumb_down": false
#     },
#     "created_at": "2024-02-24T08:15:38.764069867+08:00",
#     "is_example": false,
#     "status": "normal"
# }


def NewConversation(name: str="未命名会话"):

    access_token = RefreshToken()["access_token"]
    Res = Query(name, access_token)
    # sys.stderr.write(f"New conversation : {Res}\n")
    
    # script_dir = os.path.dirname(os.path.realpath(__file__))
    # # Build the path to config.json
    # config_path = os.path.join(script_dir, 'config.json')
    # config = json.loads(open(config_path).read())
    # config["conversations"].append(Res)
    # open(config_path, 'w').write(json.dumps(config, indent=4))
    
    return Res

# if __name__ == "__main__":
#     sys.stdout.write(NewConversation("Prepare for the interview01"))