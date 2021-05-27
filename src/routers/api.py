"""api"""
from typing import Optional
from pydantic import BaseModel

from fastapi import FastAPI, Request, APIRouter

from src.hzpinyin import get_pinyin_result


router = APIRouter()


class RequestItem(BaseModel):
    data: str


@router.post('/api/hzpinyin/')
async def hzpinyin_api(item: RequestItem):
    payload = item.data
    result = await get_pinyin_result(payload)

    return result
