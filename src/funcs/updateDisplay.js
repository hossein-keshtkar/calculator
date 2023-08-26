import { DISPLAY } from "../constants/keywords";

export const updateDisplay = (state, dispatch) => {
  dispatch({
    type: DISPLAY,
    payload: state.num1 + state.operator + state.num2,
  });
};
