from sqlalchemy import Column, Integer, Float, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    age = Column(Integer)
    income = Column(Float)
    browsing_frequency = Column(Integer)
    time_spent = Column(Float)
    location_score = Column(Float)
    lead_score = Column(Float)
    converted = Column(Boolean, default=False)


class Agent(Base):
    __tablename__ = "agents"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    points = Column(Integer, default=0)
