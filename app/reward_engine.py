def calculate_reward(lead_score, converted):
    points = 0

    if lead_score >= 80:
        points += 10

    if converted:
        points += 50

    if lead_score >= 80 and converted:
        points += 20  # bonus multiplier

    return points
