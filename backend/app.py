from flask import Flask
from routes.health_routes import health_bp
from routes.predict_routes import predict_bp

app = Flask(__name__)

app.register_blueprint(health_bp)
app.register_blueprint(predict_bp)

@app.route("/")
def home():
    return {"message": "LeadSense AI Backend Running"}

if __name__ == "__main__":
    app.run(debug=True)