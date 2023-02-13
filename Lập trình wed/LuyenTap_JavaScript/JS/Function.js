// Thực hành với function
function Persion (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    
    this.getFullName  = function () {
        return  this.firstName + " " + this.lastName;
    }
}
let persion1 = new Persion("Thanh Hieu", "Van Thinh");
console.log(persion1.getFullName());
// let persion2 = new Persion("Thanh Hiu", "Van Thi");
// console.log(persion1, persion2);


function Error1 (tv, vt) {
    if(!new.target) { // giup kiem tra du lieu sai
        console.log("Bạn vui lòng nhập dữ liệu !");
    }
    this.tv = tv;
    this.vt = vt;
}
let error1v= Error1('THANH HIEU', 'VAN THINH');
console.log(error1v);