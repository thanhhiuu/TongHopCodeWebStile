var Divelement = document.querySelectorAll('div'); // Lấy thông tin từ thẻ div
console.log(Divelement); // Xem ở chế độ log
Divelement.forEach(function name(params) {  // Dùng vòng lập foreach để quét qua các thẻ div và thêm vào class mình muốn thêm,
    params.classList.add('box');
}) 