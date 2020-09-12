"""routers."""
from typing import Optional

from fastapi import FastAPI, Request, APIRouter
from fastapi.templating import Jinja2Templates


router = APIRouter()

templates = Jinja2Templates(directory='html')


@router.get('/')
async def index_page(request: Request):
    return templates.TemplateResponse('base.html', {'request': request})


@router.get('/tb/{tool_name}/')
async def tb_page(request: Request, tool_name: str):
    tpl_name = 'toolbox/{}.html'.format(tool_name)
    return templates.TemplateResponse(tpl_name, {'request': request})


@router.get('/toolbox/{tool_name}/')
async def toolbox_page(request: Request, tool_name: str):
    tpl_name = 'toolbox/{}.html'.format(tool_name)
    return templates.TemplateResponse(tpl_name, {'request': request})
