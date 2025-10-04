# #popclip
# name: zspeak
# url: alfred://runtrigger/AIAssistants/z+selected+speak/?argument=***



import sys
import re
import emoji
IDEOGRAPHIC_SPACE = 0x3000

def is_asian(char):
    """Is the character Asian?"""
    return ord(char) > IDEOGRAPHIC_SPACE

def filter_jchars(c):
    """Filters Asian characters to spaces"""
    if is_asian(c):
        return ' '
    return c

def nonj_len(word):
    u"""Returns number of non-Asian words in {word}
    – 日本語AアジアンB -> 2
    – hello -> 1
    @param word: A word, possibly containing Asian characters
    """
    # Here are the steps:
    # 日spam本eggs
    # -> [' ', 's', 'p', 'a', 'm', ' ', 'e', 'g', 'g', 's']
    # -> ' spam eggs'
    # -> ['spam', 'eggs']
    # The length of which is 2!
    chars = [filter_jchars(c) for c in word]
    return len(''.join(chars).split())

def emoji_count(text):
    return emoji.emoji_count(text, unique=False)

def get_wordcount(text):
    """Get the word/character count for text

    @param text: The text of the segment
    """

    characters = len(text)
    chars_no_spaces = sum([not x.isspace() for x in text])
    asian_chars =  sum([is_asian(x) for x in text])
    non_asian_words = nonj_len(text)
    emoji_chars = emoji_count(text)
    words = non_asian_words + asian_chars + emoji_chars

    return dict(characters=characters,
                chars_no_spaces=chars_no_spaces,
                asian_chars=asian_chars,
                non_asian_words=non_asian_words,
                emoji_chars = emoji_chars,
                words=words)

def dict2obj(dictionary):
    """Transform a dictionary into an object"""
    class Obj(object):
        def __init__(self, dictionary):
            self.__dict__.update(dictionary)
    return Obj(dictionary)

def get_wordcount_obj(text):
    """Get the wordcount as an object rather than a dictionary"""
    return dict2obj(get_wordcount(text))

if __name__ == '__main__':

    a = sys.argv[1]
    a = re.sub(r'[\.\!\/_,$%^*(+\"\']+|[+——！，。？、~@#￥%……&*（）：；《）《》“”()»〔〕-]+', "", a)
    b = get_wordcount_obj(a)
    # print(b.words)
    sys.stdout.write(str(b.words))

