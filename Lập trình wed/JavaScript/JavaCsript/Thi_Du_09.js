// Object constructor
// function SinhVien (hoTen, tuoi) {
//     this.hoTen = hoTen;
//     this.tuoi = tuoi;
//     this.noiSinh = 'Ha Noi';
// };
// Tạo đối tượng
// var sv = new SinhVien('Thanh Hieu', 19);
// console.log(sv);
// var sv1 = new SinhVien('Hieu', 20);
// console.log(sv1);
// Bổ sung thuộc tính
// sv1.noiSinh = 'Ha Noi';
// console.log(sv1);
// console.log(sv);

// Object Prototype
// function HocSinh(hoTen, tuoi) {
//     this.hoTen = hoTen;
//     this.tuoi = tuoi;
// };
// var hs = new HocSinh ('Thanh Hieu', 20);
// console.log(hs);

function HocSinh(hoTen, tuoi) {
    this.hoTen = hoTen;
    this.tuoi = tuoi;
};
HocSinh.prototype.hocBong = 120000;
var hs1 = new HocSinh ('Thanh Hieu', 20);
console.log(hs1.hocBong);

HocSinh.prototype.xuatThongTin = function() {
    console.log(`Ho Ten: ${this.hoTen} - ${this.tuoi}`);
}
hs1.xuatThongTin();

var hs2 = new HocSinh('Hieu', 19);
console.log(hs2.hocBong);
hs2.xuatThongTin();