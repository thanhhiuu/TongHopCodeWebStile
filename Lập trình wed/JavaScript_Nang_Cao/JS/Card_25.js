class person {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    run() {
        console.log("Nhân vật " + this.name + " bắt đầu chạy");
    }
    skill() {
        console.log(`${this.name} đã sự dụng kĩ năng bắn tia laze`);
    }
}
class items extends person  {
    
    heal() {
        console.log(`${this.name} đã nhặt vật phẩm hồi máu`);
        return super.push
    }
    successfulHeal() {
        console.log(`${this.name} đang trong trạng thái hồi máu`);
    }
}
let thanh = new items("Văn thịnh", "Blue");
let hieu = new person("Thành Hiếu", "red");

thanh.heal();
thanh.run();
hieu.skill();
// hieu.heal(); // Lỗi do không phải trong class items
