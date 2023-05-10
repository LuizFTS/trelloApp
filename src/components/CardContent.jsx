import styles from "./CardContent.module.css";
import { BiEditAlt } from "react-icons/bi";

import React from "react";

const CardContent = ({ title }) => {
  return (
    <div className={styles.cardcontent}>
      <p>{title}</p>
      <span className={styles.cardcontent_span}>
        <BiEditAlt />
      </span>
    </div>
  );
};

export default CardContent;
