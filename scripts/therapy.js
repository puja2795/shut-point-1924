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

// silder on button click based
// let pic1_btn=document.getElementById("A")
// pic1_btn.onclick=()=>{
//     let slider_img=document.getElementById("sliding_img")
//     slider_img.src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/a196b25e-4fdf-45a5-a4e1-68a32a6cbcce.png"
// }

// let pic2_btn=document.getElementById("B")
// pic2_btn.onclick=()=>{
//     let slider_img=document.getElementById("sliding_img")
//     slider_img.src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/23877b2f-09d0-4d57-b5c3-dc1f9046ee28.png"
// }





// silder on interval based
const slider=()=>{
    let data=["https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/a196b25e-4fdf-45a5-a4e1-68a32a6cbcce.png",
            "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/23877b2f-09d0-4d57-b5c3-dc1f9046ee28.png"]
    
        let slider_img=document.getElementById("sliding_img")
        let i=0;
        setInterval(()=>{
        if(i==data.length){
            i=0;
        }
        slider_img.src=data[i]
        i++;
    },2000)
}
slider() // function invoke when page load

const get_data= async()=>{
    let res= await fetch("http://localhost:3000/therapies")
    let data= await res.json()
    console.log(data)
    append_therapy(data)
}
get_data() // function invoke when page load


const append_therapy=(data)=>{
    let experts_div=document.getElementById("expert_div")
    data.forEach((el) => {
        let div=document.createElement("div")
        div.className="cards"
        let detail_div=document.createElement("div")
        detail_div.className="detail"

        let image=document.createElement("img")
        image.src=el.image
        

        let name=document.createElement("h3")
        name.innerText=el.title

        let des=document.createElement("p")
        des.innerText=el.desc

        let duration=document.createElement("p")
        duration.innerText=el.duration;

        let price=document.createElement("h3")
        price.innerText=el.price;

        detail_div.append(name,des,duration,price)
        div.append(image,detail_div)
        experts_div.append(div)
    });
}