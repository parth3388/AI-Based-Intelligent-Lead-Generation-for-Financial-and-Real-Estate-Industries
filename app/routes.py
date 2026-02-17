from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from . import models, schemas, ml_model
from .database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/lead/", response_model=schemas.LeadResponse)
def create_lead(lead: schemas.LeadCreate, db: Session = Depends(get_db)):

    score = ml_model.predict_lead_score(lead)

    db_lead = models.Lead(
        age=lead.age,
        income=lead.income,
        browsing_frequency=lead.browsing_frequency,
        time_spent=lead.time_spent,
        location_score=lead.location_score,
        lead_score=score
    )

    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)

    return db_lead
