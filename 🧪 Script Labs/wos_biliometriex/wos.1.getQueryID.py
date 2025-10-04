
import sys
import requests
import ast
import json


def getQueryID(SID, Keyword):

  url = url = f"https://www.webofscience.com/api/wosnx/core/runQuerySearch?SID={SID}"

  payload = {"product":"WOSCC","searchMode":"general","viewType":"search","serviceMode":"summary","search":{"mode":"general","database":"WOSCC","query":[{"rowField":"ALL","rowText":Keyword}]},"retrieve":{"count":1,"history":True,"jcr":True,"sort":"relevance","analyzes":["TP.Value.6","REVIEW.Value.6","EARLY ACCESS.Value.6","OA.Value.6","DR.Value.6","ECR.Value.6","PY.Field_D.6","DT.Value.6","AU.Value.6","DX2NG.Value.6","PEERREVIEW.Value.6"]},"eventMode":None,"isPreprintReview":False}
  # print(payload)
  payload = str(json.dumps(payload, allow_nan=False)) 
  headers = {
    'Host': 'www.webofscience.com',
    'Cookie': '_abck=8DD7787BA08F3F3499573F672A6230B9~-1~YAAQ1uNH0hEhjQGGAQAAWuUyCQnjooEhqX00r+id93rggKp5rSn6n35uhCJRxy4cR+FMnFQnDTv65aPON5CMtFoqbvTf+QQG3Bl57G622rivOQZIw+XnrZQZCsoUWRwpGxx58rVjXUcTkfgWCqyQhHAPlkoOVARXEokKlL1Q9+uqM1UMRSlZSiLw9xtZT75WdE7Ts8136kvJf/QDwk8ygNYro+oxkXaqteS8OPtZ0dm596vkMW5022nJGgDVqrHRsDjMXm4i8OM0HgqYFxf5ovNJl9N8iUo8Euji5dUu6jaFBeyzZF0AjrcL2UlH4nBlvnsZ8/E5UvCOz3f5T18RxoobxRc5rqosZ9gTHHWTKKSj18z3pbYjsGoNyysHhJRp66HQ12E5ZbTXXUhUXwI6bEwWWm0nrmKv3eKGVcjZ~0~-1~-1; dotmatics.elementalKey=SLsLWlMhrHnTjDerSrlG; group=group-g; __cf_bm=suDGL2JRXmSDt107jYfSNfnUy62meGmbXazRR.qYs3Y-1703951264-1-ARHxAX2rrmkTV3QNGeLsOC0o4+iTUD2FctSZAO+0QPFoNDb6sN7bTLcgBSjvfwvOBWFhzZGzRd644R1H1i8Rvfs=; _sp_ses.840c=*; _sp_id.840c=df1d64af-dd7f-4db2-a836-6bb2c2f19970.1672133583.11.1703951314.1703775662.7386541b-22ab-4ca3-ae6e-e995365ab89f.aebe8cbc-cd79-4c5f-8fa8-b5c751ba3718.9fc9cd62-a4a1-4896-a834-e198fac0c67c.1703951267513.3',
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'accept': 'application/x-ndjson',
    'content-type': 'text/plain;charset=UTF-8',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"macOS"',
    'origin': 'https://www.webofscience.com',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.webofscience.com/wos/woscc/basic-search',
    'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7'
  }
  # print(headers)

  response = requests.request("POST", url, headers=headers, data=payload)
  # Remove the extra {"api":...} line

  text = response.text.split('\n')[0]
  # Wrap the text in square brackets to make it a valid JSON array
  text = '[' + text + ']'

  return text

def testSID(SIDs, keyword):
   actual_SIDs = ast.literal_eval(SIDs)
   for sid in actual_SIDs:
      res = getQueryID(sid, keyword)
      res = json.loads(res)
      # print(res[0])
      res = res[0]["payload"]["QueryID"]
      return res
      # if != "Invalid SID":
  #  return actual_SIDs[0]
   
   

if __name__ == "__main__":
    sid = sys.argv[1]
    kw = sys.argv[2]
    # print(f'sid: {sid}, kw: {kw}')
    res = testSID(sid,kw)
    print(res)