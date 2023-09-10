const addCart = document.querySelectorAll(".add-cart");
const cartCount = document.getElementById("cart-count");

let orderItem = 0;

for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", () => {
    window.location.href = "addToCart.html";    
  });
}
