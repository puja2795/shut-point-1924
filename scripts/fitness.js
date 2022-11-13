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

const productContainers = document.querySelectorAll(".product-container")
const nxtBtn = document.querySelectorAll(".nxt-btn")
const preBtn = document.querySelectorAll(".pre-btn")

productContainers.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerwidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerwidth;
    })
})

const sliderMain = document.getElementById('slider-main');
const item = sliderMain.getElementsByClassName('item');

function next() {
    sliderMain.append(item[0]);
}
function prev() {
    sliderMain.prepend(item[item.length-1]);
}

