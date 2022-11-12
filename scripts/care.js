function crousel(){
    let images=[
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/f061fddb-e946-4348-91e4-ffe9d69dd18a.png",

"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/cb1c1e2e-4b01-4920-a67d-46dd89857ced.png",

"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/56ddb91c-6286-490e-99c6-c73dda380f3a.png",
"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/f061fddb-e946-4348-91e4-ffe9d69dd18a.png",

];
let crousel_div=document.getElementById("crousel");
let img=document.createElement("img")
let i=0;
setInterval(function(){

if(i===images.length){
    i=0;
}
img.src=images[i]
crousel_div.append(img)
i++;
},1000);

}
crousel();

const care_data= async()=>{
    let ans= await fetch("http://localhost:3000/care")
    let cate= await ans.json()
    append_data(cate)
}
care_data()
//let cartArr = JSON.parse(localStorage.getItem('cart')) || []
const append_data=(cate)=>{

cate.forEach((el)=>{
    let card=document.createElement("div");
    let productImg=document.createElement("img");
    productImg.src=el.image_url;
   productImg.addEventListener("click", function(){
    addfun(el)
   })

    let price=document.createElement("p");
    price.innerText=el.price;

   


    card.append(productImg,price);
    document.querySelector("#container").append(card);

    

    
})
}
function addfun(el){
   // console.log(el)
    localStorage.setItem("selected_item",JSON.stringify(el))
    window.location.href="cart.html"
    
}