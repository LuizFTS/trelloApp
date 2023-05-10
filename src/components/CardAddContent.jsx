import styles from "./cardAddContent.module.css";

import { FiPlus } from "react-icons/fi";
import React from "react";

const CardAddContent = () => {
  return (
    <div className={styles.cardAddContent}>
      <div className={styles.cardAddContentBtn}>
        <span>
          <FiPlus />
        </span>
        <p>Adicionar outra lista</p>
      </div>
    </div>
  );
};

export default CardAddContent;
