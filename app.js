const form = document.getElementById("loginForm");
const userNameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
var dummyPassword = 1234;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Get input values
  const userName = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!userName && !password) {
    userNameError.innerText = "Please Enter Your Name";
    passwordError.innerText = "Please Enter Your Password";
    return;
  }
  if (!userName) {
    passwordError.innerText = "";
    userNameError.innerText = "Please Enter Your Name";

    return;
  }

  if (!password) {
    userNameError.innerText = "";
    passwordError.innerText = "Please Enter Your Password";
    return;
  }

  userNameError.innerText = "";
  passwordError.innerText = "";
  if (password == 1234) {
    Swal.fire({
      title: "Login Sucessfull!",
      icon: "success",
    }).then(() => {
      localStorage.setItem("userName", userName);
      window.location.href = "./option.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Your Password is Incorrect!",
      footer: "Please Try Again",
    });
  }
});
