import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import SummaryPage from './pages/SummaryPage/SummaryPage';

function App() {



  const [counter, setCounter] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
       
        <div>         
          <SummaryPage   />

        </div>
      </header>
    </div>
  );
}

export default App;
