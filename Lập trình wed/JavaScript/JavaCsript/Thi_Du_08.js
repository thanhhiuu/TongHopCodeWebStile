//Truy xuất thuộc tính đối tượng
var myEge = 'tuoi';
var obj1 = {
    hoTen: 'Thanh Hieu',
    [myEge]: 20,
    'noi-Sinh': 'Long An'
};
console.log(obj1.hoTen);
console.log(obj1['noi-Sinh']);
console.log(obj1[myEge]);
console.log(obj1.diChi);

// Thêm thuộc tính sua khi tạo đối tượng
//1. Cách 1:
obj1.diChi = 'Ha Noi';
console.log(obj1);
//2. Cách 2:
obj1['hocBong'] = 120000;
console.log(obj1);