// Exercise - 1: Guess the number

// Tạo con số ngẫu nhiên từ 1 đến 100
let number = Math.floor(Math.random() * 100);
// console.log(number);
// Theo dõi lần đếm

let numberofGuess = 0;

// Bắt đầu game
let guess = parseInt(prompt("Bạn hãy nhập số từ 1 - 100 để đoán"));

// Sử dụng vong lặp While để kiểm tra lỗi sai

while (guess !== number) {
    numberofGuess += 1;
    if(guess > number) {
        alert("Bạn nhập số quá cao ! Thử lại");
    }
    else {
        alert("Bạn nhấp số quá nhỏ !");
    }
    guess = parseInt(prompt("Bạn hãy nhập lại con số từ 1 - 100 để đoán"));
    
}

// Xuất kết quả đoán 

alert("Kết quả đoán của bạn là " + number );
alert("Bạn đã nhập lần thứ " + numberofGuess);
