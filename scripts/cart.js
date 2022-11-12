import {navbar, locateDiv, navbarFunc, cartDiv, showCartItems} from "../component/navbar.js";

let navbarDiv = document.getElementById("navbar");
navbarDiv.innerHTML = navbar();
navbarDiv.style.backgroundColor = 'black';
document.getElementById("location-menu").innerHTML = locateDiv();
document.getElementById("cart").innerHTML = cartDiv();
navbarFunc();


let selectedTest = JSON.parse(localStorage.getItem("selected_item"));

let carts=document.getElementById("carts");
   
let largeImg = document.createElement("img");
largeImg.src = selectedTest.largeimg_url;

let title = document.createElement("h2");
title.innerText = selectedTest.title;

let des=document.createElement("p");
des.innerText = selectedTest.description;

let price=document.createElement("p")
price.innerText = selectedTest.price;

let addToCartBtn = document.createElement("button");
addToCartBtn.innerText = "ADD";
addToCartBtn.addEventListener("click", () => {
    addToCartFunc(selectedTest);
})

carts.append(largeImg, title, des, price, addToCartBtn);

let cartItems = JSON.parse(localStorage.getItem("cart-item")) || [];;

function addToCartFunc(selectedTest) {
    cartItems.push(selectedTest);
    localStorage.setItem("cart-item", JSON.stringify(cartItems));
    showCartItems();
}
    
showCartItems();