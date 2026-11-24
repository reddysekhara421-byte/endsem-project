// Store user details in localStorage

let user = {
    name: "Muktha",
    email: "muktha@gmail.com",
    password: "12345"
};

// Convert object into JSON and store it
localStorage.setItem("user", JSON.stringify(user));


// Get login form
document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get entered values
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Get stored user details
    let storedUser = JSON.parse(localStorage.getItem("user"));

    // Check email and password
    if (email === storedUser.email &&
        password === storedUser.password) {

        document.getElementById("message").innerHTML =
            "Login Successful";

        // Redirect to welcome page
        localStorage.setItem("loggedIn", "true");

        window.location.href = "welcome.html";

    } else {

        document.getElementById("message").innerHTML =
            "Invalid email or password";

        document.getElementById("message").style.color = "red";
    }

});