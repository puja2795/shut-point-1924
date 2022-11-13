import {navbar, locateDiv, navbarFunc, cartDiv, showCartItems} from "./component/navbar.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("location-menu").innerHTML = locateDiv();
document.getElementById("cart").innerHTML = cartDiv();
navbarFunc();
showCartItems();