import React, { useState } from "react";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

import styles from "../styles/Mode.module.css";

const Mode = () => {
  const [isClicked, setIsClicked] = useState(false);

  const inlineStyles = {
    right: isClicked ? "50%" : 0,
  };

  const clickHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className={styles.container} onClick={clickHandler}>
      <div className={styles.circle} style={inlineStyles}>
        {!isClicked ? <FiMoon /> : <FiSun />}
      </div>
    </div>
  );
};

export default Mode;
