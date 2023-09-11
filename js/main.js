const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

const heading = document.getElementById("heading");

const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signBtn = document.getElementById("sign-btn");
const forgotPassword = document.getElementById("forgot-password");
var flag = 1;

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const userNameValue = userName.value;

  if (
    userName.value === "" ||
    email.value === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    setMessage("🛑 Please enter all fields!", "error");
  } else if (password.value !== confirmPassword.value) {
    setMessage("🚫 Password doesn't match!", "error");
    resetInput();
  } else {
    setLocalStorage(userNameValue);
    setMessage(" ✔ Account Created Successfully! ", "success");
    resetInput();
  }
});

function setLocalStorage(userNameValue) {
  localStorage.setItem("userName", userNameValue);
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
    setMessage(
      ` ✔ Login Successfully! You Will redirect to Home page in few second... `,
      "success"
    );
    setTimeout(() => {
      nav();
    }, 2000);
    resetInput();
  } else {
    setMessage("❌ Invaild Login", "error");
    resetInput();
  }
});
function nav() {
  window.location.href = "index.html";
}
function setMessage(msg, type) {
  if (flag === 1) {
    flag = 0;
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.classList = type;
    p.textContent = msg;
    console.log(p);
    div.append(p);
    heading.insertAdjacentElement("afterend", div);
    setTimeout(() => {
      flag = 1;
      div.remove();
    }, 2000);
  }
}
function resetInput() {
  userName.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
  cEmail.value = "";
  cPassword.value = "";
}

forgotPassword.addEventListener("click", () => {
  setMessage("Please create a new account", "error");
});
