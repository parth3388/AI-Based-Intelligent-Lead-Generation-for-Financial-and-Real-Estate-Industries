from flask import Blueprint, request, jsonify
from backend.services.model_services import predict_lead

predict_bp = Blueprint("predict_bp", __name__)

@predict_bp.route("/predict", methods=["POST"])
def predict():

    data = request.json

    result = predict_lead(data)

    return jsonify(result)