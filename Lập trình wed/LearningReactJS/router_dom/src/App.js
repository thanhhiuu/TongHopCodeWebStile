import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import News from './Components/News';
import NewItem from './Components/NewItem';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<News/>} />
          <Route path='/newitem' element={<NewItem/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;

