from pydantic import BaseModel, Field


class LoginRequest(BaseModel):
    login_id: str = Field(title="ログインID")
    password: str = Field(title="パスワード")


class LoginResponse(BaseModel):
    access_token: str | None = Field(title="アクセストークン", nullable=True)
    session: str | None = Field(title="セッション", nullable=True)
