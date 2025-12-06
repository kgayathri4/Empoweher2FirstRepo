const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No user found. Please signup first.");
    return;
  }

  if (
    form.username.value === savedUser.username &&
    form.password.value === savedUser.password
  ) {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
    window.location.href = "todos.html";
  } else {
    alert("Invalid credentials!");
  }
});
