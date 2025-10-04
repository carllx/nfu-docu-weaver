import requests
import re
import os, sys
from urllib.parse import parse_qs, urlparse, unquote
from bs4 import BeautifulSoup

def requestSID(): 
  url = "http://www.sxxs.shop/api.php"

  payload = 'siteid=b.r88r.top&uname=55645841096&uid=407173&boz=qhwos&reurl=qhwos&bz=&referer=qhwos'
  headers = {
    'Host': 'www.sxxs.shop',
    'Cache-Control': 'max-age=0',
    'Upgrade-Insecure-Requests': '1',
    'Origin': 'http://b.r88r.top',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Referer': 'http://b.r88r.top/',
    'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
    'Cookie': 'PHPSESSID=r9kcrsgb2reuav4ako43dvssv6; ZDEDebuggerPresent=php,phtml,php3',
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  response = requests.request("POST", url, headers=headers, data=payload)
  return(response.text)


def get_sid():
    text = requestSID()
    """<script type='text/javascript'>location.href="https://www.webofscience.com/wos?path=woscc/basic-search&locale=zh-CN&SID=USW2EC0E707giiJinHp6mIIo7Scqy"</script><html>"""
    match = re.search(r"&SID=(\w+)", text)
    if match:
        return match.group(1)
    else:
        return None


if __name__ == "__main__":
    keyWord = sys.argv[1]
    res = get_sid() 
    print(res)