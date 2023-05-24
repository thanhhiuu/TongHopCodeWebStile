const error = '"Thong bao loi"';
const warning = '"Ban co chac chan khong"';
const info = '"ThanhHiu"';


const myFunc = (message, level = info) => {
    console.log(`${level}: ${message} `)
} 


module.exports.myFunc = myFunc;
module.exports.error = error;
module.exports.warning = warning;
module.exports.info = info;

function hello() {
    console.log("Chào các bạn")
}
function ahello(name) {
    console.log("Chào " + name)
}
module.exports.hello = hello;
module.exports.ahello = ahello;
// Tạo một file để sử dụng module.js 
// => file nodemodule.js đã có sẵn


// Understanding the module wrapper function (hiểu chức trình bao bọc module)
// Trước khi node.js thực thi một module, nó sẽ bao tất cả các mã bên trong module đó trong 1 hàm bao hàm giống nhau
// (function (exports, require, module, __filename, __dirname) {
//     const error = "Lỗi rồi bạn ơi !";
//     const warning = "Bạn có chắc chắn chưa vậy !"
//     const info = "Nguyễn Thành Hiếu(Híu)";

//     function myFunc(message, level = info) {
//         console.log(`${message} : ${info}`)
//         }

//     module.exports.myFunc = myFunc;
//     module.exports.error = error;
//     module.exports.warning = warning;
//     module.exports.info = info;
    
    
    
// })
// console.log(module.exports === exports)

// Nhập cùng 1 module nhiều lần 
// console.log("Chào bạn, chúc bạn thành công !");