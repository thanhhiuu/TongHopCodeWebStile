// Sử dụng module crypto giúp mã hóa và tạo ra 1 chuỗi băm
const crypto = require("crypto");

const kq = 100;

// Ghi lại thời điểm bắt đầu của quá trì sdo thời gian qua các lần gọi hàm của pbkdf2
const start = Date.now();

for(let i  =0; i < kq; i++) {
    crypto.pbkdf2("password", "salt", 100, 512, "sha512", () => {
        console.log("Thời gian chạy: " + (i + 1), Date.now() - start);
    })
} 

// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

// console.log("Bị chặn: ", Date.now() - start);
