import styles from "./cardAddContent.module.css";

import { FiPlus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import React, { useState, useRef } from "react";

const CardAddContent = ({ handleAddList }) => {
  const [active, setActive] = useState(false);
  const focusRef = useRef(null);

  const handleFocus = (status) => {
    if (status === "active") {
      setActive(true);

      /* Verificar o autofocus quando input passa a ser visível */
      console.log(focusRef);
      focusRef.current.focus();
    } else {
      setActive(false);
    }
  };

  return (
    <div
      className={!active ? styles.cardAddContent : styles.cardAddContentActive}
    >
      <div
        className={
          !active ? styles.cardAddContentBtn : styles.cardAddContentBtnActive
        }
        onClick={() => handleFocus("active")}
        /* onClick={() => setActive(true)} */
      >
        <span>
          <FiPlus />
        </span>
        <p>Adicionar outra lista</p>
      </div>

      <form
        className={
          !active
            ? styles.cardAddContent_form_Inactive
            : styles.cardAddContent_form
        }
      >
        <input
          type="text"
          className={styles.cardAddContent_form_input}
          placeholder="Insira o título da lista..."
          ref={focusRef}
        />
        <div>
          <input type="submit" value="Adicionar Lista" />
          <CgClose onClick={() => handleFocus("false")} />
        </div>
      </form>
    </div>
  );
};

export default CardAddContent;
