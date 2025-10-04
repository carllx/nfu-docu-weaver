import requests
import json
import sys
import requests
import concurrent.futures
import ast

def getRecords(QueryID, SID, markFrom: str = "1", markTo: str = "500"):

    url = "https://www.webofscience.com/api/wosnx/indic/export/saveToFile"

    payload = json.dumps({
    "parentQid": QueryID,
    "sortBy": "relevance",
    "displayTimesCited": "true",
    "displayCitedRefs": "true",
    "product": "UA",
    "colName": "WOS",
    "displayUsageInfo": "true",
    "fileOpt": "othersoftware",
    "action": "saveToFieldTagged",
    "markFrom": markFrom, 
    "markTo": markTo,
    "view": "summary",
    "isRefQuery": "false",
    "locale": "zh_CN",
    "filters": "fullRecordPlus"
    })
    headers = {
    'authority': 'www.webofscience.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
    'content-type': 'application/json',
    'cookie': '_abck=8DD7787BA08F3F3499573F672A6230B9~-1~YAAQ1uNH0hEhjQGGAQAAWuUyCQnjooEhqX00r+id93rggKp5rSn6n35uhCJRxy4cR+FMnFQnDTv65aPON5CMtFoqbvTf+QQG3Bl57G622rivOQZIw+XnrZQZCsoUWRwpGxx58rVjXUcTkfgWCqyQhHAPlkoOVARXEokKlL1Q9+uqM1UMRSlZSiLw9xtZT75WdE7Ts8136kvJf/QDwk8ygNYro+oxkXaqteS8OPtZ0dm596vkMW5022nJGgDVqrHRsDjMXm4i8OM0HgqYFxf5ovNJl9N8iUo8Euji5dUu6jaFBeyzZF0AjrcL2UlH4nBlvnsZ8/E5UvCOz3f5T18RxoobxRc5rqosZ9gTHHWTKKSj18z3pbYjsGoNyysHhJRp66HQ12E5ZbTXXUhUXwI6bEwWWm0nrmKv3eKGVcjZ~0~-1~-1; dotmatics.elementalKey=SLsLWlMhrHnTjDerSrlG; group=group-g; __cf_bm=kV0zBHmTi4ZCCmjornEYlPIh5PfIclBhvtExf01sEK8-1703753176-1-ASwdanb2tu4RbKmnwf8AmzUh+TGEYhWM6tRLhaCq4yBnipKhhUbm6lMYpnxJIfJAnZNzUditVvAbwBwJqs3RQXk=; _sp_ses.840c=*; _sp_id.840c=df1d64af-dd7f-4db2-a836-6bb2c2f19970.1672133583.9.1703753429.1703743437.60200b0a-6f46-4790-84b9-5685b1db148e.e68ae18b-0ed0-4fa5-a3db-e77bb854ac58.aecbf271-18a0-4f9e-8f2f-9c5e8e8af78a.1703753180584.14',
    'origin': 'https://www.webofscience.com',
    'referer': 'https://www.webofscience.com/wos/woscc/summary/4c74a180-50c5-4233-bf81-a308acd55ec4-c0c5f6a0/relevance/1(overlay:export/exp)',
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'x-1p-wos-sid': SID
    }

    proxies = {
        'http': 'http://127.0.0.1:58992/',
        'https': 'http://127.0.0.1:58992/'
    }

    response = requests.request("POST", url, headers=headers, data=payload, proxies=proxies)
    # print(f'payload:{payload}')
    # print(f'headers:{headers}')
    return response.text


# A function that given a numeber of records, caculate the number if higher that 500, retrun a list of markFrom and markTo
def getMarkFromTo(num):
    res = []
    if num <= 500:
        res.append([1,num])
    else:
        for i in range(0,num,500):
            res.append([i+1,i+500])
    return res

def queryRecordsbyOrders(keyword, query_id, SID, number_of_record):
    res = []
    query_orders = getMarkFromTo(number_of_record)  # return [[1, 500], [1001, 2000]]
    
    with concurrent.futures.ThreadPoolExecutor() as executor:
        futures = []
        for order in query_orders:
            future = executor.submit(getRecords, query_id, SID, str(order[0]), str(order[1]))
            futures.append(future)
        
        for future in concurrent.futures.as_completed(futures):
            result = future.result()
            # {"errc":"Server.invalidInput","errm":"UIDs cannot be null or empty list"}
            # if error, skip, else append to res
            if result.find("errc") != -1:
                print(result)
                continue
            else:
                res.append(result)
    
    # Export result to a text file
    filename = f"/Users/yamlam/Documents/obsdiannote/🧪 Script Labs/Thematic/{keyword}.txt"
    print(filename)
    with open(filename, "w") as file:
        file.write("\n".join(res))
    
    return res
        

        
        
    


if __name__ == "__main__":
    keyword = sys.argv[1]
    query_id = sys.argv[2].strip()
    SID = ast.literal_eval(sys.argv[3])[0]
    number_of_record = int(sys.argv[4])
    res = queryRecordsbyOrders(keyword,query_id,SID,number_of_record)
    
    # res = getRecords(query_id,SID,markFrom,markTo)
    print(res)
