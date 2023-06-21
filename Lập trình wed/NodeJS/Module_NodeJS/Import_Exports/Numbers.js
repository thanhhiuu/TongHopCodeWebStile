const cong = (a, b) => {
    return a + b;
}

const tru = (a, b) => {
    return a - b;
}


// Cách 1:
// module.exports = add;



// Cách 2:
module.exports = {
    cong,
    tru,
};