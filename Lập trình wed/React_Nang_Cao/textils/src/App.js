import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alter';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);  

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const removeBgMode = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }
  const toggleMode = (lst)=>{    
    removeBgMode();
    document.body.classList.add('bg-' + lst);

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Đã bật chế độ tối", "danger");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Đã bật chế độ sáng", "danger");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about" element={<About mode={mode} />}/>
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Hãy nhập vào và chuyển đổi nó" mode={mode}/>}/>
    </Routes>
    </div>
    </Router>
    </> 
  );
}

export default App;