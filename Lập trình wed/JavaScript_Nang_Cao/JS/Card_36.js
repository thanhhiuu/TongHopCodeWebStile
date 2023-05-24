const sayHello = (name, getting) => {
    console.log(getting + " " + name)
}
sayHello("Thanh Hieu", "Chao buoi sang")





const x = {
    name: "Thanh Hieu",
    age: 21,
    Adress: "Binh thuan",
    show: function() {
        // let that = this
        // setTimeout(function()  {
        //     console.log(`Xin chao ${that.name} ban dang song o ${that.Adress}` )
        // }, 2000)
        setTimeout(() =>  {
            console.log(`Xin chao ${this.name} ban dang song o ${this.Adress}` )
        }, 2000)
    }
}
x.show()




// Hàm mũi tên JavaScript với nhiều tham số
let add = [2, 3, 4, 5];
// Xếp theo thứ tự giảm dần
add.sort((a, b) => {
    return b - a;
}) // Thay vì sử dụng function() như bình thường thì ta sử dụng hàm mũi tên
console.log(add);


// Hàm mũi tên JavaScript với một tham số duy nhất
let names = ["Hieu", "Truong", "Nhu"];
let people = names.map(name => name.length);
people.sort((a, b) => {
    return b - a;
});
console.log(people)


// Hàm mũi tên JavaScript không có tham số

let occ = () => {console.log(window.document)};
occ();

// Nếu bạn sử dụng một biểu thức trong phần thân của hàm mũi tên, bạn không cần sử dụng dấu ngoặc nhọn.
let clu = x => {console.log(x + x)}
clu(3);




// Hàm mũi tên JavaScript và đối tượng theo nghĩa đen
let color1 = document.querySelector(".mausac");
color1 = function(color) {
    return {value: color}
};
let background = color1('Red')
console.log(background.value)