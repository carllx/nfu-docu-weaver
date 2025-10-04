# -*- coding: utf-8 -*-
import requests
import json
import sys


from refresh_token import RefreshToken

def Query(conversation: str, access_token: str, content: str, refs: list = [], use_search: bool = False):
    url = f"https://kimi.moonshot.cn/api/chat/{conversation}/completion/stream"

    payload = json.dumps({
    "messages": [
        {
        "role": "user",
        "content": content,
        }
    ],
    "refs": refs, # [],
    "use_search": use_search
    })
    headers = {
    'Host': 'kimi.moonshot.cn',
    'authority': 'kimi.moonshot.cn',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
    'authorization': f'Bearer {access_token}',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'origin': 'https://kimi.moonshot.cn',
    'pragma': 'no-cache',
    'r-timezone': 'Asia/Shanghai',
    'referer': 'https://kimi.moonshot.cn/chat/{conversation}',
    'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    # Initialize an empty string to hold the paragraph
    paragraph = ""
    # Initialize 
    resp_id = None  
    group_id = None
    req_id = None
    chat_name = None

    # Loop over the response
    for line in response.iter_lines():

        # Filter out keep-alive new lines
        if line:
            decoded_line = line.decode('utf-8')

            # Only process lines that start with "data:"
            if decoded_line.startswith('data:'):
                data = decoded_line[5:].strip()

                # Parse the JSON data
                event_data = json.loads(data)

                # Check if the event is a "resp" event
                if event_data["event"] == "resp":
                    # Get the id
                    resp_id = event_data["id"]
                    group_id = event_data["group_id"]

                if event_data["event"] == "req":
                    # Add the text to the paragraph
                    # Get the id
                    req_id = event_data["id"]
                
                if event_data["event"] == "error":
                    # {"error":{"error_type":"openai.completion.token_length_too_long","message":"è½¬ç\x9c¼é\x97´ï¼\x8cä½\xa0å\x92\x8c Kimi ç\x9a\x84è¿\x99ä¸ªå¯¹è¯\x9då·²ç»\x8fè¶\x85è¿\x87äº\x86 20 ä¸\x87å\xad\x97ã\x80\x82Kimi å\x9c¨ä¸\x8dæ\x96\xadæ\x8f\x90å\x8d\x87è\x87ªå·±å¯¹è¯\x9dæ\x9c\x80å¤§é\x95¿åº¦ï¼\x8cä½\x86ç\x8e°å\x9c¨å\x8fªè\x83½éº»ç\x83¦ä½\xa0å¼\x80å\x90¯ä¸\x80ä¸ªæ\x96°ä¼\x9aè¯\x9dã\x80\x82æ\x9c\x9få¾\x85ä¸\x8eä½\xa0å\x86\x8dç\x9b¸é\x81\x87ï¼\x81"}
                    paragraph += event_data["error"]["message"]
                    
                if event_data["event"] == "rename":
                    # [TODO] 没有成功获取title, 
                    # 需要继续 GET `https://kimi.moonshot.cn/api/chat//{conversation}`
                    chat_name = event_data["text"]

                # Check if the event is a "cmpl" event
                elif event_data["event"] == "cmpl":
                    # Add the text to the paragraph
                    paragraph += event_data["text"]

    # Print the complete paragraph and resp_id
    return {
        "conversation_id":conversation,
        "chat_name": chat_name,
        "group_id": group_id,
        "resp_id": resp_id, 
        "req_id": req_id,
        "paragraph": paragraph, 
        "refs": refs,
        }


def Chat(conversation: str, content: str, refs: list = [], use_search: bool = False):
    access_token = RefreshToken()["access_token"]
    return Query(conversation, access_token, content, refs, use_search)


