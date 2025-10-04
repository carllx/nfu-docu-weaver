# -*- coding: utf-8 -*-
import argparse
import os
import sys
import json
import pyperclip




def readConversationTask():
    # read onversation template conversations/_template.json
    path_project = os.path.dirname(os.path.realpath(__file__))
    path_conversation = os.path.join(path_project, 'conversations/_template.json')
    template_conversation = json.loads(open(path_conversation).read())
    return template_conversation

def writeConversationTask(new_conversation):
    # write conversation to conversations/_template.json
    path_project = os.path.dirname(os.path.realpath(__file__))
    path_conversation = os.path.join(path_project, 'conversations/_template.json')
    with open(path_conversation, 'w' , encoding='utf-8') as f:
        f.write(json.dumps(new_conversation, ensure_ascii=False, indent=4))


# # Usage:
# # python chatPapers.py 
# #     --message "I am a student" 
# # ------- [TODO] -------
# #     --conversation "cncmsccbbvdnduh54b40" 
# #     --refs "cnlhj8sudu64d5d7gbtg cncn886cp7f7i8ccqu3g"

# Chat via query
if __name__ == "__main__":
   
    # Read Conversation template
    conversation = readConversationTask()
    
    


    

# In Bash and other Unix-like operating systems, 2>&1 is used to redirect standard error (2) to the same location as standard output (1).

# Here's a breakdown:

# 2 represents the standard error (stderr).
# 1 represents the standard output (stdout).
# > is the redirection operator.
# & indicates that what follows is a file descriptor and not a filename.
# So, 2>&1 means "redirect the standard error to the same place as the standard output". This is commonly used when you want to capture all output from a command, regardless of whether it was written to stderr or stdout.

# For example, if you have a command like command > file.txt 2>&1, it means "redirect the stdout of command to file.txt and also redirect stderr there". As a result, file.txt will contain both the standard output and the standard error from command.

# In this script, output=$(python "/Users/yamlam/Documents/obsdiannote/Scripts/Kimi/ChatPapers.py" 2>&1)