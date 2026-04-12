# pydantic v2 separates settings functionality into its own package
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application configuration pulled from environment or .env file."""

    database_url: str = "sqlite:///./leadsense.db"
    model_path: str = "xgb_model.pkl"

    class Config:
        env_file = ".env"


settings = Settings()
