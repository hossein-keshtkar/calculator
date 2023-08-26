import React from "react";

import "../styles/Buttons.css";
import {
  AC,
  DISPLAY,
  NUMBER1,
  NUMBER2,
  OPERATOR,
  RESULT,
} from "../constants/keywords";
import { dotValidator } from "../funcs/dotValidator";
import { resetState } from "../funcs/resetState";

const Buttons = ({ state, dispatch }) => {
  const numbers = /\d|\./;
  const operators = /[-+/*]/;

  const btnClickHandler = (e) => {
    const pressedBtnValue = e.target.innerText;

    if (pressedBtnValue === AC) {
      resetState(dispatch);
    }

    if (!state.num2 && !state.operator && numbers.test(pressedBtnValue)) {
      const isDotIncluded = dotValidator(state.num1, pressedBtnValue);

      if (isDotIncluded) return;

      dispatch({ type: NUMBER1, payload: pressedBtnValue });
    }

    if (operators.test(pressedBtnValue))
      dispatch({ type: OPERATOR, payload: pressedBtnValue });

    dispatch({
      type: DISPLAY,
      payload: state.num1 + state.operator + state.num2,
    });
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
