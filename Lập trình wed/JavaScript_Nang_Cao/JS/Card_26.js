class shopUK { // Tạo 1 class chưa các object để thực hiện tạo đối tượng
    constructor(name) { 
        this.name = name;
        console.log(`Xin chao ${this.name}`)
    }
    login() {
        console.log("Ban dang dang nhap");
    }
    logOut() {
        console.log("Ban se dang xuat");
    }
    TimeLogOut(time) {
        console.log(`Ban da dang xuat duoc ${time} giay chu y !`);
    } 
}


class User extends shopUK { // extends giúp kết nối methods giữa con và cha và con có thể thực hiện được các thuộc tính của cha
    constructor(name) {
        super(name);
        console.log("Chào mừng bạn đến với shop");
    }
    userNames(name) {
        console.log(`Người dùng đang ${name} mua hàng`)
    }
    Buys() {
        console.log(`Người dùng đã mua thành công ! `)
    }
    TimeLogOut(time) {
        super.TimeLogOut(5000); // Property Super giúp sử dụng hàm cha một các hiệu quả hơn (Ghi đè) cha thay đổi con cũng thay đổi theo
        console.log("Thời gian đã được làm mới");
    }
}


let huy = new User("Thành Hiếu");
huy.login();
huy.userNames('Thành Hiếu');
huy.Buys();
huy.logOut();
huy.TimeLogOut(1000);