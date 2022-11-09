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