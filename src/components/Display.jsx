import React, { useState } from "react";

import styles from "../styles/Display.module.css";

const Display = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div id="display" className={styles.container}>
      <div className={styles.equation}>{display}</div>
      <div className={styles.result}>{result === null ? 0 : result}</div>
    </div>
  );
};

export default Display;
