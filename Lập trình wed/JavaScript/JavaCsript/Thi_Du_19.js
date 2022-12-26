// Trước khi tham chiếu đến Attribute node hay text node => tham chiếu đến Element node chứa các node
var headingElement = document.querySelector('h2');
console.log(headingElement);

// Thêm các thuộc tính hợp lệ
//  headingElement.title = 'heading 2';
// headingElement.id = 'head 2';
// headingElement.className = 'heddi2 ';
// Thêm các thuộc tính bất kỳ (Bao gồm các thuộc tính hợp lệ và các thuộc tính tự đặt)
headingElement.setAttribute('class', 'head 2');
// // headingElement.setAttribute('href', '#');
// headingElement.setAttribute('data-1', 'heeding 2');

// Lấy giá trị thuộc tính
console.log(headingElement.getAttribute('class'));
console.log(headingElement.title);