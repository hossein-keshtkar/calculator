import { calculator } from "./calculator";
import {
  DISPLAY,
  NUMBER1,
  NUMBER2,
  OPERATOR,
  RESULT,
} from "../constants/keywords";

export const calcWhenEqualsPressed = (state, dispatch) => {
  const result = calculator(state.num1, state.num2, state.operator);

  dispatch({ type: RESULT, payload: result });
  dispatch({ type: NUMBER1, payload: null });
  dispatch({ type: NUMBER2, payload: null });
  dispatch({ type: OPERATOR, payload: null });
  dispatch({ type: DISPLAY, payload: "" });
};
