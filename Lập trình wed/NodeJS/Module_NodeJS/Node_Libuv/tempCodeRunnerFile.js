for(let i  =0; i < kq; i++) {
    crypto.pbkdf2("password", "salt", 100, 512, "sha512", () => {
        console.log("Thời gian chạy: " + (i + 1), Date.now() - start);
    })
} 
