// Problem No 1

// class myClass {
//     constructor(name) {
//         this._name = name;
//     }
//     fly() {
//         alert("You name ? " + this._name);
//     }
//     get name() {
//         return this._name;
//     }
//     set name(newName) {
//        this._name = newName;
//     }
// } 
// class childClass extends myClass {
//     childFly() {
//         console.log("This you is child !");
//     }
// }
// let a = new myClass("Thanh Hieu");
// a.fly();
// console.log(a.name);
// a.name = "Nhu";
// console.log(a.name);
// console.log(a instanceof myClass);
// let c = "Hieu";
// console.log(c instanceof myClass);


// let b = new childClass("Thanh Phone");
// b.childFly();
// b.fly();
// console.log(b.name);
// b.name = "Thi Minho";
// console.log(b.name);







//Problem No 2 
class Pelion {
    constructor(user) {
        this.user = user;
    }
    getUser() { // Methods return value of name property
        return this.user;
    }
    setUser(newUser) { // setUser() gán 1 đối số cho thuộc tính User (Ghi, sửa)
        newUser = newUser.trim(); // Trim() property giúp loại bỏ khoảng trắng dư
        if(newUser == '') {
            console.log("Must Have Values")
        }
        this.user = newUser;
    }
}


let c = new Pelion("aditClu");
console.log(c)


c.setUser("UserAdmin");
console.log(c.getUser())






// Problem No 3

// Using getter in an Object literal - Sử dụng get() theo đúng nghĩa đen 
let meeting = {
    attendees:[],
    add(attendees) {
        console.log(`${attendees}` + " Joined the meeting" );
        this.attendees.push(attendees);
        return this;
    }, 
    get laster() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }

}
meeting.add("Thanh Hieu").add("Van Thinh").add("Huynh Trong");
console.log(`The latest attendee is ${meeting.laster}.`)


// Summary - Bản tóm tắt

// Sử dụng các từ khóa get và set để xác định các getters và setters JavaScript cho một lớp hoặc một đối tượng.

// Từ khóa get liên kết một thuộc tính đối tượng với một phương thức sẽ được gọi khi thuộc tính đó được tra cứu.

// Từ khóa set liên kết một thuộc tính đối tượng với một phương thức sẽ được gọi khi thuộc tính đó được gán.


