from fastapi import FastAPI
from .database import engine, Base
from .routes import router

app = FastAPI(
    title="LeadSense AI",
    description="AI-Based Intelligent Lead Generation System",
    version="1.0.0"
)

Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {
        "status": "success",
        "message": "LeadSense AI is running 🚀"
    }

app.include_router(router)
