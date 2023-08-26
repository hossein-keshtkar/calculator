import { AC, EQUALS, NUMBER1, NUMBER2, OPERATOR } from "../constants/keywords";
import { calcWhenEqualsPressed } from "./calcWhenEqualsPressed";
import { calcWhenOperatorPressed } from "./calcWhenOperatorPressed";
import { dotValidator } from "./dotValidator";
import { resetState } from "./resetState";
import { updateDisplay } from "./updateDisplay";

export const mainFunction = (state, dispatch, key) => {
  const numbers = /\d|\./;
  const operators = /[-+/*]/;

  if (key === AC) {
    resetState(dispatch);
    return;
  }

  if (state.num2 === null && state.operator === null && numbers.test(key)) {
    const isDotIncluded = dotValidator(state.num1, key);

    !isDotIncluded && dispatch({ type: NUMBER1, payload: key });
  }

  if (state.num1 !== null && operators.test(key))
    dispatch({ type: OPERATOR, payload: key });

  if (state.num1 !== null && state.operator && numbers.test(key)) {
    const isDotIncluded = dotValidator(state.num2, key);

    !isDotIncluded && dispatch({ type: NUMBER2, payload: key });
  }

  if (
    state.num1 !== null &&
    state.operator &&
    state.num2 !== null &&
    operators.test(key)
  ) {
    calcWhenOperatorPressed(state, dispatch, key);
  }

  if (state.num1 && state.operator && state.num2 && key === EQUALS) {
    calcWhenEqualsPressed(state, dispatch);
  }

  updateDisplay(state, dispatch);
};
