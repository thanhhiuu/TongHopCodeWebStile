import React, { useState } from 'react';

import './App.css';
import News from './Components/News';
export const Countcontent = React.createContext();



function App() {
  const [count, setCount] = useState('Quynh Hieu');
  

  return (
    <Countcontent.Provider value={{count,setCount}}>
      <div className="App">
        <h1>{count}</h1>
        <button onClick={() => {setCount("Thanh Hieu")}}>hhhh</button>
        <br />
        <News/>
      </div>
    </Countcontent.Provider>
    
  );
}
export default App;