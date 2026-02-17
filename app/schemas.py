from pydantic import BaseModel

class LeadCreate(BaseModel):
    age: int
    income: float
    browsing_frequency: int
    time_spent: float
    location_score: float

class LeadResponse(BaseModel):
    id: int
    lead_score: float

    class Config:
        orm_mode = True
