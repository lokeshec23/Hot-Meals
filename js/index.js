const addCart = document.querySelectorAll(".add-cart");
const cartCount = document.getElementById("cart-count");
const homeLoginBtn = document.getElementById('home-login')
const uName = localStorage.getItem('userName');
if(uName){
  homeLoginBtn.innerHTML = uName
}else{
  homeLoginBtn.innerHTML = 'Login'
}
for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", () => {
    window.location.href = "addToCart.html";    
  });
}
