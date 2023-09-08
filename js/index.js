let initialValue = 1;
let price  = document.querySelectorAll('.price')
let addBtn = document.querySelectorAll(".add");
for (let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener("click", () => {
    addBtn[i].style.display = "none";
    const div = document.createElement("div");
    const plus = document.createElement("button");
    const minus = document.createElement("button");
    const orderValue = document.createElement("span");
    const Element  = div.append(plus, orderValue, minus)
    p
  });
}
