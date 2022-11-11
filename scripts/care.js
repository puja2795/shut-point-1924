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
// let obj=[{id:1,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_m_mag.png",
//     price:890

// },
// {id:2,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_f_mag.png",
//     price:790

// },
// {
//     id:3,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/IronScreeningClp122020.png",
//     price:390
// },{id:4,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/WomensHealthScreening_Magazine.png",
//     price:1790

// },{id:5,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/PCODMagazineWeb.png",
//     price:1790

// },{
//     id:6,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Diabetes_Screening_clp.jpg",
//     price:2990
// },{
//     id:7,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/LipidScreening_Magazine.png",
//     price:2990
// },{
//     id:8,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/ImmunityCcreening_Magazine.png",
//     price:590
// },{id:9,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/CF01032_hero_2.png",
//     price:1490

// },{
//     id:10,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/PregnancyScreening_Magazine.png",
//     price:1990
// },{
//     id:11,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Kidney_Screening_clp.jpg",
//     price:890
// },{id:12,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/HairFallScreeningClp122019.png",
//     price:890

// },{
//     id:13,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Liver_Screening_clp.jpg",
//     price:890
// },{
//     id:14,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/FeverPanel_Magazine.jpg",
//     price:890
// },{
//     id:15,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/Alcohol_magazine.png",
//     price:890
// },{
//     id:16,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/Anemia_Magazine_Web_new.png",
//     price:890
// },{
//     id:17,
//     image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/Obesity_Risk_Magazine.jpg",
//     price:890
// },

// ]
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