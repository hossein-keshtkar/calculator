import { useEffect, useState } from "react";

import "./App.css";
import { AC, BACK_SPACE, EQUALS } from "./utils/keywords";

function App() {
  const [result, setResult] = useState(null);
  const [display, setDisplay] = useState("");
  const [operators, setOperators] = useState([]);

  const regEx = /\d|[*\-/+.]/;
  const mainOperators = /[*/\-+]/;
  const latestOperator = display[display.length - 1];

  const input = display.split(mainOperators);
  const latestInput = +input[input.length - 1];
  const prevOperator = operators[0];

  const calculationHandler = () => {
    setResult((prev) =>
      prev === null
        ? latestInput
        : prevOperator === "+"
        ? (prev += latestInput)
        : prevOperator === "-"
        ? (prev -= latestInput)
        : prevOperator === "/"
        ? (prev /= latestInput)
        : (prev *= latestInput)
    );
  };

  const clearHandler = () => {
    setDisplay("");
    setResult(0);
    setOperators([]);
    console.clear();
  };

  const keydownHandler = (e) => {
    //display has a bug
    //1-1+100-99-10+10/2+2/2+5/6-1+
    const latestKeyboardInput = e.key;

    if (
      mainOperators.test(latestOperator) &&
      mainOperators.test(latestKeyboardInput)
    ) {
      setDisplay(
        (prev) => prev.substring(0, prev.length - 1) + latestKeyboardInput
      );
      setOperators([latestKeyboardInput, ...operators]);
      return;
    }

    if (regEx.test(latestKeyboardInput))
      setDisplay((prev) => (prev += latestKeyboardInput));

    if (mainOperators.test(latestKeyboardInput)) {
      setOperators([latestKeyboardInput, ...operators]);

      calculationHandler();
    }

    if (latestKeyboardInput === BACK_SPACE) {
      clearHandler();
    }

    if (/=/.test(latestKeyboardInput) || e.target.innerText === EQUALS) {
      calculationHandler();
    }
  };

  const btnClickHandler = (e) => {
    if (regEx.test(e.target.innerText))
      setDisplay((prev) => (prev += e.target.innerText));

    if (e.target.innerText === AC) clearHandler();
  };

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  });

  return (
    <div className="App">
      <div className="container">
        <div id="display">
          <div className="equation">{display}</div>
          <div className="result">{result === null ? 0 : result}</div>
        </div>
        <div className="btns">
          <div className="row first-row">
            <button id="clear" onClick={btnClickHandler}>
              AC
            </button>
            <button id="divide" onClick={btnClickHandler}>
              /
            </button>
            <button id="multiply" onClick={btnClickHandler}>
              *
            </button>
          </div>
          <div className="row second-row">
            <button id="seven" onClick={btnClickHandler}>
              7
            </button>
            <button id="eight" onClick={btnClickHandler}>
              8
            </button>
            <button id="nine" onClick={btnClickHandler}>
              9
            </button>
            <button id="subtract" onClick={btnClickHandler}>
              -
            </button>
          </div>
          <div className="row third-row">
            <button id="four" onClick={btnClickHandler}>
              4
            </button>
            <button id="five" onClick={btnClickHandler}>
              5
            </button>
            <button id="six" onClick={btnClickHandler}>
              6
            </button>
            <button id="add" onClick={btnClickHandler}>
              +
            </button>
          </div>
          <div className="row fourth-row">
            <button id="one" onClick={btnClickHandler}>
              1
            </button>
            <button id="two" onClick={btnClickHandler}>
              2
            </button>
            <button id="three" onClick={btnClickHandler}>
              3
            </button>
          </div>
          <div className="row fifth-row">
            <button id="zero" onClick={btnClickHandler}>
              0
            </button>
            <button id="decimal" onClick={btnClickHandler}>
              .
            </button>
            <button id="equals" onClick={btnClickHandler}>
              =
            </button>
          </div>
        </div>
      </div>
      <footer>
        Developed by <em> Hossein Keshtkar</em>. <br /> August 2023
      </footer>
    </div>
  );
}

export default App;
