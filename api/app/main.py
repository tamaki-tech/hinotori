from fastapi import FastAPI

from app.domain.auth import routes as auth_router

app = FastAPI()

app.include_router(auth_router.router, prefix="/api")
