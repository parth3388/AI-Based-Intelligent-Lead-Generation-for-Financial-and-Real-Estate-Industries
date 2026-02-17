import joblib
import numpy as np
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, "xgb_model.pkl")

model = joblib.load(MODEL_PATH)

def predict_lead_score(data):
    features = np.array([[
        data.age,
        data.income,
        data.browsing_frequency,
        data.time_spent,
        data.location_score
    ]])
    
    probability = model.predict_proba(features)[0][1]
    return round(probability * 100, 2)
