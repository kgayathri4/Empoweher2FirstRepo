const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    username: form.username.value,
    password: form.password.value
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful!");

  window.location.href = "login.html";
});
