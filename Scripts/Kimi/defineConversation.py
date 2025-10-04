# -*- coding: utf-8 -*-

import argparse
import os
import sys
import json
from urllib.parse import unquote

from chat import Chat
from new_conversation import NewConversation



def readConversationTask(conversationName):
    # read onversation template conversations/_template.json
    path_project = os.path.dirname(os.path.realpath(__file__))
    path_conversation = os.path.join(path_project, 'conversations', f'{conversationName}.json')
    template_conversation = json.loads(open(path_conversation).read())
    return template_conversation

def writeConversationTask(template_conversation, conversationName):
    # write conversation to conversations/_template.json
    path_project = os.path.dirname(os.path.realpath(__file__))
    path_conversation = os.path.join(path_project, 'conversations', f'{conversationName}.json')
    # Write attachments to file with utf8 encoding
    with open(path_conversation, 'w', encoding='utf-8') as f:
        f.write(json.dumps(template_conversation, ensure_ascii=False, indent=4))





def definePrompt_Attachments(attachments):
    text = "The instructions for the attachments uploaded:\n"
    
    for attachment in attachments:
        
        text += f"- {attachment['title']}, "
        # check tags if contain "#Classical" on the list
        if attachment['date']:
            text += f"was published on {attachment['date']}. "
        if attachment['tags'] and "#Classical" in attachment['tags']:
            text += "This paper serves as the dominant theoretical frameworks for all subsequent papers included in the appendix. "
        if attachment['citationShort']:
            text += f"(It can be cite this paper as {attachment['citationShort']} on your answer). "
        text += "\n"

    return text

def definePrompt_Qustion(message:str):
    text = "\nNow, Listen to me:\n"
    text += message
    text += "\n"
    return text

# def definePrompt_Role():
#     # role = "student"
#     # return role
#     # Define the role of the user
#     return """As an academic expert, you excel at comparing and contrasting given papers. 
#     Please provide a comprehensive and structured summary of these papers."""

def definePrompt_ResponseStyle(language:str="English", format:str="Markdown"):
    return f"""Your answer should be in {language}, using the {format} format for layout."""

def defineRef(attachments:list):
    # extract fileID from attachments
    return [attachment["fileID"] for attachment in attachments]


def app(conversationName:str):
    
    # prepareConversation
    # Get onversation template
    conversation = readConversationTask(conversationName)
    
    # Defind New Conversation ID
    if not conversation["conversation_id"]:
        res = NewConversation()
        conversation["conversation_id"] = res["id"]
    

    # Defind Prompt
    # Role = definePrompt_Role()
    
    Files_info = definePrompt_Attachments(conversation["attachments"])
    
    Qustion = definePrompt_Qustion(conversation["prompt"])
    
    ResponseStyle = definePrompt_ResponseStyle(language = "Chinese", format = "Markdown")
    
    # Combine Prompt
    Content = f"""
{Qustion}
{ResponseStyle}
{Files_info}
"""

    conversation["prompt"] = Content


    # Defind refs
    refs = defineRef(conversation["attachments"])
    conversation["refs"] = refs
    
    # query Chat
    res = Chat(
        conversation=conversation["conversation_id"], 
        content=conversation["prompt"], 
        refs=conversation["refs"], 
        use_search=False
    )

    # Backup the resault to `_template.json`
    conversation["conversation_id"] = res["conversation_id"]
    conversation["title"] = res["chat_name"]
    conversation["response"] = res["paragraph"]
    conversation["group_id"] = res["group_id"]
    conversation["req_id"] = res["req_id"]
    conversation["resp_id"] = res["resp_id"]
    writeConversationTask(conversation, conversationName)
    # return res["paragraph"]
    

# # Usage:
# # python chatPapers.py 
# #     --conversation "A unique conversation json" 
# # ------- [TODO] -------
# #     --conversation "cncmsccbbvdnduh54b40" 
# #     --refs "cnlhj8sudu64d5d7gbtg cncn886cp7f7i8ccqu3g"

if __name__ == "__main__":
    
    # Create the parser
    parser = argparse.ArgumentParser(description="Send a message")

    # Add the arguments
    parser.add_argument('--conversation', metavar='conversation', type=str, help='A unique conversation json')
    # parser.add_argument('--refs', metavar='refs', type=list, nargs='*', help='the refs paper (optional)')
    # parser.add_argument('--conversation', metavar='conversation', type=str, help='the conversation id (optional)')
    # Pass arguments
    args = parser.parse_args()
    # args.message: 'æ¦æ¬è¿äºè®ºæä½¿ç¨äºä»ä¹æ¹æ³?'
    # convert args.message to utf-8
    # message = unquote(args.message)
    conversationName =  args.conversation

    # prepare Conversation
    conversation = app(conversationName)

    # sys.stdout.write(conversation)



    # conversation = app("概括这些论文使用了什么方法?")