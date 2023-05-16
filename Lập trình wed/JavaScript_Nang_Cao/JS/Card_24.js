class myClacks {
    constructor(nameable, anademsClu, address) {
        console.log("Bạn đã đặt vé tàu chưa ? " + nameable);
        this.name = nameable;
        this.anode = anademsClu;
        this.address = address;
    }
    review() {
        alert(" Thông tin :" + this.name + " Nơi đến " + this.address + " Mã vé : " + this.anode)
    }
    submit() {
        alert(this.name +  " Bạn đã đặt bé thành công với mã tàu là : " + this.anode +  " ! "); 
    }
    cancel() {
        alert(this.name + " Bạn đã hủy vé thành công với mã tàu là : " + this.anode + " ! ");
        this.anode = 0;
    }
} 


// Tạo đói tượng và đọc dữ liệu vào
let hieu = new myClacks("Thanh Hieu", 112233, "Hàm tân bình thuận");
hieu.review();
hieu.submit();
hieu.cancel();
hieu.review();



let thinh = new myClacks("Van Thinh", 445566, "Đồng Nai");
thinh.review();
thinh.submit();
thinh.cancel();
hieu.review();






// Problem No 2 
class classProfile {
    constructor(name, cul) {
        this.name = name;
        this.cul = cul;
    }
    getFullName() {
    console.log( "Tên " + this.name + " Dài  " + this.cul + " cm !");
    }
}


let manh = new classProfile("Mạnh", 20);
console.log(manh.getFullName());