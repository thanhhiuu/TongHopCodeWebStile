function test() {
    let name = "Quynh Như";
    function displayName() {
        // name = "Van Thinh";
        console.log("My name is " + name);
    }
    name = "Thanh Hieeu "
    return displayName
}
let c = test();
c()

// Question No 1

function resetPlay() {
    const x = () => {
        let a = 1
        console.log(a)
        const y = () => {
            // let a = 2
            console.log(a)
            const z = () => {
                // let a = 3
                console.log(a)
            }
            z()
        }
        a = 2000
        y()
    }
    return x

}
let a = resetPlay();
a()


// More JavaScript Closure example



function greeting(message) { // Hàm greeting nhận đối số là message và trả vè 1 hàm có đối số duy nhất là name 
    return function(name) {
        return message + " " + name // Trả về kết quả của sự kết hợp của message và name
    }
}
// Hàm greeting() giống như 1 hàm chức năng tạo hai hàm sayHi() và sayHello() và có câu thông báo như nhau là xin chào 
let sayHi = greeting("Hello"); 
let sayHello = greeting("Hi");
// hàm sayHi() và sayHello() là thông báo đóng. Chúng chia sẽ 1 thân hàm nhưng lưu trữ các phạm vi khác nhau

console.log(sayHello("Thanh Hieu")); 
console.log(sayHi("Quynh Nhu"));



// Đóng JavaScript trong một vòng lặp 

for(let index = 1; index <= 3; index++) {
   setTimeout(function () {
        console.log("After " + index + " second(s) " + index)
    }, index * 5000);
}


// Sử dụng giải pháp IIFE
for(var clu = 1; clu <= 4; clu++) {
    (function(clu) {
        setTimeout(function() {
        console.log("After " + clu + " second(s) " + clu)
        }, clu * 1000)
    })(clu)
}




// Bản tóm tắt

// Phạm vi từ vựng mô tả cách công cụ JavaScript sử dụng vị trí của biến trong mã để xác định vị trí của biến đó.

// Một bao đóng là sự kết hợp của một hàm và khả năng ghi nhớ các biến ở phạm vi bên ngoài của hàm đó.