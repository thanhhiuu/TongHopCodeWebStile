class myClass {
    submit() {
        alert(this.name + " : Ban muon di tau lua " + " with number " + this.number);
    };
    cancel() {
        alert(this.name + " : Ban khong muon di tau lua " + " with number " + this.number);
    }
    read(namegive, number) {
        this.name = namegive;
        this.number = number;
    }
} 
// Object No 1
let hieu = new myClass();
let hieu1 = new myClass();
hieu.read("Thanh hieu", 12345);
hieu1.read("Thanh hieu1", 09876);
hieu.submit();
hieu1.submit();
hieu1.cancel();


// Object No 2
let thinh = new myClass();
let thinh1 = new myClass();
thinh.read("Van Thinh", 54321);
thinh1.read("Van Thinh1", 67890);
thinh.submit();
thinh1.submit();
thinh1.cancel();

