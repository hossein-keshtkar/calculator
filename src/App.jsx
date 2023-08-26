import { useEffect, useReducer } from "react";

import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { reducer } from "./manager/reducer";
import { mainFunction } from "./funcs/mainFunction";
import "./App.css";
import { init } from "./data/init";
import Mode from "./components/Mode";
import { LIGHT } from "./constants/keywords";

function App() {
  const [state, dispatch] = useReducer(reducer, init);

  const inlineStyles = {
    backgroundColor: state.mode === LIGHT ? "#fff" : "#111",
    color: state.mode === LIGHT ? "#000" : "#fff",
  };

  const keydownHandler = (e) => {
    const pressedKey = e.key;

    mainFunction(state, dispatch, pressedKey);
  };

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  });

  return (
    <div className="App" style={inlineStyles}>
      <Mode dispatch={dispatch} />
      <code>keyboard is supported</code>
      <Display state={state} />
      <Buttons state={state} dispatch={dispatch} />
      <footer>
        Developed by <em> Hossein Keshtkar</em>. <br /> August 2023
      </footer>
    </div>
  );
}

export default App;
