import sys
import base64
import tiktoken


def num_tokens_from_string(string: str, encoding_name: str) -> int:
    encoding = tiktoken.get_encoding(encoding_name)
    num_tokens = len(encoding.encode(string))
    return num_tokens

if __name__ == "__main__":
    # texts = sys.argv[1]
    texts = base64.b64decode(sys.argv[1]).decode('utf-8')
    res = num_tokens_from_string( texts, "cl100k_base")
    sys.stdout.write(str(res))
