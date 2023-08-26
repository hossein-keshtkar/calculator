import React from "react";

import "../styles/Buttons.css";
import { AC, NUMBER1 } from "../constants/keywords";

const Buttons = ({ dispatch }) => {
  const numbers = /\d|\./;

  const btnClickHandler = (e) => {
    const pressedBtnValue = e.target.innerText;

    if (pressedBtnValue === AC) console.clear();

    if (numbers.test(pressedBtnValue))
      dispatch({ type: NUMBER1, payload: pressedBtnValue });
  };

  return (
    <div className="container">
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
  );
};

export default Buttons;