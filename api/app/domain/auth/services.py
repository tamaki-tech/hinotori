import botocore

from app.core.aws.cognito import CognitoClient
from app.domain.auth.exceptions import NotAuthorizedException
from app.domain.auth.schemas import LoginRequest, LoginResponse


def login(body: LoginRequest, cognito: CognitoClient) -> LoginResponse:
    try:
        auth_result = cognito.login(login_id=body.login_id, password=body.password)
        if auth_result.get("ChallengeName") == "NEW_PASSWORD_REQUIRED":
            return LoginResponse(session=auth_result["Session"])

        return LoginResponse(
            access_token=auth_result["AuthenticationResult"]["AccessToken"]
        )
    except botocore.exceptions.ClientError:
        # ログイン時の例外は全て認証失敗扱いとする。
        raise NotAuthorizedException
