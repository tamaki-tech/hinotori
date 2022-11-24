from app.core.aws.cognito import CognitoClient
from app.core.settings import Settings

settings = Settings()


def cognito() -> CognitoClient:
    return CognitoClient(
        region=settings.aws_region,
        pool_id=settings.cognito_pool_id,
        client_id=settings.cognito_client_id,
        client_secret=settings.cognito_client_secret,
    )
