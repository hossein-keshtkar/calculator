import { NUMBER1, NUMBER2, OPERATOR, RESULT } from "../constants/keywords";
import { calculator } from "./calculator";

export const calcWhenOperatorPressed = (state, dispatch, key) => {
  const result = calculator(state.num1, state.num2, state.operator);

  dispatch({ type: RESULT, payload: result });
  dispatch({ type: NUMBER1, payload: null });
  dispatch({ type: NUMBER1, payload: result });
  dispatch({ type: NUMBER2, payload: null });
  dispatch({ type: OPERATOR, payload: key });
};
