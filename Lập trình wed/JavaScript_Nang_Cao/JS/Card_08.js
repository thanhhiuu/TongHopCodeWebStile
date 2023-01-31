/*
    Javascript Strings Methods
*/
let name = "Thanh Hieu";
// console.log(name.length);

// console.log(name.toUpperCase()); // Viet bang chu in hoa
// console.log(name.toLowerCase()); // Viet bang chu thuong
// console.log(name.slice(0, 9)); 
// console.log(name.slice(2)); // Cat phan tu 
// console.log(name.replace("Thanh", "Nguyen")); // Thay the phan tu bang phan tu da cho


// let friend = "Van Thinh";
// console.log(name.concat("is a friend of ", friend, "!")); // Noi chuoi voi nhau

// let friends = "            Van Truong            ";
// console.log(friends.trim()); // Loai bop tat ca khoang trong khong can thiet
let tr = "Thanh hieu";
for(i = 0; i < tr.length; ) {
    console.log(tr[i] + " Phan tu thu ", i++);
}
