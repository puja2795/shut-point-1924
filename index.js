import {navbar, locateDiv, navbarFunc} from "./component/navbar.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("location-menu").innerHTML = locateDiv();
navbarFunc();