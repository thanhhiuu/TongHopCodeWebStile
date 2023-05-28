
import './App.css';
let name =  "<b>Thanh Hieu</b>"
function App() {
  return (
    <>
    <div className="useName">
          Hello {name} {/* tất cả những thứ bỏ trong ngoặc nhọn đều là javascript */}
    </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div className="container-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus fuga hic eligendi eius aspernatur incidunt ipsam tempora tenetur explicabo reiciendis, minus id praesentium facilis qui atque obcaecati, eveniet delectus esse.
      </div>
    </>
  );
}

export default App;
