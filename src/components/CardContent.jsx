import styles from "./CardContent.module.css";
import { BiEditAlt } from "react-icons/bi";

import { useModalContext } from "../context/TaskDetailModalContext";

import React from "react";
import { useEffect } from "react";

const CardContent = ({ title, task, parent }) => {
  const { openModal } = useModalContext();
  return (
    <div
      className={styles.cardcontent}
      onClick={() => openModal({ task, parent })}
    >
      <p>{title}</p>
      <span className={styles.cardcontent_span}>
        <BiEditAlt />
      </span>
    </div>
  );
};

export default CardContent;
