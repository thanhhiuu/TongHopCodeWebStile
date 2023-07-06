
import './App.css';
import Count from './Components/Count+-';
import Hidden from './Components/Hidden';
import Main from './Components/Main';
import TextWin from './Components/TextWin';

function App() {
  return (
    <div className="App">
      <Main />
      <TextWin />
      <Hidden/>
      <Count/>
    </div>
  );
}

export default App;
