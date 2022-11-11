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
let obj=[{id:1,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_m_mag.png",
    price:890,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/FitCheckHero012020.png",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",

},
{id:2,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_f_mag.png",
    price:790,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Vitamin_Profile_clp.jpg",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",

},
{
    id:3,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/IronScreeningClp122020.png",
    price:390,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Thyroid_Screening_clp.jpg",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",
},{id:4,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/WomensHealthScreening_Magazine.png",
    price:1790,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/WorkoutWellness_men_magazine_web2.png",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",

},{id:5,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/PCODMagazineWeb.png",
    price:1790,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/diagnostics/screening-packs/Workout_Wellness_women_Hero.png",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",

},{
    id:6,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Diabetes_Screening_clp.jpg",
    price:2990,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_m_hero.png",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",
},{
    id:7,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/LipidScreening_Magazine.png",
    price:2990,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_f_hero.png",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",
},{
    id:8,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/ImmunityCcreening_Magazine.png",
    price:590,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/IronScreeningHero122020.png",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",
},{id:9,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/CF01032_hero_2.png",
    price:1490,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/WomensHealthScreening_Hero.png",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",

},{
    id:10,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/PregnancyScreening_Magazine.png",
    price:1990,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/diagnostics/screening-packs/PCODHero.png",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",
},{
    id:11,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Kidney_Screening_clp.jpg",
    price:890,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/mp/diag_pack_Diabetes_Screening_hero.jpg",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",
},{id:12,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/HairFallScreeningClp122019.png",
    price:890,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/DiagPackLipidHero070219.png",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",

},{
    id:13,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Liver_Screening_clp.jpg",
    price:890,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/ImmunityCcreening_Magazine.png",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",
},{
    id:14,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/FeverPanel_Magazine.jpg",
    price:890,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",
},{
    id:15,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/Alcohol_magazine.png",
    price:890,
    largeimg_url:"",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."
},
   { id:16,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/Anemia_Magazine_Web_new.png",
    price:890,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/PregnancyScreening_Hero.png",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",
},{
    id:17,
    image_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/Obesity_Risk_Magazine.jpg",
    price:890,
    largeimg_url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/mp/diag_pack_Kidney_Screening_hero.jpg",
    description:"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.",
},

]
//let cartArr = JSON.parse(localStorage.getItem('cart')) || []
obj.forEach(function(el){
    let card=document.createElement("div");
    let productImg=document.createElement("img");
    productImg.src=el.image_url;
    let price=document.createElement("p");
    price.innerText=el.price;
    let btn =document.createElement("button");
   btn.innerText="Add to cart";
    btn.addEventListener("click", addtocart);
    card.append(productImg,price,btn);
    document.querySelector("#container").append(card);

    // function addtocart(){
    //     cartArr.push(el)
    //     localStorage.setItem('cart', JSON.stringify(cartArr))
    // }
})