import requests
import concurrent.futures
import argparse


class Translator:
    def __init__(self):
        self.headers = {
            "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
            "accept": "*/*"
        }

    def fetch_translation_from_gbooks_api(self, text, target_language="zh"):
        text = requests.utils.quote(text)
        response = requests.get(
            f"https://www.googleapis.com/language/translate/v2?key=AIzaSyBcsB9k1Db4FXrf0Y7vXK0aIS2bQA38Gms&target={target_language}&&q={text}",
            headers=self.headers
        )
        data = response.json()
        result = data['data']['translations'][0]
        result['targetLanguage'] = target_language
        return result

    def get_valid_translation_from_multiple_requests(self, s):
        with concurrent.futures.ThreadPoolExecutor() as executor:
            futures = {executor.submit(self.fetch_translation_from_gbooks_api, s, lang): lang for lang in ["zh", "en"]}
            for future in concurrent.futures.as_completed(futures):
                try:
                    translation = future.result()
                    detected_source_language = translation['detectedSourceLanguage'].split("-")[0]
                    if detected_source_language != futures[future]:
                        return translation
                except Exception as e:
                    print(f"Exception occurred during translation: {e}")
        return None

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--version', type=str, help='Version of the program')
    parser.add_argument('--text', type=str, help='Text to translate')
    args = parser.parse_args()

    translator = Translator()
    result = translator.get_valid_translation_from_multiple_requests(args.text)
    if args.version == "alfred":
        print(f"{result['translatedText']}|||{result['targetLanguage']}|||{result['detectedSourceLanguage']}")
    else:
        print(result)