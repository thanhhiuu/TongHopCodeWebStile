import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [prev, setPrev] = useState(false);
  return (
    <div className="App">
     <button onClick={() => {setPrev((prev) => !prev)}}>{prev ? "Hide" : "show"}</button>
     {prev && <h1>Hé lô mấy cưng</h1>}
    </div>
  );
}

export default App;
