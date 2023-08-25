

const eventEmit = require("node:events");

const usingEvent = new eventEmit();

usingEvent.on("Mua pizza", (size, topping) => {
    console.log(`Okey !, pizza cua ban co size ${size} va ${topping}`);
})

 usingEvent.on(["Hoa don"], (ten, size, topping) => { // on đối tượng sự kiện
    // Khi sự kiện ["Hoa don"] được chạy và bộ lắng nghe [emit] được kích hoạt thì dòng lệnh sau được thực thi
    console.log(`Thong tin hoa don :\nLoai bánh: ${ten}, \nSize: ${size}, \nThem topping: ${topping} `)
 })

console.log('Ban dang mua hang');
usingEvent.emit("Mua pizza", "30", "fullTopping"); // emit lăng nghe bộ sự kiện on
console.log("\n");
usingEvent.emit("Hoa don", "Pizza", "30", "fullTopping");