// Hoạt động không đồng bộ
// Ví Dụ setTimout (có nghĩa hàm được khỏi chạy nhưng sau 1 thời gian nhất định nó được thực thi);
/*
console.log("Start");
function khoiTao () {
    setTimeout(function() {
        console.log("Chao anh bạn");
    }, 3000)
}
khoiTao();
console.log("End");


// Hoạt động đồng bộ
// Ví dụ (Nó được thực thi khi khởi chạy không bị trì hoãn lại và hoạt động từng cái 1)
let a = prompt("Nhập họ tên");
let b = prompt("Nhập tuổi");
let c = prompt("Nhập màu thích");
console.log("Information " + a + " is " + b + " years old and has like " + c);
*/

// Callbacks
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    document.querySelector(".callback").innerHTML = src;
    script.onload = function() {
        console.log("Đường link của bạn chuyển vào " + src);
        callback( null, src);
    }
    script.onerror = function() {
        console.log("Đường link của bạn chuyển vào không đúng " + src);
        callback(new Error("Đường link sai" + src));
    }
    
}


const hello = (error, src) => {
    if(error) {
        console.log("SRC Này có lỗi " + src);
    }
    else {
    let a = prompt("Nhập họ tên");
    let b = prompt("Nhập tuổi");
    let c = prompt("Nhập màu thích");
    console.log("Information " + a + " is " + b + " years old and has like " + c + src);
    }
}
loadScript("https://chat.opessnai.com/chat", hello);


