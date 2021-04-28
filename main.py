from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from src.routers import common

app = FastAPI()


app.mount('/static', StaticFiles(directory='static'), name='static')

app.include_router(common.router)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run('main:app', reload=True, host='127.0.0.1', port=7340)
