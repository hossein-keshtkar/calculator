import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

import styles from "../styles/Mode.module.css";
import {
  DARK,
  DODGER_BLUE,
  GHOST_WHITE,
  LIGHT,
  MODE,
} from "../constants/keywords";

const Mode = ({ dispatch }) => {
  const [isClicked, setIsClicked] = useState(false);

  const containerInlineStyles = {
    backgroundColor: isClicked && GHOST_WHITE,
  };

  const circleInlineStyles = {
    backgroundColor: isClicked && DODGER_BLUE,
    right: !isClicked ? "50%" : 0,
  };

  const clickHandler = () => {
    setIsClicked((prev) => !prev);
  };

  useEffect(() => {
    dispatch({ type: MODE, payload: isClicked ? LIGHT : DARK });
  }, [isClicked]);

  return (
    <div
      className={styles.container}
      onClick={clickHandler}
      style={containerInlineStyles}
    >
      <div className={styles.circle} style={circleInlineStyles}>
        {!isClicked ? <FiMoon /> : <FiSun color="white" />}
      </div>
    </div>
  );
};

export default Mode;
