import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div id="display">
          <div className="equation">5 x 2</div>
          <div className="result">10</div>
        </div>
        <div className="btns">
          <div className="row first-row">
            <button id="clear">AC</button>
            <button id="divide">÷</button>
            <button id="multiply">X</button>
          </div>
          <div className="row second-row">
            <button id="seven">7</button>
            <button id="eight">8</button>
            <button id="nine">9</button>
            <button id="subtract">-</button>
          </div>
          <div className="row third-row">
            <button id="four">4</button>
            <button id="five">5</button>
            <button id="six">6</button>
            <button id="add">+</button>
          </div>
          <div className="row fourth-row">
            <button id="one">1</button>
            <button id="two">2</button>
            <button id="three">3</button>
          </div>
          <div className="row fifth-row">
            <button id="zero">0</button>
            <button id="decimal">.</button>
            <button id="equals">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
