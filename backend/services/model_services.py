import pickle
import numpy as np

# Load trained model
model = pickle.load(open("models/model.pkl", "rb"))


def predict_lead(data):

    # Encode categorical variables

    user_segment_map = {
        "curious_researcher": 0,
        "serious_buyer": 1,
        "impulsive_buyer": 2,
        "casual_browser": 3
    }

    traffic_source_map = {
        "organic": 0,
        "ads": 1,
        "social": 2,
        "referral": 3
    }

    user_segment = user_segment_map.get(data["user_segment"], 0)
    traffic_source = traffic_source_map.get(data["traffic_source"], 0)

    # Feature vector in EXACT training order

    features = np.array([[
        data["age"],
        data["income"],
        data["budget"],
        data["credit_score"],
        data["income_confidence"],
        user_segment,
        data["pages_viewed"],
        data["time_on_site"],
        data["return_visits"],
        data["session_count"],
        data["contact_form_submitted"],
        data["download_brochure"],
        data["property_saved"],
        data["chat_with_agent"],
        traffic_source
    ]])

    # Model prediction

    probability = model.predict_proba(features)[0][1]

    return {
        "lead_score": round(probability * 100, 2),
        "conversion_probability": float(probability),
        "prediction": "High Intent Lead" if probability > 0.6 else "Low Intent Lead"
    }