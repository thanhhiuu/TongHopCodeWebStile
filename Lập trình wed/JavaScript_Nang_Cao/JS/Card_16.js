// let interval = setInterval(function() {
//     let a = new Date();
//     let h = a.getHours();
//     let m = a.getMinutes();
//     let s = a.getSeconds();
//     console.log(h, m, s);
//     document.querySelector(".clock").innerText = h +  ":" + m + ":" + s ;
// }, 1000);


// CÁC BƯỚC TẠO RA 1 ĐỒNG HỒ
//B1. Tạo ra 1 biến countDate bằng Date() để lưu trữ ngày giờ, methods getDate(), xác định được thời gian Unix 1/1/1970
let countDate = new Date("March 16, 2023 00:00:00").getTime();

// B2. Tạo 1 biến x để lưu trữ thời gian chạy ngược

let x = setInterval( function() {
// B3. Lấy thời gian hiện tai bằng cách sử dụng methods Date() và getDate()
let now = new Date().getTime();

// biến distance đại diện cho khoảng cách thời gian còn lại (trong đơn vị mili giây) giữa thời điểm hiện tại và thời điểm kết thúc đếm ngược được lưu trữ trong biến countDate
let distance = countDate - now;

// B4. Thực hiện tính toán thời gian hiển thị
//4.1 Tính toán days thời gian 1 ngày được xác định (24h * 60p * 60giay) (sử dụng distance để lấy phần dư )
// Chia khoảng cách cho miliseconds, sử dụng hàm Math.Floor để lấy số nguyên
let days = Math.floor(distance / (1000 * 60 * 60  * 24));
let hours = Math.floor(distance % (1000 * 60 * 60  * 24) / (60 * 60 * 1000));
let minutes = Math.floor(distance % (1000 * 60 * 60) / (60 * 1000));
let seconds = Math.floor(distance % (1000 * 60) / 1000);


// B5. Đưa thông tin lên trình duyệt dùng innerText
document.querySelector(".clock").innerText = days + " Ngay " + hours + " Gio " + minutes + " Phut " +  seconds + " Giay" ;

if(distance < 0) {
    clearInterval(x);
    document.querySelector(".clock").innerText = "Kết thúc";
}
}, 1000)


