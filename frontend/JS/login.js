function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    error.innerText = "";

    if (username === "" || password === "") {
        error.innerText = "Please enter username and password";
        return;
    }

    if (username === "admin" && password === "admin") {
        window.location.href = "/Frontend users/Html files/dashboard.html";
    } else {
        error.innerText = "Invalid login credentials";
    }
}
