function logout() {
    window.location.href = "login.html";
}

function logActivity(text) {
    const list = document.getElementById("activityLog");
    const item = document.createElement("li");
    item.innerText = text;
    list.appendChild(item);
}

function openSearch() {
    logActivity("Opened property search");
    alert("Property search module (next page we build)");
}

function openLoan() {
    logActivity("Checked loan eligibility");
    alert("Loan module (next page we build)");
}

function openInquiries() {
    logActivity("Viewed inquiries");
    alert("Inquiry history page coming next");
}

function openAI() {
    logActivity("Opened AI recommendations");
    alert("AI lead suggestions module");
}
