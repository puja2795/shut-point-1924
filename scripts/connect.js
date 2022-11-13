let  otplogin =() =>{
    let otp = ""
    // console.log("login page")
     let num = document.getElementById("otp").value
     let pin = localStorage.getItem("otp") || "";

     for(let i=0 ; i<num.length ; i++){
        otp +=String(num[i])
     }
     console.log(`"${otp}"`)

    if(`"${otp}"` === pin ){
        alert("Connected To Us Successfully")
        window.location.href = "profile.html"
    }
    else{
        alert("Invalid OTP")
    }
}