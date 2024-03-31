//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberMeCheckbox = document.getElementById("remember-me");
  const submitButton = document.getElementById("submit");
  const existingButton = document.getElementById("existing");

  
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  
  if (savedUsername && savedPassword) {
    existingButton.style.display = "block";
  }

  
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (rememberMeCheckbox.checked) {
     
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    alert("Logged in as " + username);
  });

  
  existingButton.addEventListener("click", function() {
    const savedUsername = localStorage.getItem("username");
    alert("Logged in as " + savedUsername);
  });
});
