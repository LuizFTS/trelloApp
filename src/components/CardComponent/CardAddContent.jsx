// React Hooks
import { useState, useRef, useEffect } from "react";

// CSS module file
import styles from "./cardAddContent.module.css";

// React Icons
import { FiPlus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

// Context
import { useListContext } from "../../context/ListContext";

const CardAddContent = () => {
  // Using context
  const { handleAddNewList } = useListContext();

  // Setting states
  const [newList, setNewList] = useState({ id: 0, name: "", tasks: [] });
  const [active, setActive] = useState(false);

  // Setting Refs
  const focusRef = useRef(null);

  // Function to set the state Active to show or hide the form to add a new list
  const handleFocus = (status) => {
    if (status === true) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  // Function to submit the form to add a new list
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newList.name === "") {
      return;
    }

    handleAddNewList(newList);

    setNewList({ id: 0, name: "", tasks: [] });
    setActive(false);
  };

  // The form for adding a new list will be focused every time it is requested to be shown
  // It was required to add a timeout function due the transition delay in the CSS file
  useEffect(() => {
    if (active) {
      setTimeout(() => {
        focusRef.current.focus();
      }, 400);
    }
  }, [active]);

  return (
    <div
      className={!active ? styles.cardAddContent : styles.cardAddContentActive}
    >
      <div
        className={
          !active ? styles.cardAddContentBtn : styles.cardAddContentBtnActive
        }
        onClick={() => handleFocus(true)}
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
