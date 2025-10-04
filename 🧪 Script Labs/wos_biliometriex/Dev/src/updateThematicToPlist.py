# read name of folders in the thematic folder, and overwrite the ThematicList.csv
import os
import xml.etree.ElementTree as ET

import plistlib
import tempfile

dir_thematic = '/Users/yamlam/Documents/obsdiannote/🧪 Script Labs/Thematic/'
workflows_folder = '/Users/yamlam/Library/Application Support/Alfred/Alfred.alfredpreferences/workflows/user.workflow.15B8C3C4-42F1-422D-8DEF-1EB6EC0FDCD1/'
folder_list = []
record_list = []
def getThematicFolderList(path):

    for name in os.listdir(path):
        # if folder is exist, the report is completed
        isReported = False
        if os.path.isdir(os.path.join(path, name)):
            folder_list.append({"title": f"{name}", "subtitle": f"Select a Thematic of {name}", "arg": name})
    
    for name in os.listdir(path):  

        if name.endswith(".txt"):
            isReported = False
            arg = name.replace(".txt", "")
            # check if the name is exist in folder_list
            for folder in folder_list:
                if folder['title'] == arg:
                    isReported = True
                    break
            tips = "" if isReported else "+"
            record_list.append({"title": f"{tips} {name}", "subtitle": f"Select a Record of {name}", "arg": arg})

    # return folder_list


# read info.plist (xml) and replace object on element
def writePlist(path, folder_list, record_list):
    
    with open(path, 'rb') as f:
        plist = plistlib.load(f)
    
    # loop check object's type is 'alfred.workflow.input.listfilter' and key title's string is 'dyn by python'
    for i in range(len(plist['objects'])):
        if plist['objects'][i]['type'] == 'alfred.workflow.input.listfilter' and plist['objects'][i]['config']['title'] == 'ID:selectThematicFolders':
            # covert folder_list to string, and replace the ' to "
            folder_list = str(folder_list).replace("'", '"')
            # replace folderlist to the value of element as string
            plist['objects'][i]['config']['items'] = folder_list

        if plist['objects'][i]['type'] == 'alfred.workflow.input.listfilter' and plist['objects'][i]['config']['title'] == 'ID:selecteRecords':
            record_list = str(record_list).replace("'", '"')
            plist['objects'][i]['config']['items'] = record_list
            
    # write to info.plist
    with open(path, 'wb') as f:
        plistlib.dump(plist, f)
        # return True to terminal
        print('writePlist done')
    
if __name__ == '__main__':

    getThematicFolderList(dir_thematic)
    writePlist(f'{workflows_folder}info.plist', folder_list, record_list)
    # print(folder_list)