import { NUMBER1, NUMBER2, OPERATOR, RESULT } from "../constants/keywords";

export const reducer = (state, action) => {
  switch (action.type) {
    case OPERATOR:
      return { ...state, operator: action.payload };
    case NUMBER1:
      return {
        ...state,
        num1:
          state.num1 === null ? action.payload : state.num1 + action.payload,
      };
    case NUMBER2:
      return {
        ...state,
        num2:
          state.num2 === null ? action.payload : state.num2 + action.payload,
      };
    case RESULT:
      return { ...state, result: action.payload };
    default:
      return state;
  }
};
