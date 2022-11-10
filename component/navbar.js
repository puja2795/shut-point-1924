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
}


const navbar = function() {
    return `
    <div id="logo-div">
        <img src="./media/logo.png" alt="logo">
    </div>
    <div id="menu-div">
        <div><h5 class="h5-cls">FITNESS</h5></div>
        <div><h5 class="h5-cls">CARE</h5></div>
        <div><h5 class="h5-cls">MIND</h5></div>
        <div><h5 class="h5-cls">STORE</h5></div>
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
export {navbar, locateDiv, navbarFunc};