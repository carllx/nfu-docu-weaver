import requests
import sys

def Query(presigned_url, file_path, contentType='text/markdown'):
    # contentType = 'application/pdf'
    # if format == 'docx':
    #     contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

    # Define the URL and headers
    url = presigned_url # "https://prod-chat-kimi.tos-s3-cn-beijing.volces.com/prod-chat-kimi/cn34chkudu69apgmnqb0/2024-02-24/cncug9mcp7f4fbpjrcgg/Alexiou%20et%20al.%20-%202019%20-%20A%20comprehensive%20study%20of%20the%20rate-distortion%20performance%20in%20MPEG%20point%20cloud%20compression.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKLTYTJlNjgwMjY2ZDBkNDFiYmI5YWNiZDBlZmFmYjIzZTA%2F20240224%2Fcn-beijing%2Fs3%2Faws4_request&X-Amz-Date=20240224T125918Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=8d3356d0d05096d9ee9fb00a09cfa13f2a9c6f63df5b36664dc52ae0eab615fc"
    headers = {
        "Host": "prod-chat-kimi.tos-s3-cn-beijing.volces.com",
        "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-ch-ua-mobile": "?0",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "Content-Type": contentType,
        "Accept": "*/*",
        "Origin": "https://kimi.moonshot.cn",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://kimi.moonshot.cn/",
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7"
    }

    # Open the Doc/PDF file in binary mode
    with open(file_path, "rb") as file:
        doc_data = file.read()

    # Send the PUT request with the Doc/PDF data
    response = requests.put(url, headers=headers, data=doc_data)

    # Check the response status code
    if response.status_code == 200:
        sys.stderr.write(f"{format} uploaded successfully.")
        return True
    else:
        sys.stderr.write(f"Error uploading {format}: {response.status_code}")
        return False