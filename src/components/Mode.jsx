import React, { useEffect, useState } from "react";

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
      <div className={styles.circle} style={inlineStyles}></div>
    </div>
  );
};

export default Mode;
