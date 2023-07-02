
import './App.css';
import Food from './Components/Food'

function App() {
  const User = (props) => { // props là một đối tượng chứa các thuộc tính và giá trị tương ứng được truyền vào component cha
    return (
      <>
        <h1>{props.name}</h1> 
        <h1>{props.age}</h1>
        <h1>{props.cty}</h1>
      </>
    )
  };
  return (
    <div className="App">      
      <User name={"NguyenThanhHieu"} age={24} cty={"FPT  DEVELOPMENT"}/>  {/*đây cũng là 1 Component con */}
      <Food  nameFood={"Cá rô chiên xù"} price={200} sumMenu={1000} />  {/*đây cũng là 1 Component con */}
    </div>
  );
}

export default App;

// JSX giúp chúng ta sử dụng code trong cặp thẻ HTML giúp code dễ hiểu  và dễ  đọc hơn 
// Tổng kết lại, đoạn mã trên định nghĩa component App là component chính của ứng dụng.
//  Nó hiển thị các component con User và Food, truyền vào các giá trị props để hiển thị dữ liệu tương ứng lên giao diện người dùng.