// Question 1: Tạo 1 lớp Javascript có tên phức tạp, Lớp phức sẽ đại diện cho số phức 
// => Số phức là gì ? ==> Trong số phức có phần thực và phần ảo, phần thực và phần ảo khác nhau trong 1 số phức.
// Số phức được biểu diễn dưới dạng a + ib 

// class Complex {
//     constructor( ) {
//         this.real = real
//         this.fake = fake
//     }
// }

// let a = new Complex(6, 4);
// let b = new Complex(6, 2);



// Question 2: Viết công thức cộng hai số phức ở hạng tử trên => a + bi


class Complex {
    constructor(real, fake) {
        this.real = real
        this.fake = fake
    }
    add(number) { 
        this.real = this.real + number.real;
        this.fake = this.fake + number.fake;
    }
}


let a = new Complex(6, 4);
let b = new Complex(6, 2);
a.add(b);
console.log(`${a.real} + ${a.fake}i`); // In được => 12 + 6i 


// Question 3: Tạo lớp sinh viên từ lớp người ghi đè 1 methods và xem các thay đổi



class Human {
    constructor(name, drink) {
        this.name = name;
        this.drink = drink;
    }
    swim() {
        console.log(this.name + " Đang tập bơi");
    }
}


class Student extends Human { // Student đến từ Human
    swim() {
        console.log(this.name + " Student Đang tập bơi");
    }
}

let o = new Student("ThanhHieu");
o.swim();
console.log(o instanceof Human); //True là vì nó của con người (Nhưng chúng ta thừa hưởng học sinh từ con người)


// Question 4: Sử dụng getter và setter để đặt và lấy phần thực và phần ảo của số phức


class Clue {
    constructor(real, fake) {
        this.real = real
        this.fake = fake
    }
    add(number) { 
        this.real = this.real + number.real;
        this.fake = this.fake + number.fake;
    }
    get real() {
        return this._real;
    }
    get fake() {
        return this._fake;
    }
    set real(newReal) {
        this._real = newReal;
    }
    set fake(newFake) {
        this._fake = newFake;
    }
}


let c = new Clue(6, 4);
console.log(c.real, c.fake);
c.real  = 10;
c.fake = 10;
let d = new Clue(6, 2);
c.add(d);
console.log(`${c.real} + ${c.fake}i`); // In được => 12 + 6i 



