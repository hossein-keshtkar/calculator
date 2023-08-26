import { useEffect, useReducer } from "react";

import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { reducer } from "./manager/reducer";
import { mainFunction } from "./funcs/mainFunction";
import "./App.css";
import { init } from "./data/init";

function App() {
  const [state, dispatch] = useReducer(reducer, init);

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
    <div className="App">
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
