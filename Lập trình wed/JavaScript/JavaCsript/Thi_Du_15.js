var formNodes = document.forms; // Trả về HTML Collection
console.log(formNodes); // Xuất ra tất cả phần tử có trong form
console.log(formNodes[1]); // Truy xuất vào phần tử cần tim (Chỉ mục)
console.log(formNodes['form-1']); // Truy xuất vào phần tử cần tìm bằng mã key (id, class)
console.log(formNodes.textForm); // Truy xuất với key trùng với id của form