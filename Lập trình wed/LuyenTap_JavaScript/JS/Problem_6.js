class Calculator {
    constructor(calculatorCurrent, calculatorPrevious) {
        this.calculatorCurrent = calculatorCurrent;
        this.calculatorPrevious = calculatorPrevious;
        this.clear();
    }
    clear() {
        this.Current = "";
        this.Previous = "";
        this.operation = "";
    }
    delete() {
        this.Current = this.Current.toString().slice(0, -1); // Chuyển đôi đồng hiện tại thành kiểu chuỗi và dùng property slice để bắt đầu từ vị trí thứ 0 cắt dòng cuối cùng
    }
    appendNumber(number) {
        if(number === '.' && this.Current.includes('.')) return;
        this.Current = this.Current.toString() + number.toString();


    }
    chooseOperation(choose) { 
        if(this.Current === "") return;
        if(this.Previous !== "") {
            this.computer();
        }
        this.operation = choose;
        this.Previous = this.Current;
        this.Current = '';
    }
    computer() {
        let computerSave // Nơi lưu các thuật toán được làm
        // Lấy ra các thông tin của các nút tính toán
        let prev = parseFloat(this.Previous);
        let curr = parseFloat(this.Current);
        if(isNaN(prev) || isNaN(curr)) return; // Chuyển đổi giá trị đầu vào thành 1 có số với property IsNaN
        
        // Xử lý chức năng của các phím được chọn 
        // Sử dụng swicht case để tính toán
        switch(this.operation){
            case '+': 
            computerSave = prev + curr;
            break;
            case '-': 
            computerSave = prev - curr;
            break;
            case '*': 
            computerSave = prev * curr;
            break;
            case '/': 
            computerSave = prev / curr;
            break;
            default:
                return
        }
        this.Current = computerSave;
        this.operation = undefined;
        this.Previous = "";
    }
    Update() {
        this.calculatorCurrent.innerText = this.Current;
        if(this.operation != null) {
            this.calculatorPrevious.innerText = 
            `${this.Previous} ${this.operation}`           
        }
        
    }
}



// Lấy ra các thẻ cần js
let numBerButton = document.querySelectorAll('[data-number]');
let operationButton = document.querySelectorAll('[data-operation]');
let calculatorPrevious = document.querySelector('[data-previous]');
let calculatorCurrent = document.querySelector('[data-current]');
let allClear = document.querySelector('[data-all-clear]');
let allDelete = document.querySelector('[data-delete]');
let allEquals = document.querySelector('[data-equals]');


// lưu các nút xuất ra màng hình vào hàm calculator
const calculator = new Calculator(calculatorCurrent, calculatorPrevious);

// Sự kiện của các nút button được lấy ra trước đó
numBerButton.forEach(button => {
    button.addEventListener("click", () => { // Khi có sự kiện click vào nút button thì các sự kiện cho trước trên class calculator thực thi
        calculator.appendNumber(button.innerText); 
        calculator.Update();
    })
})

// Sự kiện của các nút button được lấy ra trước đó
operationButton.forEach(button => {
    button.addEventListener('click', () => { // Sự kiện click
        calculator.chooseOperation(button.innerText);  // Chuyển đổi nút click thành HTML và hiện lên nút được lấy ra trên trình duyệt
        calculator.Update(); // Sự kiện Update() được thực hiện khi click
    })
})

// Sự kiện khi click vào nút =
allEquals.addEventListener("click", () => { // Chuyển đổi nút click thành HTML và hiện lên nút được lấy ra trên trình duyệt
        calculator.computer(); // Khi click sẽ thực thi sự kiện computer được thực hiện trên class calculator
        calculator.Update();
    })

// Sự kiện khi click vào nút AC (xóa tất cả)
allClear.addEventListener("click", () => {
    calculator.clear();
    calculator.Update();
})


// Sự kiện khi click vào nút DEL (Xóa từng items)

allDelete.addEventListener("click", () => {
    calculator.delete();
    calculator.Update();
})

