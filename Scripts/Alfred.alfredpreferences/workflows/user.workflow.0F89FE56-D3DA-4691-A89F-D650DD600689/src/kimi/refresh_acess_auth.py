import requests
import json

# Read the default access token from the config file
with open('config.json') as f:
    data = json.load(f)
    default_access_token = data['default_access_token']

# Refresh the access token
def refresh_access_token():
    url = "https://kimi.moonshot.cn/api/auth/token/refresh"

    payload = {}
    headers = {
    'Host': 'kimi.moonshot.cn',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
    'sec-ch-ua-mobile': '?0',
    'authorization': f'Bearer {default_access_token}',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"macOS"',
    'accept': '*/*',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://kimi.moonshot.cn/chat/cn34r0cudu60s03priqg',
    'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7'
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    # return a json object
    """
    {
    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTcwNzU3Mzc3MCwiaWF0IjoxNzA3NTcyODcwLCJqdGkiOiJjbjNudDFnM3IwN2FyZGhpYzg0ZyIsInR5cCI6ImFjY2VzcyIsInN1YiI6ImNuMzRjaGt1ZHU2OWFwZ21ucWJnIiwic3BhY2VfaWQiOiJjbjM0Y2hrdWR1NjlhcGdtbnFiMCIsImFic3RyYWN0X3VzZXJfaWQiOiJjbjM0Y2hrdWR1NjlhcGdtbnFhZyJ9.BCvg4-tLYhAQ-VF1B2HE12_Pmak0bm9TsMZuF_K5GpIj6ThuY5vLEmRT5LoIpv1pxlMha1ITH0ke9NZDpLMkgg",
    "refresh_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTcxNTM0ODg3MCwiaWF0IjoxNzA3NTcyODcwLCJqdGkiOiJjbjNudDFnM3IwN2FyZGhpYzg1MCIsInR5cCI6InJlZnJlc2giLCJzdWIiOiJjbjM0Y2hrdWR1NjlhcGdtbnFiZyIsInNwYWNlX2lkIjoiY24zNGNoa3VkdTY5YXBnbW5xYjAiLCJhYnN0cmFjdF91c2VyX2lkIjoiY24zNGNoa3VkdTY5YXBnbW5xYWcifQ.vlFr0GU4Cej4acfE46xg47v9X8wd1BYLIbLNUuPlHHxUHy9WgmRJCup_EtnGz2t3PZoKL0dMVNbVvHwT4YnKOQ"
    }
    """
    return response.json()


# write to the config file
def write_to_config_file(response):
    with open('config.json', 'w') as f:
        data = json.load(f)
        # get refresh token from the response
        refresh_token = response['refresh_token']
        # write refresh_token into default_access_token of the config file
        data['default_access_token'] = refresh_token
        json.dump(data, f)

print(default_access_token)

