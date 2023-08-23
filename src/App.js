import { useEffect, useState } from "react";

import "./App.css";
import { AC, BACK_SPACE, EQUALS } from "./utils/keywords";

function App() {
  const [result, setResult] = useState(0);
  const [display, setDisplay] = useState("");

  const keydownHandler = (e) => {
    const regEx = /\d|[*\-/+.]/;

    if (regEx.test(e.key)) {
      setDisplay((prev) => (prev += e.key));
    }

    if (regEx.test(e.target.innerText)) {
      setDisplay((prev) => (prev += e.target.innerText));
    }

    if (e.key === BACK_SPACE || e.target.innerText === AC) {
      setDisplay((prev) => prev.substring(0, prev.length - 1));
      console.clear();
    }

    if (/=/.test(e.key) || e.target.innerText === EQUALS) {
      console.log(display.split(regEx));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  });

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <div className="App">
      <div className="container">
        <div id="display">
          <div className="equation">{display}</div>
          <div className="result">{result}</div>
        </div>
        <div className="btns">
          <div className="row first-row">
            <button id="clear" onClick={keydownHandler}>
              AC
            </button>
            <button id="divide" onClick={keydownHandler}>
              /
            </button>
            <button id="multiply" onClick={keydownHandler}>
              *
            </button>
          </div>
          <div className="row second-row">
            <button id="seven" onClick={keydownHandler}>
              7
            </button>
            <button id="eight" onClick={keydownHandler}>
              8
            </button>
            <button id="nine" onClick={keydownHandler}>
              9
            </button>
            <button id="subtract" onClick={keydownHandler}>
              -
            </button>
          </div>
          <div className="row third-row">
            <button id="four" onClick={keydownHandler}>
              4
            </button>
            <button id="five" onClick={keydownHandler}>
              5
            </button>
            <button id="six" onClick={keydownHandler}>
              6
            </button>
            <button id="add" onClick={keydownHandler}>
              +
            </button>
          </div>
          <div className="row fourth-row">
            <button id="one" onClick={keydownHandler}>
              1
            </button>
            <button id="two" onClick={keydownHandler}>
              2
            </button>
            <button id="three" onClick={keydownHandler}>
              3
            </button>
          </div>
          <div className="row fifth-row">
            <button id="zero" onClick={keydownHandler}>
              0
            </button>
            <button id="decimal" onClick={keydownHandler}>
              .
            </button>
            <button id="equals" onClick={keydownHandler}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
