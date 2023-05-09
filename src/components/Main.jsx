import Card from "./Card";
import styles from "./Main.module.css";

import React from "react";

const Main = () => {
  return (
    <div className={styles.main}>
      <Card />
      <Card />
    </div>
  );
};

export default Main;
