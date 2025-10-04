import requests
import re
import os, sys
from urllib.parse import parse_qs, urlparse, unquote
from bs4 import BeautifulSoup


def requestSID(): 

  url = "http://106.53.104.97:5000/wos1"

  payload = {}
  headers = {
    'Host': '106.53.104.97:5000',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Referer': 'http://b.r88r.top/',
    'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7'
  }

  response = requests.request("GET", url, headers=headers, data=payload)

  return(response.text)



def get_sid():
  html_page = requestSID()
  soup = BeautifulSoup(html_page, "html.parser")
  for meta in soup.find_all("meta", {"http-equiv": "refresh"}): 
    # print(meta)
    url = meta.get('content')
    SIDs = parse_qs(url)['SID']
    return(SIDs)
    


if __name__ == "__main__":
    # keyWord = sys.argv[1]
    res = get_sid() 
    print(res)