const navbarFunc = function() {
    document.getElementById("cart").style.display = "none";
    document.querySelector("#cart-icon").addEventListener("click", () => {
        document.getElementById("cart").style.display = "block";
    })

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
    document.getElementById("login-btn").onclick = function(){
        window.location.href = "./login.html";
    }
}


const navbar = function() {
    return `
    <div id="logo-div" onclick="window.location='./index.html'">
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
        <div id="login-btn"><i class="fa-regular fa-user fa-lg" style="cursor: pointer;"></i></div>
        <div id="cart-icon" style="cursor: pointer;"><i class="fa-solid fa-cart-shopping fa-lg"></i><b class="test-count cart-count"></b></div>
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

const cartDiv = function() {
    return `
    <div class="cart-header">
        <b>Your Cart</b>
        <button id="pay-now"> Pay Now </button>
        <b class="close-cart" style="cursor: pointer;">X</b>
    </div>
    <div class="cart-sub-header">
        <b>Lab Tests</b>
        <div class="test-count"></div>
        <p></p> 
    </div>
    <div class="cart-body">
        
    </div>
    <div class="cart-btn"><a href="./care.html"><b>BOOK TESTS ON CARE.FIT</b></a></div>`
}

const showCartItems = function() {
    document.querySelector(".close-cart").addEventListener("click", () => {
        document.getElementById("cart").style.display = "none";
    })
    let cartBody = document.getElementsByClassName("cart-body")[0];
    cartBody.innerHTML = null;
    let cartItems = JSON.parse(localStorage.getItem("cart-item")) || [];
    let total = 0;
    if(cartItems.length>0){
        document.querySelector(".cart-sub-header>p").style.display='block';
        document.querySelector(".cart-sub-header>.test-count").innerText = cartItems.length;
        document.querySelector(".cart-count").innerText = cartItems.length;
        cartItems.forEach((el, index) => {
            let itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            let imgEl = document.createElement("img");
            imgEl.src = el.image_url;
            let itemDiv2 = document.createElement("div");
            itemDiv2.classList.add("item-div");
            let nameEl = document.createElement("h4");
            nameEl.innerText = el.title.substring(0,30);
            let priceRemoveDiv = document.createElement("div");
            priceRemoveDiv.classList.add("price-remove");
            let priceEl = document.createElement("p");
            priceEl.innerText = "₹"+ el.price;
            total = total + Number(el.price);
            let removeBtn = document.createElement("button");
            removeBtn.innerText = "Remove";
            removeBtn.addEventListener("click", () => {
                cartItems.splice(index, 1);
                localStorage.setItem("cart-item", JSON.stringify(cartItems));
                showCartItems();
            })
            priceRemoveDiv.append(priceEl, removeBtn);
            itemDiv2.append(nameEl, priceRemoveDiv)
            itemDiv.append(imgEl, itemDiv2);
            
            cartBody.append(itemDiv);
        })
        document.querySelector(".cart-sub-header>p").innerText = "Total: ₹" + total;
        let payBtn = document.getElementById("pay-now");
        payBtn.style.display = "block";
        payBtn.addEventListener("click", () => {
            window.location.href = "./payment.html"
        })
    }
    else{
        document.querySelector(".cart-sub-header>p").style.display='none';
        document.querySelector(".cart-sub-header>.test-count").innerText = 0;
        document.querySelector(".cart-count").innerText = null;
        cartBody.innerHTML = `
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_220,q_auto:eco,dpr_1,f_auto,fl_progressive//image/temp/cart/empty-cart-dark-theme.svg" alt="">
        <h4>Your cart is empty</h4>
        <h6>Looks like you haven't made any purchases yet</h6>
        `
        let payBtn = document.getElementById("pay-now");
        payBtn.style.display = "none";
    }
}

export {navbar, locateDiv, navbarFunc, cartDiv, showCartItems};