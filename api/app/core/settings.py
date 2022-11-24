from pydantic import BaseSettings


class Settings(BaseSettings):
    aws_access_key_id: str
    aws_secret_access_key: str
    aws_region: str = "ap-northeast-1"

    cognito_pool_id: str
    cognito_client_id: str
    cognito_client_secret: str

    class Config:
        env_file = ".env"
