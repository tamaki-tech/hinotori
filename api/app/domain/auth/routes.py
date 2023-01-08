from fastapi import APIRouter, Depends, HTTPException

import app.domain.auth.services as auth_services
from app.core.aws.cognito import CognitoClient
from app.domain.auth.exceptions import NotAuthorizedException
from app.domain.auth.schemas import LoginRequest, LoginResponse
from app.domain.shared.dependencies import cognito

router = APIRouter(tags=["認証"])


@router.post("/login", summary="ログイン", response_model=LoginResponse)
def login(
    body: LoginRequest,
    cognito: CognitoClient = Depends(cognito),
) -> LoginResponse:
    try:
        return auth_services.login(cognito=cognito, body=body)
    except NotAuthorizedException:
        raise HTTPException(status_code=401, detail="認証に失敗しました。")
