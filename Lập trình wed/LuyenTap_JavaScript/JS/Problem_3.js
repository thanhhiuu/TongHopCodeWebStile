let reviews1 = document.querySelector(".reviews-hoa1");
let reviews2 = document.querySelector(".reviews-hoa2");
let reviews3 = document.querySelector(".reviews-hoa3");
let reviews4 = document.querySelector(".reviews-hoa4");



let clickNext = document.querySelector("#btn");
let count = 1;


clickNext.addEventListener("click", clickCount);
function clickCount() {
    switch(count) {
        case 1: 
        reviews1.style.display = "none";
        reviews2.style.display = "block";
        count++;
        break;
        case 2: 
        reviews2.style.display = "none";
        reviews3.style.display = "block";
        count++;
        break;
        case 3: 
        reviews3.style.display = "none";
        reviews4.style.display = "block";
        count++;
        break;
        case 4: 
        reviews4.style.display = "none";
        reviews1.style.display = "block";
        count = 1;
        break;
    }
  }