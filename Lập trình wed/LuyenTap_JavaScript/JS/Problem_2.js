let back = document.querySelector(".back");
let reset = document.querySelector(".reset");
let next = document.querySelector(".next") ;
let value = document.querySelector(".value") ;


let valueKey = 0;
value.innerHTML = valueKey;


next.addEventListener("click", nextCount);
function nextCount () {
        valueKey++;
        value.innerHTML = valueKey;
}

back.addEventListener("click", backCount);
function backCount () {
       
        if(valueKey > 0){
            valueKey--;
            value.innerHTML = valueKey;
        }
        else {
            alert("Khong the !");
        }
}

reset.addEventListener("click", resetCount);
function resetCount () {
        valueKey = 0;
        value.innerHTML = valueKey;
}