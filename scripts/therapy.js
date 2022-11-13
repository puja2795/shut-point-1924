import {navbar, locateDiv, navbarFunc, cartDiv, showCartItems} from "../component/navbar.js";
import {footerDiv, optionalFooter} from "../component/footer.js";


let navbarDiv = document.getElementById("navbar");
navbarDiv.innerHTML = navbar();
navbarDiv.style.backgroundColor = 'black';
document.getElementById("location-menu").innerHTML = locateDiv();
document.getElementById("cart").innerHTML = cartDiv();
navbarFunc();
showCartItems();
let Therapies_data=[  // data for tharapy page
    {
        title: "Therapy",
        desc: "Experts who help solve emotional problems ₹699",
        duration: "50 Mins Session",
        price: "₹ 699.00",
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/9355d11a-f088-4f10-b9df-72ea3ecf8e0b.png"
    },
    {
        title: "Couple Therapy",
        desc: "Resolve emotional conflicts in relationships and marriage ₹1250",
        duration: "50 Mins Session",
        price: "₹ 1250",
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/9ce1d9a2-d3c6-4a19-91bd-028d52f58c84.png"
    },
    {
        title: "COVID Stress",
        desc: "Seek expert help from our therapists for coping with isolation and COVID-related stress and worry ₹699",
        duration: "50 Mins Session",
        price: "₹ 699.00",
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/5e9f8ee5-83dd-4dca-beca-61885323ce3c.png"
    },
    {
        title: "Better Sleep  ",
        desc: "Consult with experts to learn effective strategies for restful sleep and good sleep health ₹699",
        duration: "50 Mins Session",
        price: "₹ 699.00",
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/84248218-f8c0-44d8-b2d6-be415b742b9a.png"
    },
    {
        title: "Rise to Confidence",
        desc: "Grow into a more confident and self-assured you by talking to our experts ₹699",
        duration: "50 Mins Session",
        price: "₹ 699.00",
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/dcd1728e-d7dc-4952-b552-b1b1c97e9ac1.png"
    },
    {
        title: "Thrive at work",
        desc: "Make work fulfilling and meaningful with the help of our experts ₹699",
        duration: "50 Mins Session",
        price: "₹ 699.00",
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/18a8d3b2-d262-4f78-908b-79a55a40ef68.png"
    },
    {
        title: "Healthy Relationships",
        desc: "Understand your relationship patterns and exploring healthy ways of connecting ₹699",
        duration: "50 Mins Session",
        price: "₹ 699.00",
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/1a2d8f7e-2c24-4cbf-88be-e2cf266dfa23.png"
    }
]


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
    if(data){
        append_therapy(data)
    }else{
        append_therapy(Therapies_data)
    }
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