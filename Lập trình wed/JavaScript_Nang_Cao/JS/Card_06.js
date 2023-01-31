// Function in JavaScript
/*
let a = 1;
let b = 2;
let c = 3;

function tinhDiemTB(x, y) {
    return Math.round(1 + (x + y) / 2); // Math.round => Tra ve so nguyen cho gia tri
}

console.log("Diem trung binh cua ban la: ", tinhDiemTB(a, b));
console.log("Diem trung binh cua ban la: ", tinhDiemTB(b, c));
console.log("Diem trung binh cua ban la: ", tinhDiemTB(a, c));

// Day cung la mot Function
const sum = (q) => {
    return q += 2;
}
console.log(sum(8));


// Function khong tra ve gia tri nao
const hello = () => {
    console.log("Heyy How are you ? Oh I am fine. Thanhs ! ");
    return "Hi";
}
hello(); // => Tra ve ham khong co gia tri, neu nhu co return thi ban can phai tao bien den lay gia tri
let layGiaTri = hello();
console.log(layGiaTri); //=> Ban can phai goi bien do ra de chay


// Thuc hanh ve loop và function
// Problrem No 1
//=> Lay ra gia tri can lay
let thanhHieu = {
    hieu: 19,
    thinh: 20, 
    duc: 17,
    thoai: 20
}
for(let i = 0; i < Object.keys(thanhHieu).length; i++) {
     console.log(Object.keys(thanhHieu)[i] + " age " + thanhHieu[Object.keys(thanhHieu)[i]]);
}

// Problem No 2 (for in loop)
let thanhHieu = {
    hieu: 19,
    thinh: 20, 
    duc: 17,
    thoai: 20
}
for(let i in thanhHieu) {
    console.log(i  + " " + " age " + thanhHieu[i]);
    // console.log(Object.keys(thanhHieu)[i] + " age " + thanhHieu[Object.keys(thanhHieu)[i]]);
}


// Problem No 3
//=> Kiem tra xem minh nhap dung gia tri chua
let cn = 4;
let n
while(n != cn) {
    n = prompt("Nhap gia tri dung");
    n = Number.parseInt(n);
}
console.log("Gia tri cua ban hop le");
*/
// Problem No 4
// => Kiem tra gia tri trung binh cua tung so

const mean = (a, b, c, d) => {
    return (a + b + c + d)/4
}
console.log(mean(1, 2, 3, 4));

//