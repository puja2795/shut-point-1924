import {navbar, locateDiv, navbarFunc, cartDiv, showCartItems} from "./component/navbar.js";
import {footerDiv, optionalFooter} from "./component/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("location-menu").innerHTML = locateDiv();
document.getElementById("cart").innerHTML = cartDiv();
navbarFunc();
showCartItems();

document.getElementById("footer-div").innerHTML = footerDiv();
document.getElementById("optional-container").innerHTML = optionalFooter();