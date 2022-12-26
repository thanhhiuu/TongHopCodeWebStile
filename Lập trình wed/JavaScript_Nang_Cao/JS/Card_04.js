// Biểu thức điều kiện trong JavaScript
// let a = prompt("Bạn đã đủ tuổi để lái xe chưa ?");
// console.log(typeof a);
// a = Number.parseInt(a); // Chuyen doi tu chuoi thanh so
// console.log(typeof a);

// Lenh IF And IF....else, IF....else....if

// IF 
// let b = prompt("Ban du 18 tuoi chua ? ");
// console.log(typeof b);
// if(b >= 18) {
//     console.log("Ban du dieu kien de thi ");
// }


// IF...else
// let c = prompt("Ban du 18 tuoi chua ? ");
// console.log(typeof b);
// if(b >= 18) {
//     console.log("Ban du dieu kien de thi ");
// }
// else {
//     console.log("Ve nha va doi toi 18 tuoi nhe !");
// }

// IF.... else....if
let c = prompt("Ban du 18 tuoi chua ? ");
if(c < 0) {
    console.log("Rat tiec ban khong du dieu kien");
}
else if (c < 9) {
    console.log("Toi co the gui cho ban tai lieu tham khao");
}
else if (c < 18) {
    console.log("Ban hay doi den 18 tuoi va co the thi lai xe");
}
else {
    console.log("Ban co the dang ky lai xe tai day");
}
// Phep toan ba ngoi
console.log("Ban se", c < 18 ? "Khong duoc lai xe" : "Duoc phep lai xe");
// Bai tap co ban ve swich... case