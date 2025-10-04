import requests
import json

def Query(file_name:str, object_name:str, authorization:str, conversation:str):
	url = "https://kimi.moonshot.cn/api/file"

	payload = json.dumps(
		{
			"type": "file",
			"name": file_name,
			"object_name": object_name, # "cn34chkudu69apgmnqb0/2024-02-24/cncug9mcp7f4fbpjrcgg/Alexiou et al. - 2019 - A comprehensive study of the rate-distortion performance in MPEG point cloud compression.pdf",
		}
	)
	headers = {
		"Host": "kimi.moonshot.cn",
		"sec-ch-ua": '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
		"content-type": "application/json",
		"r-timezone": "Asia/Shanghai",
		"sec-ch-ua-mobile": "?0",
		"authorization": f"Bearer {authorization}",
		"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
		"sec-ch-ua-platform": '"macOS"',
		"accept": "*/*",
		"origin": "https://kimi.moonshot.cn",
		"sec-fetch-site": "same-origin",
		"sec-fetch-mode": "cors",
		"sec-fetch-dest": "empty",
		"referer": f"https://kimi.moonshot.cn/chat/{conversation}",
		"accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
	}

	response = requests.request("POST", url, headers=headers, data=payload)

	return response.json()
# Output
# {
#     "id": "cncug9sudu6bco2uf5ag",
#     "name": "Alexiou et al. - 2019 - A comprehensive study of the rate-distortion performance in MPEG point cloud compression.pdf",
#     "parent_path": "",
#     "type": "file",
#     "status": "initialized",
#     "presigned_url": "https://prod-chat-kimi.tos-s3-cn-beijing.volces.com/prod-chat-kimi/cn34chkudu69apgmnqb0/2024-02-24/cncug9mcp7f4fbpjrcgg/Alexiou%20et%20al.%20-%202019%20-%20A%20comprehensive%20study%20of%20the%20rate-distortion%20performance%20in%20MPEG%20point%20cloud%20compression.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=AKLTYTJlNjgwMjY2ZDBkNDFiYmI5YWNiZDBlZmFmYjIzZTA%2F20240224%2Fcn-beijing%2Fs3%2Faws4_request\u0026X-Amz-Date=20240224T125919Z\u0026X-Amz-Expires=3600\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=0317fd051e650510e9c1deba23120dd94c78c562f9cc41ba342e0d5c189de66e",
#     "text_presigned_url": "https://prod-chat-kimi.tos-s3-cn-beijing.volces.com/prod-chat-kimi/cn34chkudu69apgmnqb0/2024-02-24/cncug9sudu6bco2uf5a0/?X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=AKLTYTJlNjgwMjY2ZDBkNDFiYmI5YWNiZDBlZmFmYjIzZTA%2F20240224%2Fcn-beijing%2Fs3%2Faws4_request\u0026X-Amz-Date=20240224T125919Z\u0026X-Amz-Expires=3600\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=4d85c2e3ef021f456a6691f12f564ad9fb8b030d69fb5a91470ab5c20e5ba6ad",
#     "uploaded_at": "2024-02-24T12:59:19Z",
#     "created_at": "2024-02-24T20:59:19.770137941+08:00",
#     "updated_at": "2024-02-24T20:59:19.770137941+08:00",
# }
