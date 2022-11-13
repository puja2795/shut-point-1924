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
const 
care_log=[
    {
        "id":1,
        "title":"Sr Citizen Advance Package - Male",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_m_mag.png",
        "price":"890",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_m_hero.png",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."

    },
    {
        "id":2,
        "title":"Sr Citizen Advance Package - Female",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_f_mag.png",
        "price":"790",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_f_hero.png",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."
    },
    {
        "id":3,
        "title":"Iron Screening (Ferritin,Iron,TIBC,PTS)",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/IronScreeningClp122020.png",
        "price":"390",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/IronScreeningHero122020.png",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."
    },
    {
        "id":4,
        "title":"Women's health",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/WomensHealthScreening_Magazine.png",
        "price":"1790",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/WomensHealthScreening_Hero.png",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."

    },
    {
        "id":5,
        "title":"PCOD Profile",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/PCODMagazineWeb.png",
        "price":"1790",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/diagnostics/screening-packs/PCODHero.png",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."

    },
    {
        "id":6,
        "title":"Diabetes Screening (FBS,HBA1C)",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Diabetes_Screening_clp.jpg",
        "price":"2990",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/mp/diag_pack_Diabetes_Screening_hero.jpg",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."
    },
    {
        "id":7,
        "title":"Lipid profile",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/LipidScreening_Magazine.png",
        "price":"2990",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/DiagPackLipidHero070219.png",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."
    },
    {
        "id":8,
        "title":"Immunity Screening",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/ImmunityCcreening_Magazine.png",
        "price":"590",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/ImmunityScreening_hero.png",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."
    },
    {
        "id":9,
        "title":"Energy Screening",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/CF01032_hero_2.png",
        "price":"1490",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."

    },
    {
        "id":10,
        "title":"Pregnancy Test",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/PregnancyScreening_Magazine.png",
        "price":"1990",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/PregnancyScreening_Hero.png",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."
    },
    {
        "id":11,
        "title":"Kidney Function Test (KFT)",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Kidney_Screening_clp.jpg",
        "price":"890",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/mp/diag_pack_Kidney_Screening_hero.jpg",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."
    },
    {
        "id":12,
        "title":"Hair Fall Screening (Ferritin,TSH,VitB12,VitD)",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/HairFallScreeningClp122019.png",
        "price":"890",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/HairFallScreeningHero122019.png",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."

    },
    {
        "id":13,
        "title":"Liver Function Test (LFT)",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Liver_Screening_clp.jpg",
        "price":"890",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/mp/diag_pack_Liver_Screening_hero.jpg",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."
    },
    {
        "id":14,
        "title":"Fever Panel",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/FeverPanel_Magazine.jpg",
        "price":"890",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/FeverPanel_Hero.jpg",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."
    },
    {
        "id":15,
        "title":"Alcohol Risk Assessment",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/Alcohol_magazine.png",
        "price":"890",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/Alcohol_Hero.jpg",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."
    },

    { 
        "id":16,
        "title":"Anemia Profile",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/Anemia_Magazine_Web_new.png",
        "price":"890",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/diagnostics/screening-packs/AnemiaHero.png",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."
    },
    {
        "id":17,
        "title":"Obesity Risk Profile",
        "image_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/Obesity_Risk_Magazine.jpg",
        "price":"890",
        "largeimg_url":"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,c_fit/dpr_2/image/carefit/bundle/Obesity_Risk_Hero.jpg",
        "description":"This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood."
    }
]


const care_data= async()=>{
    // let ans= await fetch("http://localhost:3000/care")
    // let cate= await ans.json()
    // append_data(cate)
    try{
        let ans= await fetch("http://localhost:3000/care")
    let cate= await ans.json()
    append_data(cate)
    }
    catch(err){
append_data(care_log)
    }
}
care_data()
//let cartArr = JSON.parse(localStorage.getItem('cart')) || []

let main_container = document.getElementById("container");

const append_data=(cate)=>{

cate.forEach((el)=>{
    let card=document.createElement("div");
    let productImg=document.createElement("img");
    productImg.src=el.image_url;
   productImg.addEventListener("click", function(){
    addfun(el)
   })
   
    let price=document.createElement("p");
    price.innerText= "₹" + el.price;

    card.append(productImg,price);
    main_container.append(card);

})
}
function addfun(el){
    localStorage.setItem("selected_item",JSON.stringify(el))
    window.location.href="cart.html"
    
}