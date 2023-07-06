
import { useState } from 'react';
import './App.css';
import Tank from './Components/Tank';

function App() {
  const [todeList, settodeList] = useState([]);

  const [text, setText] = useState("");
  const hanlValue = (event) => {
    setText(event.target.value) // Lấy giá trị khi người dùng nhập vào
  }
  const clickAdd = () => {
    if (text !== "") { // Điềuu kiện nếu điều kiện khác rỗng thì text thêm vào mảng todeList, đồng thời đặt chuỗi rỗng để xóa nội dung sau mỗi lần add
      settodeList([...todeList, text]);
      setText("");
    }
  }
  const deleteText = (posi) => { // là một hàm xử lý sự kiện onClick của nút "X" trong component Tank. 
                                 // Nó nhận một đối số posi (vị trí) và sử dụng splice để xóa phần tử tại vị trí posi trong mảng todeList.
    const newList = [...todeList];
    newList.splice(posi, 1);
    settodeList(newList);
  };
  return (
    <>
      <div className="App">
        <input type="text" onChange={hanlValue} />
        <button onClick={clickAdd}>Add</button>
        <div>
          {todeList.map((tank, index) => { // Sử dụng map để lặp qua các phần tử trong mảng
            return (
             <Tank index={index} tank={tank} deleteText={deleteText}/>
            );
          })}

        </div>
      </div>

    </>
  );
}

export default App;
