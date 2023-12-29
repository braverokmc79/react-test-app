import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  hello();

  function hello() {

  }

  const [counter, setCounter] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>

        <div>
          <button data-testid="minus-button"
            disabled={buttonDisabled}
            onClick={() => setCounter((count) => count - 1)}
          >-</button>

          <button data-testid="plus-button"
            disabled={buttonDisabled}
            onClick={() => setCounter((count) => count + 1)}
          >+</button>


          <div>
            <button
              style={{ backgroundColor: "blue" }}
              onClick={() => setButtonDisabled((prev) => !prev)}
              data-testid="on/off-button">on/off</button>
          </div>



        </div>
      </header>
    </div>
  );
}

export default App;
