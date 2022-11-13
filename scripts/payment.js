import {navbar, locateDiv, navbarFunc, cartDiv, showCartItems} from "../component/navbar.js";



let navbarDiv = document.getElementById("navbar");
navbarDiv.innerHTML = navbar();
navbarDiv.style.backgroundColor = 'black';
document.getElementById("location-menu").innerHTML = locateDiv();
document.getElementById("cart").innerHTML = cartDiv();
navbarFunc();
showCartItems();

document.getElementById("place-order").addEventListener("click", function (event){
    localStorage.setItem("cart-item", JSON.stringify([]));
    document.querySelector(".cart-sub-header>p").style.display='none';
    document.querySelector(".cart-sub-header>.test-count").innerText = 0;
    alert("Payment Successful");
})
