
import { navbar , locateDiv, navbarFunc } from "../component/navbar.js"
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("location-menu").innerHTML = locateDiv();
navbarFunc();


const get_data= async()=>{
    
    let res= await fetch("http://localhost:3000/Library")
    let data= await res.json()
    // console.log(data)
    append_library(data)
    
}
get_data()

const append_library=(data)=>{
    let container=document.getElementById("container")
    data.forEach((el) => {
        let div=document.createElement("div")
        div.className="card"
        let detail=document.createElement("div")
        detail.className="content"
        let img_div=document.createElement("div")
        img_div.className="img_div"

        let image=document.createElement("img")
        image.src=el.image;

        let heading=document.createElement("h2")
        heading.innerText=el.heading;

        let des=document.createElement("p")
        des.innerText=el.des;

        let pack=document.createElement("h4")
        pack.innerText=el.pack;
        img_div.append(image)
        detail.append(heading,des,pack)
        div.append(img_div,detail)
        container.append(div)
    });

}