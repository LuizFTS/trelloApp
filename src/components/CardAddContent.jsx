import styles from "./cardAddContent.module.css";

import { FiPlus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { useState, useRef, useEffect } from "react";

const CardAddContent = ({ handleAddList }) => {
  const [newList, setNewList] = useState({ id: 0, name: "", tasks: [] });
  const [active, setActive] = useState(false);
  const focusRef = useRef(null);

  useEffect(() => {
    if (active) {
      focusRef.current.focus();
    }
  }, [active]);

  const handleFocus = (status) => {
    if (status === true) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newList.name === "") {
      return;
    }

    handleAddList(newList);

    setNewList({ id: 0, name: "", tasks: [] });
    setActive(false);
  };

  return (
    <div
      className={!active ? styles.cardAddContent : styles.cardAddContentActive}
    >
      <div
        className={
          !active ? styles.cardAddContentBtn : styles.cardAddContentBtnActive
        }
        onClick={() => handleFocus(true)}
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
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          className={styles.cardAddContent_form_input}
          placeholder="Insira o título da lista..."
          ref={focusRef}
          onChange={(e) =>
            setNewList({ id: Math.random(), name: e.target.value, tasks: [] })
          }
          value={newList.name}
        />
        <div>
          <input type="submit" value="Adicionar Lista" />
          <CgClose onClick={() => handleFocus(false)} />
        </div>
      </form>
    </div>
  );
};

export default CardAddContent;
