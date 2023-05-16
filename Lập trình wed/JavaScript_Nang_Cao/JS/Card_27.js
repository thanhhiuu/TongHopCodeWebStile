class person {
    constructor(name) {
        this.name = person.capitalize(name);
    }
    run() {
        alert(`Bạn ${this.name} đang chạy`);
    }
    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length) // Trả về khi có một giá trị được khởi tạo và từ đầu tiên của giá trị đó viết hoa
    }
}  


// let j = new person("hieu");
// j.run();

// class myClass {
//     constructor(age) {
//         this.age = age;
//     }
//     search() {
//         alert(`Bạn đã được ${this.age} rồi !`);
//     }
//     static createElement(cku) {
//         let name = cku == "12" ? "50" : "32";
//         return new myClass(name);
//     }
// }
// let a = new myClass(12);
// a.search();



// class clu {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	getName() {
// 		return this.name;
// 	}
// 	static createAnonymous(gender) {
// 		let name = gender == "male" ? "John Doe" : "Jane Doe";
// 		return new clu(name);
// 	}
// }

// let anonymous = clu.createAnonymous("male");
// Các phương thức tĩnh JavaScript được chia sẻ giữa các phiên bản của một lớp. Do đó, họ bị ràng buộc với lớp học.

// Gọi các phương thức tĩnh thông qua tên lớp, không phải các thể hiện của lớp đó.

// Sử dụng className.staticMethodName() hoặc this.constructor.staticMethodName() để gọi một phương thức tĩnh trong một hàm tạo lớp hoặc một phương thức thể hiện.