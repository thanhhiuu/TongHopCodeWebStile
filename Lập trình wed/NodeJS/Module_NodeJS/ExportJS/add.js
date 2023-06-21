const add = (diemToan, diemVan) => {
    return (diemToan + diemVan * 2) / 3
} 
const random = Math.floor((Math.random() * 6) + 1);
module.exports = {
    add: add,
    random: random
};