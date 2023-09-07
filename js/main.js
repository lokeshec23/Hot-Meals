const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signBtn = document.getElementById("sign-btn");

signBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    userName.value === "" ||
    email.value === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("please enter all fields!");
  } else if (password.value !== confirmPassword.value) {
    alert("Password doesn't match!");
    resetInput();
  } else {
    setLocalStorage();
    alert("Account Created Successfully!");
    resetInput();
  }
});

function setLocalStorage() {
  localStorage.setItem("userName", userName.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
}

const loginBtn = document.getElementById("login-btn");
const cEmail = document.getElementById("cEmail");
const cPassword = document.getElementById("cPassword");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  var getEmail = localStorage.getItem("email", email.value);
  var getPwd = localStorage.getItem("password", password.value);
  if (getEmail === cEmail.value && getPwd === cPassword.value) {
    alert("Login Successfully!");
    resetInput();
  } else {
    alert("Invaild login");
    resetInput();
  }
});

function resetInput() {
  userName.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
  cEmail.value = "";
  cPassword.value = "";
}

// <div id="msg-container">
//   <h3 class="">Account Created Succssfully</h3>
// </div>

