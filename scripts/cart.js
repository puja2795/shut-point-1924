import {navbar, locateDiv, navbarFunc, cartDiv, showCartItems} from "../component/navbar.js";
import {footerDiv, optionalFooter} from "../component/footer.js";



let navbarDiv = document.getElementById("navbar");
navbarDiv.innerHTML = navbar();
navbarDiv.style.backgroundColor = 'black';
document.getElementById("location-menu").innerHTML = locateDiv();
document.getElementById("cart").innerHTML = cartDiv();
navbarFunc();
showCartItems();

document.getElementById("footer-div").innerHTML = footerDiv();
document.getElementById("optional-container").innerHTML = optionalFooter();

let selectedTest = JSON.parse(localStorage.getItem("selected_item")) || {};

let cartImgDiv = document.getElementById("cart-image");
let largeImg = document.createElement("img");
largeImg.src = selectedTest.largeimg_url;
cartImgDiv.append(largeImg);

document.getElementById("item-title").innerText = selectedTest.title;
document.getElementById("item-desc").innerText = selectedTest.description;
document.getElementById("price").innerText = "₹" +selectedTest.price;

let des=document.createElement("p");
des.innerText = selectedTest.description;

let price=document.createElement("p")
price.innerText = selectedTest.price;

let addToCartBtn = document.createElement("button");
addToCartBtn.innerText ="ADD";

document.getElementById("add-btn").addEventListener("click", (event) => {
    event.preventDefault();
    addToCartFunc(selectedTest);
})

function addToCartFunc(selectedTest) {
    let cartItems = JSON.parse(localStorage.getItem("cart-item")) || [];
    cartItems.push(selectedTest);
    localStorage.setItem("cart-item", JSON.stringify(cartItems));
    showCartItems();
}