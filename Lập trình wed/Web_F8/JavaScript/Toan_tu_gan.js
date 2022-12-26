/*
    Toán Tử Gán

    Toán Tử         Ví dụ           Tương dương
    =               x = y           x = y 
    +=              x += y          x = x + y
    -=              x -= y          x = x - y
    *=              x *= y          x = x * y
    /=              x /= y          x = x / y
    **=             x **= y         x = x ** y

*/

// var a = 1; 

// a += 2;
// a -= 2;
// a *= 2;
// a /= 2;
// a **= 2;


// console.log(a);


// Toán tử ++ --
// Prefix & Postfix => Tiền tố & Hậu tố
// => sử dụng trước toán hạng là Tiền tố (++n), sự dụng sau toán hạng là hậu tố (n++)

// Tiền tố
var a = 5;

++a; // 6

console.log(a); // 6


// Hậu tố
var a = 5;

a++; // 5

console.log(a); // 6


// Ví dụ:

var number = 6;

var output = number++ + --number;

// number++ là hậu tố tức nó sẽ là 6 và sau khi thi hành xong thì
// number-- đã có giá trị chính thức của biến number++ là = 7 và nó thi hành biến --number là tiền tố thì là lấy 7 - 1 = 6
// Kết quả 6 + 6 = 12

console.log('output :', output);