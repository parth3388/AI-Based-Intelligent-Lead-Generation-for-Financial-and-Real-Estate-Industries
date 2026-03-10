from flask import Blueprint, request, jsonify
from services.model_services import predict_lead

predict_bp = Blueprint("predict_bp", __name__)

@predict_bp.route("/predict", methods=["POST"])
def predict():

    data = request.json

    try:

        cleaned_data = {

            "age": float(data.get("age", 0)),
            "income": float(data.get("income", 0)),
            "budget": float(data.get("budget", 0)),
            "credit_score": float(data.get("credit_score", 0)),
            "income_confidence": float(data.get("income_confidence", 0)),

            "pages_viewed": float(data.get("pages_viewed", 0)),
            "time_on_site": float(data.get("time_on_site", 0)),
            "return_visits": float(data.get("return_visits", 0)),
            "session_count": float(data.get("session_count", 0)),

            "contact_form_submitted": float(data.get("contact_form_submitted", 0)),
            "download_brochure": float(data.get("download_brochure", 0)),
            "property_saved": float(data.get("property_saved", 0)),
            "chat_with_agent": float(data.get("chat_with_agent", 0)),

            "traffic_source": data.get("traffic_source", "organic"),
            "user_segment": data.get("user_segment", "casual_browser")

        }

        result = predict_lead(cleaned_data)

        return jsonify(result)

    except Exception as e:

        return jsonify({"error": str(e)}), 500