import requests
import json

def getPageAuths(router):
    url = "https://typeset.io/library/folder/backup-folder-2g1ks4gz"
    try:

        payload = {}
        headers = {
        'authority': 'typeset.io',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
        'cache-control': 'no-cache',
        'cookie': 'csrftoken=r5HuNucxzFpfcin3A2THLIRgdjKHE0OG; sessionid=xu9bfxmvjnras2qwhtvigk6m4qrrrk6o; __stripe_mid=d3284375-f1a8-4ca3-8aac-fd3779d0c407daf085; intercom-device-id-jtijbv5y=8871d164-7348-47f9-8fc1-68f6a00b4039; annotation_onboarding_text_highlighted=true; user_disabled_ribbon=1; notebook_onboarding_shown=1; access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOiAiSjJGODYwaWc5STNVcktmMDJBS3ZjUjVkb2VUIiwgInR5cCI6ICJTQ0lTUEFDRV9VU0VSIiwgImlzcyI6ICJodHRwczovL3R5cGVzZXQuaW8vIiwgImlhdCI6IDE3MDc0MDE0MjcsICJleHAiOiAxNzE2MDQxNDI3fQ.LZAAKYjJudq17wpukr9xKW3SyxpX8YdRBvZ-nXK818gRiF5f5HBUbc4Z7gT_gwD8151VMVPEc0FvQamAWm8eRg4uPNJR9_GG73Oaj6H-mwu1bEhMPH2vgZpgfGWrNuQxJNl8H1Zwf1os6IhJqOxQcdeGFAgzBMinEY24nL8PK0GIHYgllr4RLimvp6b99ma8IB0Lr_9m7bi6MiyQimXsJMgy_v6Q7efJj653Uy1ZsXIE4VzL9vd7FlxNAg0i0gyUQvHY1-NhlLERkTCg61bEj6lD3FPEGGHcOgKaql1AF5-WrviZt1Y6MZcA6KafXSruxpNWw5FkRn8JiDhwLlN1fQ; intercom-session-jtijbv5y=b2RBVU5nR0x0bEVHaUVKbTU4dE1RWGdOamVwb3NjcHFJVUVnYXRMUGlING1zZU1qVWovaXhYY1VpbC9weGM5Mi0tYWg4Qkhxa0pHNzlPUXdxTTRzM2QzQT09--d094aca4bab4b1c29ed047db8c806de233876851; access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOiAiSjJGODYwaWc5STNVcktmMDJBS3ZjUjVkb2VUIiwgInR5cCI6ICJTQ0lTUEFDRV9VU0VSIiwgImlzcyI6ICJodHRwczovL3R5cGVzZXQuaW8vIiwgImlhdCI6IDE3MDc0MDE0OTQsICJleHAiOiAxNzE2MDQxNDk0fQ.SkAGNg0k28nIIXGAYnZKIq8c-T-xtS14FSQb7gLPZz20z_mz0j1oP3lNqrdPZedr5YLBOYR5krlF0YJ_UidUsG1NYXzzuQ815e2JWZrLopE7h80xBSg1ftY6v07fzt1O84qn1EJKqBGZL2rh7F6X7EPHMwggIwMJGuwdDpSbADA0iUANfw4xx8iC_bGSwN3zwB3hz-NZKS5d3v_EVjhfFnvnbW3oKIyz8oty1RhkvYtLWsKDMt_Tr1UxqT-l6KNGp810CjE05qstcpKQ0FVlbTJaCVU0hRYlr4XR50moWYkI1iQ-Ggr87XpoFnjqZKDlOY5Sjaw6sV3AMm62WVSpSQ; sessionid=xu9bfxmvjnras2qwhtvigk6m4qrrrk6o',
        'pragma': 'no-cache',
        'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
        }

        response = requests.request("GET", url, headers=headers, data=payload)

        return response.text
    except:
        return 0
    
def getAuthsPropsFromPage():

    # Load the current autho's data.
    with open('pageAuth.json', 'r') as f:
        config = json.load(f)
        
        # Cookies
        """
        csrftoken=r5HuNucxzFpfcin3A2THLIRgdjKHE0OG; 
        sessionid=xu9bfxmvjnras2qwhtvigk6m4qrrrk6o; 
        __stripe_mid=d3284375-f1a8-4ca3-8aac-fd3779d0c407daf085; 
        intercom-device-id-jtijbv5y=8871d164-7348-47f9-8fc1-68f6a00b4039; 
        annotation_onboarding_text_highlighted=true; 
        user_disabled_ribbon=1; 
        notebook_onboarding_shown=1; 
        intercom-session-jtijbv5y=QVhKYWtTTytCWkpUNlJsdlBSSWhkdjhnMUJQNkRCY2llTXl2NkdtT2F3Vml4RzhMQ2hLOWpjM0JXR0ZLSXE0OC0tSzh1TU4zc2dpdnEyZElVNGtwZzczUT09--f906c717b165f43dcce8105498b25ed224c93a0d; 
        access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOiAiSjJGODYwaWc5STNVcktmMDJBS3ZjUjVkb2VUIiwgInR5cCI6ICJTQ0lTUEFDRV9VU0VSIiwgImlzcyI6ICJodHRwczovL3R5cGVzZXQuaW8vIiwgImlhdCI6IDE3MDc0NTQ2ODAsICJleHAiOiAxNzE2MDk0NjgwfQ.igxUA0nuHm6RiQX8Dlh7V-kcuNnnq9wdi3GKl22oq_Tgiq0PSlN_Wq-wNd568f5DAwqWJyi-Qy2TbZt1Xv0W-Q_V6zZNCQYwePkG150QMEOrzSaZg1SqmM72J9mGueYc44dZjupcbvP1XRCXE8ibv2r9j2PqzuFSdFbp2zFG2V6SNlcH_fsYFpIZMC4Gf31Ej9v61Yg7JltCQSWKwFP1vg19ijUa0-DxUwkOWj4A8YfVWYCi6t8Wyw5LdtmYiQRSrBj0rwOfJnTrjPlqxhUgQRW-awPP--1Ecxj1y_0wI-ccausUMBLSnnMdVByxGtrfkrMTVrcpgegQ1DlSLx_g8A
        """
        # get acess token from props.pageProps.auth.access_token
        access_token = config['props']['pageProps']['auth']['access_token']
        # get the user's id from props.pageProps._sentryBaggage
        baggage =  config['props']['pageProps']['_sentryBaggage']
        csrftoken = "r5HuNucxzFpfcin3A2THLIRgdjKHE0OG"
        sessionid="xu9bfxmvjnras2qwhtvigk6m4qrrrk6o"



if __name__ == "__main__":
    router = 'folder/backup-folder-2g1ks4gz'
    print(getPageAuths('router'))