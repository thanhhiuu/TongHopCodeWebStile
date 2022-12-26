/* Các kiểu dữ liệu */
// var b = false;
// var kq = 0 ? "Rong" : "Bang 0";
// var kq1 = '' ? "Rong" : "Bang khong";
// var kq2 = undefined ? "Xac dinh" : "Khong xac dinh";
// var kq3 = null ? "khac 0" : "Bang 0";
// var kq4 = NaN ? "dung" : "Sai";
// document.write(kq4);

var n = 4;
var m = 4;
var b = n == m ? "Dung" : "Sai";
// document.write(b);

// Cách 1: 
var h = 4;
var j = "4";
var k = h == j ? "Dung" : "Sai";
// document.write(k);
// Cách 2: 
var h = 4;
var j = "4";
var l = h === j ? "Dung" : "Sai";
document.write(l);