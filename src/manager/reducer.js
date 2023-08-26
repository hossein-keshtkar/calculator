import { NUMBER1, OPERATOR } from "../constants/keywords";

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
    default:
      return state;
  }
};
