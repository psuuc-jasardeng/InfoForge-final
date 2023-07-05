var LoginModule = (function() {
  // Valid credentials for testing
  var validCredentials = [
    { email: "infoforge@gmail.com", password: "infoforge123" },
    { email: "InfoForge@gmail.com", password: "InfoForge123" }
  ];

  function validateCredentials(email, password) {
    // Check if email and password match any valid credentials
    return validCredentials.some(function(credentials) {
      return credentials.email === email && credentials.password === password;
    });
  }

function login() {
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    if (validateCredentials(email, password)) {
      // Redirect to dashboard.html upon successful login
      window.location.href = "dashboard.html";
    } else {
      displayError("Invalid email or password. Please try again.");
    }
  }

function displayError(message) {
    var errorElement = document.getElementById("Error");
    errorElement.textContent = message;
  }

  return {
    login: login
  };
})();


document.getElementById("loginButton").addEventListener("click", LoginModule.login);