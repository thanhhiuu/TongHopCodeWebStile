class PassWord {
    constructor() {
        console.log("To Welcome With HiuCuTe");
        this.pass = "";
    }
    genaratePassWord(len) {
        let chars = "abcdefkhglmnjklxyz";
        let numbers = "1234567890";
        let specal = "!@#$%^:{}<>?";
        if(len < 3) {
            console.log("Nhap so lon phai lon hon 3 nhap lai : ");
        }
        else {
            let j = 0;
            while(j < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)]
                this.pass += numbers[Math.floor(Math.random() * numbers.length)]
                this.pass += specal[Math.floor(Math.random() * specal.length)]
                j += 3
            }
            this.pass = this.pass.substr(0, len)
            return this.pass
        }
    }
} 
let p = new PassWord();
console.log(p.genaratePassWord(9));
