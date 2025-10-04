# -*- coding: utf-8 -*-

import codecs
import os
import json


# append file_info into attachments.json
script_dir = os.path.dirname(os.path.realpath(__file__))
# Build the path to attachments.json
attachments_path = os.path.join(script_dir, 'attachments.json')
attachments = json.loads(open(attachments_path).read())

# loop with idx
for idx, attachment in enumerate(attachments):
    name = attachment['name']
    try:
        attachments[idx]['name'] = name.encode('ISO-8859-1').decode()
    # if except ignor
    except:
        pass

# write attachments to file with utf8 encoding
with open(attachments_path, 'w', encoding='utf-8') as f:
    json.dump(attachments, f, ensure_ascii=False, indent=4)


# byte_string = encoded_filename.encode('utf-8')
# decoded_filename = byte_string.decode('utf-8')


# print(encoded_filename)