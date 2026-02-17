import pandas as pd
import numpy as np
from xgboost import XGBClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score
import joblib

# Generate dummy dataset
np.random.seed(42)

data = pd.DataFrame({
    "age": np.random.randint(20, 60, 1000),
    "income": np.random.randint(20000, 100000, 1000),
    "browsing_frequency": np.random.randint(1, 20, 1000),
    "time_spent": np.random.uniform(1, 30, 1000),
    "location_score": np.random.uniform(0, 1, 1000),
})

data["converted"] = (
    0.3 * data["browsing_frequency"] +
    0.4 * data["time_spent"] +
    0.2 * data["location_score"] +
    np.random.normal(0, 2, 1000)
) > 15

X = data.drop("converted", axis=1)
y = data["converted"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = XGBClassifier(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=5,
    eval_metric="logloss"
)

model.fit(X_train, y_train)

pred_probs = model.predict_proba(X_test)[:, 1]
print("ROC AUC:", roc_auc_score(y_test, pred_probs))

joblib.dump(model, "xgb_model.pkl")
