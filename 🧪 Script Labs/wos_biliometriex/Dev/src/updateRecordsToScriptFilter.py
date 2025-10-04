# read name of folders in the thematic folder, and overwrite the ThematicList.csv
import os
import time
import json
import sys
dir_thematic = '/Users/yamlam/Documents/obsdiannote/🧪 Script Labs/Thematic/'
workflows_folder = '/Users/yamlam/Library/Application Support/Alfred/Alfred.alfredpreferences/workflows/user.workflow.15B8C3C4-42F1-422D-8DEF-1EB6EC0FDCD1/'


"""
return the items of the folder
    {"items": [
        {
            "uid": "name of Folder or txt file",
            "type": "skipcheck",
            "title": "name of Folder or txt file",
            "subtitle": "record on: yyyy-mm-dd",
            "arg": "name of Folder or txt file",
            "autocomplete": "name of Folder or txt file",
            "icon": {
                "type": "fileicon",
                "path": "ico/folder.png" # or "ico/code-square.png" 
            }
        }
    ]}
"""
def getRecordsFromDirection(path):
    result = {"items": []}
    items = []
    # get all folders in the thematic folder in oneline
    folders = [name for name in os.listdir(path) if os.path.isdir(os.path.join(path, name))]
   
    # check if folder is exist, the report is completed
    for name in os.listdir(path):
       
        title = name
        icon_path = ""
        if os.path.isdir(os.path.join(path, name)):
            icon_path = "ico/folder.svg"
        elif name.endswith(".txt"):
            # check if name is exit in the folder list
            n = name.replace(".txt", "")
            if n in folders:
                continue

            icon_path = "ico/code-square.svg"
            title = n
        else: # skip other files
            continue
        
        if title in [item["title"] for item in items]:
            continue
        
        # get folder's modification time
        mtime = os.path.getmtime(os.path.join(path, name))
        # convert the time to string yyyy-mm-dd, hh:mm:ss
        mtime = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(mtime))

        items.append({
                "uid": name,
                "title": title, 
                "subtitle": f"record on {mtime}", 
                "arg": title, 
                "autocomplete": name,
                "icon": {
                    "path": icon_path
                }
            })
    result["items"] = items
    # return folder_list
    return(result)


    
if __name__ == '__main__':
    # if sys.argv[1] == ""
    res = getRecordsFromDirection(dir_thematic)
    print(json.dumps(res, indent=4))
    
    # print(folder_list)



# settup arg
