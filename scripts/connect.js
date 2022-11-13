
import {navbar, locateDiv, navbarFunc, cartDiv, showCartItems} from "../component/navbar.js";


let navbarDiv = document.getElementById("navbar");
navbarDiv.innerHTML = navbar();
navbarDiv.style.backgroundColor = 'black';
document.getElementById("location-menu").innerHTML = locateDiv();
document.getElementById("cart").innerHTML = cartDiv();
navbarFunc();
showCartItems();

let connect_btn = document.getElementById("connect-btn-id");
connect_btn.onclick = () =>{
    otplogin();
}

let  otplogin =() =>{
    let otp = ""
    // console.log("login page")
     let num = document.getElementById("otp").value
     let pin = localStorage.getItem("otp") || "";

     for(let i=0 ; i<num.length ; i++){
        otp +=String(num[i])
     }
     console.log(`"${otp}"`)

    if(`"${otp}"` === pin ){
        alert("Connected To Us Successfully")
        window.location.href = "profile.html"
    }
    else{
        alert("Invalid OTP")
    }
}