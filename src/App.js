import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0);
  const [isEqualPressed, setIsEqualPressed] = useState(false);

  const keydownHandler = (e) => {
    if (isEqualPressed) {
      if (/[/+\-*]/.test(e.key)) setUserInput(result);

      if (/\d|\./.test(e.key)) {
        setUserInput("");
        setResult(0);
      }

      setIsEqualPressed(false);
    }

    if (/[0-9]|\./.test(e.key)) setUserInput((prev) => (prev += e.key));

    if (/[/+\-*]/.test(e.key))
      setUserInput((prev) => (prev += " " + e.key + " "));

    if (e.key === "=") {
      setResult(eval(userInput));
      setIsEqualPressed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  });

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  return (
    <div className="App">
      <div className="container">
        <div id="display">
          <div className="equation">{userInput}</div>
          <div className="result">{result}</div>
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
