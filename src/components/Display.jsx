import React from "react";

import styles from "../styles/Display.module.css";

const Display = ({ state }) => {
  return (
    <div id="display" className={styles.container}>
      <div className={styles.equation}>
        {`${state.num1 !== null ? state.num1 : "0"} ${
          state.operator !== null ? state.operator : ""
        } ${state.num2 !== null ? state.num2 : ""}`}
      </div>
      <div className={styles.result}>
        {state.result === null ? 0 : state.result}
      </div>
    </div>
  );
};

export default Display;
