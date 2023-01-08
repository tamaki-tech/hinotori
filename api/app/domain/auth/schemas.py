from typing import Optional

from pydantic import BaseModel, Field


class LoginRequest(BaseModel):
    login_id: str = Field(title="ログインID")
    password: str = Field(title="パスワード")


class LoginResponse(BaseModel):
    access_token: Optional[str] = Field(title="アクセストークン")
    session: Optional[str] = Field(title="セッション")
