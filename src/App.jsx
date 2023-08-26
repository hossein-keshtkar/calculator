import { useEffect, useReducer } from "react";

import "./App.css";
// import { AC, BACK_SPACE, EQUALS } from "./utils/keywords";

import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { reducer } from "./manager/reducer";

function App() {
  const initialData = {
    display: "",
    result: null,
    num1: null,
    num2: null,
    operator: null,
  };
  const [state, dispatch] = useReducer(reducer, initialData);

  const keydownHandler = (e) => {};

  useEffect(() => {
    console.log(state);

    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  });

  return (
    <div className="App">
      <Display state={state} />
      <Buttons state={state} dispatch={dispatch} />
      <footer>
        Developed by <em> Hossein Keshtkar</em>. <br /> August 2023
      </footer>
    </div>
  );
}

export default App;
