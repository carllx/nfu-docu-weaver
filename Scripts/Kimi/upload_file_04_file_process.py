# -*- coding: utf-8 -*-

import requests
import json
import sys

def Query(ids, authorization, conversation): #ids:["cncug9sudu6bco2uf5ag"]
    url = "https://kimi.moonshot.cn/api/file/parse_process"

    payload = json.dumps({"ids":ids })
    headers = {
        "Host": "kimi.moonshot.cn",
        "sec-ch-ua": '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        "content-type": "application/json",
        "r-timezone": "Asia/Shanghai",
        "sec-ch-ua-mobile": "?0",
        "authorization": f"Bearer {authorization}",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "sec-ch-ua-platform": '"macOS"',
        "accept": "*/*",
        "origin": "https://kimi.moonshot.cn",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        # "accept-encoding": "gzip, deflate, br, zstd",
        "referer": f"https://kimi.moonshot.cn/chat/{conversation}",
        "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    # 'data: {"event":"resp","file_info":{"id":"cncug9sudu6bco2uf5ag","name":"Alexiou et al. - 2019 - A comprehensive study of the rate-distortion performance in MPEG point cloud compression.pdf","type":"file","content_type":"pdf","status":"parsed","size":2270944,"token_size":29430},"id":"cncug9sudu6bco2uf5ag","status":"parsed"}\n\n'
    sys.stderr.write(f'response.text: {response.text}\n')
    # covert response.text from response.encoding  ex:'ISO-8859-1' to utf 8
    content = response.content.decode()
    data = json.loads(content[6:])
    return data

    # suggest a name if we rewrite it into a function
    # Output:
    # data: {
    #     "event": "resp",
    #     "file_info": {
    #         "id": "cncug9sudu6bco2uf5ag",
    #         "name": "Alexiou et al. - 2019 - A comprehensive study of the rate-distortion performance in MPEG point cloud compression.pdf",
    #         "type": "file",
    #         "content_type": "pdf",
    #         "status": "parsed",
    #         "size": 2270944,
    #         "token_size": 29430,
    #         "failed_reason": "",
    #     },
    #     "id": "cncug9sudu6bco2uf5ag",
    #     "status": "parsed",
    # }
