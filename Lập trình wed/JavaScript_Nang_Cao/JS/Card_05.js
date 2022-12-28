// Vong lap trong Js
// For Loop => For("Khoi tao"; "Dieu kien"; "Trinh vong lap");
// 3
// Card-1
// let sum = 0;
// let n = prompt("Nhap gia tri")
// n = Number.parseInt(n);

// for(let i = 0; i < n; i++) {
//     sum += (i+1);
//     console.log(i + 1);
// }  
// console.log("Gia tri " + n + " co ban la " + sum);

// Card-2
// Sử dụng vòng lặp JavaScript for mà không có ví dụ về trình khởi tạo
// Ví dụ sau sử dụng vòng lặp for không có biểu thức khởi tạo:
// let i  = 1;

// for(;i < 10; i += 2) {
//     console.log(i);
// }

// For...in Loop & thuoc tinh ke thua

// let obj = {
//     "Thanh Hieu": true,
//     "Tuoi": 19,
//     "ChieuCao": 1.8
// }
// for( const Chuoi in obj){
//     console.log(Chuoi + ":" + obj[Chuoi]);
// }
// obj["ChieuCao"];

// Ke thua

// var decoration = {
//     color: 'red'
// };

// var circle = Object.create(decoration);
// circle.radius = 10;


// for(const prop in circle) {
//     console.log(prop);
// }

// while loop => Kiem tra dieu kien xong moi neu true thi moi hoat dong
/*
let a = prompt("Hay nhap gia tri");
a = Number.parseInt(a);

let i = 0;
while(i < a) {
    console.log(i);
    i++;
}

*/
// Do....While loop => Chay xong moi xet dieu kien va code thuc hien it nhat mot lan.


    let a = prompt("Hay nhap gia tri");
    a = Number.parseInt(a);

    let i = 0;
    do {
        console.log(i);
        i++;
    }while(i < a)