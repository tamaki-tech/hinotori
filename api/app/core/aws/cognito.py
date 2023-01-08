import base64
import hashlib
import hmac
from typing import Any

import boto3

from app.core.settings import Settings

settings = Settings()


class CognitoClient:
    def __init__(
        self,
        pool_id: str,
        client_id: str,
        client_secret: str,
        region: str,
    ) -> None:
        self.pool_id = pool_id
        self.client_id = client_id
        self.client_secret = client_secret
        self.client = boto3.client(
            "cognito-idp",
            region_name=region,
            aws_access_key_id=settings.aws_access_key_id,
            aws_secret_access_key=settings.aws_secret_access_key,
        )

    def __secret_hash(self, username: str) -> Any:
        message = bytes(username + self.client_id, "utf-8")
        key = bytes(self.client_secret, "utf-8")
        dig = hmac.new(key, message, digestmod=hashlib.sha256).digest()
        return base64.b64encode(dig).decode()

    def login(self, login_id: str, password: str) -> dict:
        return self.client.admin_initiate_auth(
            UserPoolId=self.pool_id,
            ClientId=self.client_id,
            AuthFlow="ADMIN_USER_PASSWORD_AUTH",
            AuthParameters={
                "USERNAME": login_id,
                "PASSWORD": password,
                "SECRET_HASH": self.__secret_hash(username=login_id),
            },
        )
