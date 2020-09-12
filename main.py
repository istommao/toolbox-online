from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from src.routers import common

app = FastAPI()


app.mount('/static', StaticFiles(directory='static'), name='static')

app.include_router(common.router)
