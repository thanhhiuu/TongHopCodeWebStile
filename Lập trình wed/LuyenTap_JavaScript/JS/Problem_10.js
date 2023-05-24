let pass = document.querySelector("#password");
let msg = document.querySelector("#message");
let authenPass = document.querySelector("#authenPass");



pass.addEventListener("input", () => {
    if(pass.value.length > 0) {
        msg.style.display = "block";
    }else {
        msg.style.display = "none";
    }
    if(pass.value.length == 4) {
        authenPass.innerHTML = "còn yếu !!!"
        msg.style.color = "red";
    } 
    else if(pass.value.length >= 4 && pass.value.length < 8 ) {
        authenPass.innerHTML = " khá ổn!!!"
        msg.style.color = "coral";
    } 
    else if(pass.value.length >= 8){
        authenPass.innerHTML = " rất mạnh!!!"
        msg.style.color = "green";
    }
})
