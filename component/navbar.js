const navbarFunc = function() {
    let popular_cities = [
        {
            city: "Bangalore",
            url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/co_white,e_outline:fill:5:100/e_tint:equalize:100:black//image/cities/blr_new.png"
        },
        {
            city: "Delhi NCR",
            url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/co_white,e_outline:fill:5:100/e_tint:equalize:100:black//image/cities/ncr_new.png"
        },
        {
            city: "Hyderabad",
            url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/co_white,e_outline:fill:5:100/e_tint:equalize:100:black//image/cities/hyd_new.png"
        },
        {
            city: "Mumbai",
            url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/co_white,e_outline:fill:5:100/e_tint:equalize:100:black//image/cities/mumbai_selected.png"
        }
    ];
    
    let other_cities = ["Imphal", "Ranchi", "Dehradun", "Bhubaneswar", "Jabalpur", "Vijayawada", "Nashik", "Moradabad", "Patna", "Allahabad", "Jalgaon"];
    let changeCity = function(name) {
        document.getElementById("city-name").innerHTML = name;
    }
    let locationDiv = document.getElementById("location-menu");
    
    let popDiv = document.getElementById("city-list");
    let otherCityDiv = document.getElementById("other-list");
    
    let populateCity = function() {
        popular_cities.forEach(el => {
            let popCityDiv = document.createElement("div");
            let imgDiv = document.createElement("img");
            imgDiv.src = el.url;
            let name = document.createElement("h4");
            name.innerText = el.city;
            name.addEventListener("click", () => {
                changeCity(el.city);
            });
            popCityDiv.append(imgDiv, name);
            popDiv.append(popCityDiv);
        })
    
        other_cities.forEach(el => {
            let cityDiv = document.createElement("div");
            let name = document.createElement("h4");
            name.innerText = el;
            name.addEventListener("click", () => {
                changeCity(el);
            });
            cityDiv.append(name);
            otherCityDiv.append(cityDiv);
        })
    
    }
    
    populateCity();
    locationDiv.style.display='none';
    let locBtn = document.getElementsByClassName("location-cls")[0];
    locBtn.addEventListener("click", () => {
        if (locationDiv.style.display !== "none") {
            locationDiv.style.display = "none";
        } 
        else {
            locationDiv.style.display = "block";
        }
    })

    document.getElementById("fitness-page").onclick = function(){
        window.location.href = "./fitness.html";
    }

    document.getElementById("care-page").onclick = function(){
        window.location.href = "./care.html";
    }

    document.getElementById("mind-page").onclick = function(){
        window.location.href = "./therapy.html";
    }

    document.getElementById("store-page").onclick = function(){
        window.location.href = "./index.html";
    }
}


const navbar = function() {
    return `
    <div id="logo-div">
        <img src="./media/logo.png" alt="logo">
    </div>
    <div id="menu-div">
        <div id="fitness-page"><h5 class="h5-cls">FITNESS</h5></div>
        <div id="care-page"><h5 class="h5-cls">CARE</h5></div>
        <div id="mind-page"><h5 class="h5-cls">MIND</h5></div>
        <div id="store-page"><h5 class="h5-cls">STORE</h5></div>
    </div>
    <div id="login-div">
        <div class="location-cls">
            <div id="city-name">BANGALORE</div>
            <div>
                <i class="fa-solid fa-location-dot fa-lg"></i>
            </div>
        </div>
        <div><button class="btn-cls">GET APP</button></div>
        <div><i class="fa-regular fa-user fa-lg"></i></div>
        <div><i class="fa-solid fa-cart-shopping fa-lg"></i></div>
    </div>`
}

const locateDiv = function() {
    return `
    <div class="input-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text">
    </div>
    <div id="city-list">
        <u><b class="popular-head">Popular Cities</b></u>
    </div>
    <div id="other-list">
        <u><b class="popular-head">Others</b></u>
    </div>`
}

let cartItems = [
    {
        name: "Therapist-1",
        desc: "Some test Description for testing porpose",
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_220,q_auto:eco,dpr_1,f_auto,fl_progressive//image/temp/cart/empty-cart-dark-theme.svg"
    },
    {
        name: "Therapist-2",
        desc: "Some test Description for testing porpose",
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_220,q_auto:eco,dpr_1,f_auto,fl_progressive//image/temp/cart/empty-cart-dark-theme.svg"
    }
]

let cartBody = document.getElementsByClassName("cart-body")[0];
let cartItemFunc = function() {
    // cartItems = [];
    if(cartItems.length>0){
        cartItems.forEach(el => {
            let itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            let imgEl = document.createElement("img");
            imgEl.src = el.img;
            let nameEl = document.createElement("h4");
            nameEl.innerText = el.name;
            itemDiv.append(imgEl, nameEl);
            cartBody.append(itemDiv);
        })
    }
    else{
        cartBody.innerHTML = `
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_220,q_auto:eco,dpr_1,f_auto,fl_progressive//image/temp/cart/empty-cart-dark-theme.svg" alt="">
        <h4>Your cart is empty</h4>
        <h6>Looks like you haven't made any purchases yet</h6>
        `
    }
}

// cartItemFunc();

// let nav = document.getElementById("navbar");
// // nav.innerHTML = navbar();
// nav.style.backgroundColor = 'black';
// let locMenu = document.getElementById("location-menu");
// locMenu.innerHTML = locateDiv();
// navbarFunc();

export {navbar, locateDiv, navbarFunc};