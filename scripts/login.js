
import {navbar, locateDiv, navbarFunc, cartDiv, showCartItems} from "../component/navbar.js";


let navbarDiv = document.getElementById("navbar");
navbarDiv.innerHTML = navbar();
navbarDiv.style.backgroundColor = 'black';
document.getElementById("location-menu").innerHTML = locateDiv();
document.getElementById("cart").innerHTML = cartDiv();
navbarFunc();
showCartItems();



document.getElementById("login").addEventListener("click", () => {
    login();
})

function login(){
    let x  = 0 ;
let y = 9 ;

let a = Math.floor(x + (y - x) * Math.random());
let b = Math.floor(x + (y - x) * Math.random());
let c = Math.floor(x + (y - x) * Math.random());
let d = Math.floor(x + (y - x) * Math.random());

console.log(a,b,c,d)

let otp = String(a)+String(b)+String(c)+String(d);

localStorage.setItem("otp",JSON.stringify(otp));
console.log(otp)

alert(otp)
window.location.href = "connect.html"

}