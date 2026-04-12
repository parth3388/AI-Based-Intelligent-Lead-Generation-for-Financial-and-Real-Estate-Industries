import os
from functools import lru_cache
from typing import Any

import joblib
import numpy as np

from .config import settings


@lru_cache(maxsize=1)
def _load_model() -> Any:
    """Lazily load the ML model from disk using the configured path.

    Returns
    -------
    Any
        A fitted classifier supporting ``predict_proba``.

    Raises
    ------
    FileNotFoundError
        If the model file cannot be located.
    """
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    model_path = settings.model_path
    if not os.path.isabs(model_path):
        model_path = os.path.join(base_dir, model_path)

    if not os.path.exists(model_path):
        raise FileNotFoundError(f"model path does not exist: {model_path}")

    return joblib.load(model_path)


def predict_lead_score(data: Any) -> float:
    """Return a percentage probability that the lead will convert.

    Parameters
    ----------
    data : object
        An object exposing lead attributes (Pydantic model works well).

    Returns
    -------
    float
        Rounded percentage probability (0-100).
    """
    model = _load_model()

    features = np.array([
        [
            data.age,
            data.income,
            data.browsing_frequency,
            data.time_spent,
            data.location_score,
        ]
    ])

    probability = model.predict_proba(features)[0][1]
    return round(float(probability) * 100, 2)
