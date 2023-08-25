import { useEffect, useState } from "react";

import "./App.css";
import { AC, BACK_SPACE, EQUALS } from "./utils/keywords";

import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
  const keydownHandler = (e) => {};

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  });

  return (
    <div className="App">
      <Display />
      <Buttons />
      <footer>
        Developed by <em> Hossein Keshtkar</em>. <br /> August 2023
      </footer>
    </div>
  );
}

export default App;
