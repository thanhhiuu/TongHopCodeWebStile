// Function in JavaScript
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
console.log(sum(2));



// Function khong tra ve gia tri nao
const hello = () => {
    console.log("Heyy How are you ? Oh I am fine. Thanhs ! ");
    return "Hi";
}
hello(); // => Tra ve ham khong co gia tri, neu nhu co return thi ban can phai tao bien den lay gia tri
let layGiaTri = hello();
console.log(layGiaTri); //=> Ban can phai goi bien do ra de chay