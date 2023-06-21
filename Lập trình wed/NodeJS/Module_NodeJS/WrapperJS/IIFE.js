// Hàm chức năng gọi liền IIFE

(function(require, exports, module, __dirname, __filename) {
    let banManHero = "I am Batman";
    console.log(banManHero);
})();

(function(require, exports, module, __dirname, __filename) {
    let superMan = "I am superMan";
    console.log(superMan);
})();