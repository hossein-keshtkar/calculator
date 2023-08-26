import {
  DISPLAY,
  NUMBER1,
  NUMBER2,
  OPERATOR,
  RESULT,
} from "../constants/keywords";

export const resetState = (dispatch) => {
  dispatch({ type: NUMBER1, payload: null });
  dispatch({ type: NUMBER2, payload: null });
  dispatch({ type: OPERATOR, payload: null });
  dispatch({ type: RESULT, payload: null });
  dispatch({ type: DISPLAY, payload: "" });
  console.clear();
};
