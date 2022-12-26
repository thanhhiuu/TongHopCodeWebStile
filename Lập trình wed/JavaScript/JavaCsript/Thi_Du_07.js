// Xử lý đối tượng
// 1. Tạo đối tượng 
var obj1 = {
    hoTen: 'Thanh Hieu',
    tuoi: 10,
    noiSinh: 'Binh Thuan'
};
console.log(obj1);
//2. Trường hợp tên thuộc tính có ký tự đặc biệt
var obj2 = {
    'ho-Ten': 'Thanh Hieu',
    tuoi: 10,
    'noi-Sinh': 'Binh Thuan'
};
console.log(obj2);
// 3. Trường hợp tên thuộc tính là giá trị của một biến thì tên biến phải đặt trong cặp ngoặc []:
var myEge = 'Tuoi';
var obj3 = {
    'ho-Ten': 'Thanh Hieu',
    [myEge]: 10,
    'noi-Sinh': 'Binh Thuan'
};
console.log(obj3);
// 4. Trường hợp tên thuộc tính là hàm
var obj4 = {
    hoTen: 'Hieu',
    tuoi: 19,
    xuatThongTin: function() {
        console.log(`Ho Ten: ${this.hoTen} </br> - Tuoi: ${this.tuoi}`);
    }
};
console.log(obj4);