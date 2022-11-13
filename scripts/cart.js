
let selectedtest=JSON.parse(localStorage.getItem("selected_item"))
let carts=document.getElementById("carts");
   
let largeImg=document.createElement("img");
largeImg.src=selectedtest.largeimg_url;

let title = document.createElement("h2");
title.innerText = selectedtest.title;

let des=document.createElement("p");
des.innerText=selectedtest.description;

let price=document.createElement("p")
price.innerText=selectedtest.price;

let addToCart = document.createElement("button");
addToCart.innerText = "ADD";
addToCart.addEventListener("click", () => {
    
})

carts.append(largeImg,title,des,price,addToCart);
    
