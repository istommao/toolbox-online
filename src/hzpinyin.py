"""pypinyin"""

from pypinyin import pinyin, lazy_pinyin, Style


async def get_pinyin_result(data):
    return pinyin(data, heteronym=True)
