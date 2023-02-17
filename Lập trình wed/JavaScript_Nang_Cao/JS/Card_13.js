// Chapter 6
// Problem No 1
let driveAgain = true;
const canDrive = (age) => {
    return age >= 18 ? true : false;
}

while(driveAgain) {
    let age = prompt("Bạn bao nhiêu tuổi");
    age = Number.parseInt(age);
if(canDrive(age)) {
    alert("Ban duoc phep");
}
else {
    alert("Ban khong duoc phep");
}
if(age < 18) {
    console.warn("Hay doi den khi du tuoi");
}
driveAgain = confirm("Ban co muon thu lai khong");
}

// Problem No 2


let number = prompt("Ban hay nhap so");
number = Number.parseInt(number);

if(number > 4) {
    location.href = "https://google.com";
}
// Problem No 3
let color = prompt("Nhap mau ban muon");
document.body.style.background = color;