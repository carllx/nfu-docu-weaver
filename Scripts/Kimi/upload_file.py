# -*- coding: utf-8 -*-
import argparse
import os
import json
import sys
import urllib.parse

from refresh_token import RefreshToken
from upload_file_01_pre_sign_url import Query as PreSignUrl
from upload_file_02 import Query as FileUpload
from upload_file_03_file_info import Query as FileInfo
from upload_file_04_file_process import Query as FileProcess
from new_conversation import NewConversation

# from chat import Chat


# Upload a file and return the file id
def main(zoteroID:str, file_path:str, contentType:str, conversation:None):
    
    authorization = RefreshToken()["access_token"]
    # Get file name from file path
    file_name = file_path.split("/")[-1]
    
    # if conversation id not provided, create a new conversation
    if conversation is None:
        res = NewConversation(name=file_name)
        conversation = res["id"]

    # 1. 生成预签名URL
    pre_sign = PreSignUrl(file_name, authorization, conversation)
    presigned_url = pre_sign["url"]
    object_name = pre_sign["object_name"]
    
    # 2. 上传文件 (application/pdf)
    isSucessed =FileUpload(presigned_url, file_path, contentType)
    if not isSucessed:
        return False
    
    # 3. 获取文件信息
    file_info = FileInfo(file_name, object_name, authorization, conversation)
    id = file_info["id"]

    # 4. 文件处理
    file_process = FileProcess(ids=[id], authorization=authorization, conversation=conversation)
    
    if file_process["status"] != "parsed":
        sys.stderr.write(f"file_process['status']: {file_process['status']}")
        return (file_process["status"])
    
    # Not clearly why some process cause "failed_reason" in file_process
    # # if file_process has property "failed_reason", return it
    # if "failed_reason" in file_process["file_info"]:
    #     sys.stderr.write(f"file_process['failed_reason']['file_info']: {file_process['failed_reason']}")
    #     return (file_process["failed_reason"]['file_info'])
    
    file_info = file_process["file_info"]
    file_info["zoteroID"] = zoteroID
    
    # append file_info into attachments.json
    script_dir = os.path.dirname(os.path.realpath(__file__))
    # Build the path to attachments.json
    attachments_path = os.path.join(script_dir, 'attachments.json')
    attachments = json.loads(open(attachments_path).read())
    attachments.append(file_info)
    # open(attachments_path, 'w').write(json.dumps(attachments, indent=4,ensure_ascii=False).encode('utf8'))
    # Write attachments to file with utf8 encoding
    with open(attachments_path, 'w', encoding='utf-8') as f:
        json.dump(attachments, f, ensure_ascii=False, indent=4)

    # url encode file_info
    # Convert the dictionary to a URL-encoded string
    url_encoded_file_info = urllib.parse.urlencode(file_info)
    # This will output a URL-encoded string that looks something like this:
    # id=cncug9sudu6bco2uf5ag&name=Alexiou+et+al.+-+2019+-+A+comprehensive+study+of+the+rate-distortion+performance+in+MPEG+point+cloud+compression.pdf&type=file&content_type=pdf&status=parsed&size=2270944&token_size=29430&failed_reason=



    
    return (url_encoded_file_info)



if __name__ == "__main__":
    # Create the parser
    parser = argparse.ArgumentParser(description="Upload a file")
    # Add the arguments
    parser.add_argument('--file', metavar='file', type=str, required=True, help='the file to upload')
    parser.add_argument('--itemID', metavar='itemID', type=str, required=True, help='ID of the item in Zotero')
    parser.add_argument('--contentType', metavar='contentType', type=str, required=True, help='type of file (e.g. application/pdf)')
    parser.add_argument('--conversation', metavar='conversation', type=str, default=None, help='the conversation (optional)')

    # Parse the arguments
    args = parser.parse_args()
    
    file_id = main(zoteroID= args.itemID,
                   file_path = args.file, 
                   contentType = args.contentType, 
                   conversation = args.conversation)
    # output file_id to stdout
    sys.stdout.write(file_id)

   

# file_id = main(file_path = "/Users/yamlam/Zotero/storage/KZVWGU78/谭亮 - 2019 - 构建公共空间中的具身交互设计模型.pdf", conversation = "cnqkkmo3r07fh4j5ceag")


# usage: 
# python upload_file.py /path/to/file.txt my_conversation_id
# Use the -h flag for help: python upload_file.py -h



# main(file_path = "/Users/yamlam/Zotero/storage/KEH7UXSC/Meynet et al. - 2020 - PCQM A full-reference quality metric for colored 3D point clouds.pdf", conversation="cncmsccbbvdnduh54b40")





# res = Chat(conversation="cncmsccbbvdnduh54b40", content="概括这两篇论文的联系与差异", refs=['cnd2gm2lnl9aamcmti2g','cncug9sudu6bco2uf5ag'], use_search=False)
# # Write res to file
# script_dir = os.path.dirname(os.path.realpath(__file__))
# # Build the path to config.json
# config_path = os.path.join(script_dir, 'config.json')
# chat_path = os.path.join(script_dir, 'chat.txt')
# with open(chat_path, 'w') as f:
#     f.write(res)

# authorization = RefreshToken()["access_token"]
# file_info = FileInfo(file_name, object_name, authorization=authorization, conversation="cncmsccbbvdnduh54b40")
# # res = FileProcess(ids=["cncug9sudu6bco2uf5ag"], authorization=authorization, conversation="cncmsccbbvdnduh54b40")



# # add zotero id to file_info
    
#     #load attachments.json
# script_dir = os.path.dirname(os.path.realpath(__file__))
# # Build the path to attachments.json
# attachments_path = os.path.join(script_dir, 'attachments.json')
# attachments = json.loads(open(attachments_path).read())

# # add zoteroID to file_info
# # Get file name from file path
# file_name = args.file.split("/")[-1]
# for idx, file_info in enumerate(attachments):
#     if file_info["name"] == file_name:
#         attachments[idx]['zoteroID'] = args.itemID
#         break

# # Write attachments to file with utf8 encoding
# with open(attachments_path, 'w', encoding='utf-8') as f:
#     json.dump(attachments, f, ensure_ascii=False, indent=4)