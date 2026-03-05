import pandas as pd
import numpy as np

np.random.seed(42)

num_leads = 5000

# -----------------------------
# Financial Variables
# -----------------------------

age = np.random.randint(21, 60, num_leads)

income = np.random.randint(20000, 150000, num_leads)

# Property budget depends on income (realistic rule)
budget = income * np.random.uniform(3, 6, num_leads)

credit_score = np.random.randint(300, 850, num_leads)

# Income verification confidence
income_confidence = np.round(np.random.uniform(0.4, 1.0, num_leads), 2)


# -----------------------------
# User Behavior Segments
# -----------------------------

segments = [
    "casual_browser",
    "curious_researcher",
    "serious_buyer",
    "impulsive_buyer"
]

user_segment = np.random.choice(segments, num_leads)

pages_viewed = []
time_on_site = []
return_visits = []
session_count = []

for segment in user_segment:

    if segment == "casual_browser":
        pages_viewed.append(np.random.randint(1,5))
        time_on_site.append(np.random.randint(30,120))
        return_visits.append(np.random.randint(0,2))
        session_count.append(np.random.randint(1,3))

    elif segment == "curious_researcher":
        pages_viewed.append(np.random.randint(5,10))
        time_on_site.append(np.random.randint(120,300))
        return_visits.append(np.random.randint(1,4))
        session_count.append(np.random.randint(2,5))

    elif segment == "serious_buyer":
        pages_viewed.append(np.random.randint(10,20))
        time_on_site.append(np.random.randint(300,900))
        return_visits.append(np.random.randint(3,8))
        session_count.append(np.random.randint(5,10))

    else:  # impulsive_buyer
        pages_viewed.append(np.random.randint(3,8))
        time_on_site.append(np.random.randint(100,300))
        return_visits.append(np.random.randint(1,3))
        session_count.append(np.random.randint(2,4))


pages_viewed = np.array(pages_viewed)
time_on_site = np.array(time_on_site)
return_visits = np.array(return_visits)
session_count = np.array(session_count)


# -----------------------------
# Intent Signals
# -----------------------------

contact_form_submitted = np.random.binomial(1, 0.35, num_leads)
downloaded_brochure = np.random.binomial(1, 0.25, num_leads)
property_saved = np.random.binomial(1, 0.40, num_leads)
chat_with_agent = np.random.binomial(1, 0.20, num_leads)


# -----------------------------
# Traffic Source
# -----------------------------

traffic_sources = [
    "google_ads",
    "facebook_ads",
    "organic_search",
    "referral"
]

traffic_source = np.random.choice(traffic_sources, num_leads)

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


# -----------------------------
# Engagement Score
# -----------------------------

engagement_score = (
    0.3 * (pages_viewed / 20) +
    0.3 * (time_on_site / 900) +
    0.2 * (return_visits / 10) +
    0.2 * (session_count / 10)
)


# -----------------------------
# Financial Score
# -----------------------------

financial_score = (
    0.5 * (income / 150000) +
    0.3 * (credit_score / 850) +
    0.2 * income_confidence
)


# -----------------------------
# Intent Score
# -----------------------------

intent_score = (
    0.4 * contact_form_submitted +
    0.3 * downloaded_brochure +
    0.2 * property_saved +
    0.1 * chat_with_agent
)


# -----------------------------
# Add Noise (real-world randomness)
# -----------------------------

noise = np.random.normal(0, 0.05, num_leads)


# -----------------------------
# Conversion Probability
# -----------------------------

conversion_probability = (
    0.35 * engagement_score +
    0.30 * financial_score +
    0.20 * intent_score +
    0.10 * traffic_quality +
    0.05 * noise
)


converted = np.where(conversion_probability > 0.55, 1, 0)


# -----------------------------
# Create DataFrame
# -----------------------------

data = pd.DataFrame({

    "age": age,
    "income": income,
    "budget": budget.astype(int),
    "credit_score": credit_score,
    "income_confidence": income_confidence,

    "user_segment": user_segment,

    "pages_viewed": pages_viewed,
    "time_on_site": time_on_site,
    "return_visits": return_visits,
    "session_count": session_count,

    "contact_form_submitted": contact_form_submitted,
    "downloaded_brochure": downloaded_brochure,
    "property_saved": property_saved,
    "chat_with_agent": chat_with_agent,

    "traffic_source": traffic_source,

    "converted": converted

})


# -----------------------------
# Save Dataset
# -----------------------------

data.to_csv("synthetic_leads.csv", index=False)

print("Synthetic dataset generated successfully!")
print(data.head())