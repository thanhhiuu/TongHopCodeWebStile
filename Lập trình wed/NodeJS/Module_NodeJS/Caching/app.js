const superHero = require("./super-hero");

const newHero = new superHero("Superman");
console.log(newHero.getName());
const newSuper = new superHero("Batman");
console.log(newSuper.getName());
newSuper.setName("Slider");
console.log(newSuper.getName());


// Summary
// Module caching là một chức năng giúp người dùng lưu trữ là tái sử dụng một cách hiệu quả các Module đã tải trước đó mà khong phải tạo ra một module mới
// Module Caching hoạt động theo nguyên tắc key-value, trong đó key là đường dẫn tuyệt đối của file module và value là module đã được tải và lưu trữ trong cache