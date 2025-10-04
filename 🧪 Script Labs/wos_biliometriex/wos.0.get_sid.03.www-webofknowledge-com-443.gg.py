from urllib.parse import parse_qs, urlparse, unquote
from bs4 import BeautifulSoup


def get_sid():
  SIDs = []
  html_page = f'''<head>
    <title>文档已移动</title>
</head>

<body>
    <h1>对象已移动</h1>可在<a
        HREF="https://access-clarivate-com-443.a8.yyttgd.top/login?app=wos&amp;detectSession=true&amp;referrer=TARGET%3Dhttps%253A%252F%252Fwebofscience.clarivate.cn%252Fwos%252F%253Fmode%253DNextgen%2526path%253D%25252Fwos%25252Falldb%25252Fbasic-search%2526IsProductCode%253DYes%2526Init%253DYes%2526DestApp%253DUA%2526Func%253DFrame%2526action%253Dtransfer%2526SrcApp%253DCR%2526SID%253DUSW2EC0FD4LBdWGXug3krtghhTb8r%26SID%3DUSW2EC0FD4LBdWGXug3krtghhTb8r%26detectSessionComplete%3Dtrue">此处</a>找到该文档
</body>'''
  soup = BeautifulSoup(html_page, "html.parser")
  for link in soup.findAll('a'):
      herf = link.get('href') # 'https://access-clarivate-com-443.a8.yyttgd.top/login?app=wos&amp;detectSession=true&amp;referrer=TARGET%3Dhttps%253A%252F%252Fwebofscience.clarivate.cn%252Fwos%252F%253Fmode%253DNextgen%2526path%253D%25252Fwos%25252Falldb%25252Fbasic-search%2526IsProductCode%253DYes%2526Init%253DYes%2526DestApp%253DUA%2526Func%253DFrame%2526action%253Dtransfer%2526SrcApp%253DCR%2526SID%253DUSW2EC0FD4LBdWGXug3krtghhTb8r%26SID%3DUSW2EC0FD4LBdWGXug3krtghhTb8r%26detectSessionComplete%3Dtrue'
      parsed_herf = urlparse(herf)
      query = parse_qs(parsed_herf.query) 
      for key in query["referrer"]: 
          p = (unquote(key))
          SIDs = SIDs + parse_qs(p)['SID'] # ['USW2EC0FD4LBdWGXug3krtghhTb8r', 'USW2EC0FD4LBdWGXug3krtghhTb8r']
  print(SIDs)
