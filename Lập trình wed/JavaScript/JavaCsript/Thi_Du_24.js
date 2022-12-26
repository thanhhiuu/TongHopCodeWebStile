// Cách 1 Thiết lập css inline
var inlineElememt = document.querySelector('.box');
// inlineElememt.style.width = '100px';
// inlineElememt.style.height = '100px';
// inlineElememt.style.backgroundColor = 'red';
// Thiết lập css cách 2
Object.assign(inlineElememt.style,{
   width : '100px',
    height: '100px',
    backgroundColor: 'blue'
});