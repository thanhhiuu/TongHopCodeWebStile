//1. Cách tạo số

// Cách 1:
// var n = 12;
// var m = 12.5;
// console.log(typeof n);
// console.log(typeof m);
// // Cách 2: 
// var n1 = new Number(12);
// console.log(typeof n1);

// //2. Kiểm tra giá trị là số
// var x = 12 / 'abc';
// console.log(x);
// console.log(typeof x); // Mặc dù x có giá trị là NaN nhưng x vấn có kiểu là number
// console.log(isNaN(x)); // True => x có giá trị là NaN
// console.log(isNaN(n));

// Hàm toString => chuyển số thành chuỗi
// var n2 = 15;
// console.log(typeof n2);
// console.log(typeof n2.toString);

// Hàm toFixed => Làm tròn số và trả về chuỗi
// var n3 = 12.434;
// console.log(n3.toFixed(0));
// console.log(n3.toFixed(1));

// Chuyển chuỗi thành số

// Chuyển chuỗi thành số nguyên
// var n4 = '12345';
// console.log(typeof parseInt(n4));
// console.log(typeof Number(n4));

// // Chuyển chuỗi thành số thực
// var n5 = '123.45';
// console.log(typeof parseFloat(n5));
// console.log(typeof Number(n5));

// Chuyển number sang string
var myNumber = 128;
console.log(myNumber.toString(16));
console.log(myNumber.toString(8));
console.log(myNumber.toString(2));


/// Hàm xử lý number 
var boolan_true = true;
var boolan_false = false;
var string_str = '10Nguyen Thanh Hieu';
var string_number = '100';
var data = new Date();

//* Typeof
// console.log(typeof boolan_true);
// console.log(typeof boolan_false);
// console.log(typeof string_str);
// console.log(typeof string_number);
// console.log(typeof data);

//* Number
// console.log( Number(boolan_true));
// console.log( Number(boolan_false));
// console.log( Number(string_str ));
// console.log( string_number);
// console.log( data);

//*  parseInt() => Hàm cục bộ

    // console.log(parseInt(boolan_true));
    // console.log(parseInt(boolan_false));
    // console.log(parseInt(string_str));
    // console.log(parseInt(string_number));


//* parseFloat()
    console.log(parseFloat(boolan_true));    
    console.log(parseFloat(boolan_false));    
    console.log(parseFloat(string_str));    
    console.log(parseFloat(string_number));    
    console.log(parseFloat(data));    
//* toPrecision(n)

    // var x = 2.345;

    // console.log(x.toPrecision());
    // console.log(x.toPrecision(2));
    // console.log(x.toPrecision(8));
    // console.log(x.toPrecision(10));


//* valueOf()
//     var n = 100;
//     console.log(n.valueOf());
//     console.log((1000 + 1000).valueOf());    