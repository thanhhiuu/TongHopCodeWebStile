// nn bb ss u - Kiểu dữ liệu nguyên thủy
let a = null;
let b = 345;
let c = true; // Can also be false
let d = BigInt("123") + BigInt("456");
let e = "Thanh Hieu";
let f = Symbol(" I am a nice symbol ");
let g = undefined;
console.log(a, b, c, d, e, f, g);


// Object in Js - Kiểu dữ liệu không nguyên thủy
const item ={
    "Thanh Hieu": true,
    "age": 19,
    "Hiu": undefined
}
console.log(item["Hiu"]);