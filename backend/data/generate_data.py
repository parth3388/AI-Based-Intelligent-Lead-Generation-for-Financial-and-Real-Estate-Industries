import pandas as pd
import numpy as np

np.random.seed(42)

num_leads = 5000

# Financial variables
age = np.random.randint(21, 60, num_leads)
income = np.random.randint(20000, 150000, num_leads)
budget = income * np.random.uniform(2, 6, num_leads)
credit_score = np.random.randint(300, 850, num_leads)
income_confidence = np.round(np.random.uniform(0.4, 1.0, num_leads), 2)

# Engagement variables
pages_viewed = np.random.randint(1, 25, num_leads)
time_on_site = np.random.randint(30, 900, num_leads)
return_visits = np.random.randint(0, 10, num_leads)
session_count = np.random.randint(1, 15, num_leads)
days_since_first_visit = np.random.randint(1, 30, num_leads)

# Intent signals
contact_form_submitted = np.random.binomial(1, 0.3, num_leads)
downloaded_brochure = np.random.binomial(1, 0.25, num_leads)
property_saved = np.random.binomial(1, 0.35, num_leads)
chat_with_agent = np.random.binomial(1, 0.2, num_leads)

# Traffic source
traffic_sources = ["google_ads", "facebook_ads", "organic_search", "referral"]
traffic_source = np.random.choice(traffic_sources, num_leads)

# Convert traffic source into quality score
traffic_quality = []

for source in traffic_source:
    if source == "organic_search":
        traffic_quality.append(0.8)
    elif source == "referral":
        traffic_quality.append(0.7)
    elif source == "google_ads":
        traffic_quality.append(0.6)
    else:
        traffic_quality.append(0.5)

traffic_quality = np.array(traffic_quality)

# Normalize engagement scores
engagement_score = (
    0.3 * (pages_viewed / 25) +
    0.3 * (time_on_site / 900) +
    0.2 * (return_visits / 10) +
    0.2 * (session_count / 15)
)

# Financial capacity score
financial_score = (
    0.5 * (income / 150000) +
    0.3 * (credit_score / 850) +
    0.2 * income_confidence
)

# Intent score
intent_score = (
    0.4 * contact_form_submitted +
    0.3 * downloaded_brochure +
    0.2 * property_saved +
    0.1 * chat_with_agent
)

# Conversion probability
conversion_probability = (
    0.35 * engagement_score +
    0.35 * financial_score +
    0.2 * intent_score +
    0.1 * traffic_quality
)

# Generate converted label
converted = np.where(conversion_probability > 0.55, 1, 0)

# Create DataFrame
data = pd.DataFrame({
    "age": age,
    "income": income,
    "budget": budget.astype(int),
    "credit_score": credit_score,
    "income_confidence": income_confidence,
    "pages_viewed": pages_viewed,
    "time_on_site": time_on_site,
    "return_visits": return_visits,
    "session_count": session_count,
    "days_since_first_visit": days_since_first_visit,
    "contact_form_submitted": contact_form_submitted,
    "downloaded_brochure": downloaded_brochure,
    "property_saved": property_saved,
    "chat_with_agent": chat_with_agent,
    "traffic_source": traffic_source,
    "converted": converted
})

# Save dataset
data.to_csv("synthetic_leads.csv", index=False)

print("Synthetic dataset generated successfully!")
print(data.head())