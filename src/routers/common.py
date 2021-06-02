"""routers."""
from typing import Optional

import jinja2

from fastapi import FastAPI, Request, APIRouter
from fastapi.templating import Jinja2Templates


router = APIRouter()

templates = Jinja2Templates(directory='html')


@router.get('/')
async def index_page(request: Request):
    return templates.TemplateResponse('home.html', {'request': request})


@router.get('/tb/')
async def index_page(request: Request):
    return templates.TemplateResponse('toolbox/index.html', {'request': request})


@router.get('/playbox/')
async def index_page(request: Request):
    return templates.TemplateResponse('toolbox/playbox/index.html', {'request': request})


@router.get('/playbox/{language}/')
async def index_page(request: Request, language: str):
    tpl_name = 'toolbox/playbox/{}.html'.format(language)
    try:
        resp = templates.TemplateResponse(tpl_name, {'request': request})
    except jinja2.exceptions.TemplateNotFound:
        return templates.TemplateResponse('toolbox/index.html', {'request': request})
    else:
        return resp


@router.get('/tb/{tool_name}/')
async def tb_page(request: Request, tool_name: str):
    tpl_name = 'toolbox/{}.html'.format(tool_name)
    try:
        resp = templates.TemplateResponse(tpl_name, {'request': request})
    except jinja2.exceptions.TemplateNotFound:
        return templates.TemplateResponse('toolbox/index.html', {'request': request})
    else:
        return resp


@router.get('/toolbox/{tool_name}/')
async def toolbox_page(request: Request, tool_name: str):
    tpl_name = 'toolbox/{}.html'.format(tool_name)
    return templates.TemplateResponse(tpl_name, {'request': request})
