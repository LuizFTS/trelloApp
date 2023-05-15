// React Hooks
import { useEffect, useState, useRef } from "react";

// CSS module file
import styles from "./Card.module.css";

// React Icons
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";

// Context
import { useListContext } from "../../context/ListContext";

// Component
import CardContent from "./CardContent";

const Card = ({ listItem }) => {
  // Using context
  const { handleChangeListTitle } = useListContext();

  // Setting States
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState([
    "Clique para alterar o texto",
    listItem.id,
  ]);
  const [inputActive, setInputActive] = useState(false);
  const [activeAddCard, setActiveAddCard] = useState(false);
  const [cardName, setCardName] = useState("");

  // Setting Refs
  const taskTitleInputRef = useRef(null);

  // Function to verify if the input has an empty value;
  // If it has then set a default title;
  // This function is used when the return key is pressed
  const handleSetTitle = (e) => {
    if (e.target.value === "" && e.key === "Enter") {
      setTitle(["Insira um título", listItem.id]);
      e.target.blur();
      handleChangeListTitle(e.target.value, listItem.id);
      return;
    } else if (e.target.value === "" && e.key === "Enter") {
      setTitle([e.target.value, listItem.id]);
      e.target.blur();
      handleChangeListTitle(e.target.value, listItem.id);
    }
  };

  // Function to verify if the input has an empty value;
  // If it has then set a default title;
  // This function is used when the input is onBlur()
  const handleSetTitleFocusOut = (e) => {
    setInputActive(false);
    if (e.target.value === "") {
      setTitle(["Insira um título", listItem.id]);
      handleChangeListTitle(e.target.value, listItem.id);
    }
  };

  // Function to show the form to add a new task inside the list
  const handleShowAddTask = () => {
    setActiveAddCard(true);
  };

  // Function to hide the form to add a new task inside the list
  const handleHideAddTask = () => {
    setActiveAddCard(false);
  };

  // Function to submit the form to add a new task to the list
  const handleAddCard = (e) => {
    e.preventDefault();

    if (cardName === "") {
      return;
    }
    setTasks((prevState) => {
      return [...prevState, { id: Math.random(), title: cardName }];
    });

    setCardName("");
    setActiveAddCard(false);
  };

  // Pressing either the Enter or Escape key will cause the input to lose focus
  const handleKeyDownAddTask = (e) => {
    if (e.target.value !== "" && e.key === "Enter") {
      e.target.blur();
      setActiveAddCard(false);
    } else if (e.target.value === "" && e.key === "Enter") {
      setActiveAddCard(false);
    } else if (e.key === "Escape") {
      setActiveAddCard(false);
      e.target.blur();
    }
  };

  // Whenever the list of items is updated, the states of the title and tasks will be changed accordingly
  useEffect(() => {
    setTitle([listItem.name, listItem.id]);
    setTasks(listItem.tasks);
  }, [listItem]);

  // The form for adding a new task will be focused every time it is requested to be shown
  useEffect(() => {
    if (activeAddCard) {
      taskTitleInputRef.current.focus();
    }
  }, [activeAddCard]);

  return (
    <div className={styles.card} onClick={handleChangeListTitle}>
      <div className={styles.card_header}>
        <div className={styles.card_header_title}>
          {!inputActive ? (
            <input
              type="text"
              className={styles.notActive}
              onFocus={() => setInputActive(true)}
              value={title[0]}
              onChange={(e) => setTitle([e.target.value, listItem.id])}
            />
          ) : (
            <input
              type="text"
              className={styles.active}
              value={title[0]}
              onChange={(e) => setTitle([e.target.value, listItem.id])}
              onKeyDown={(e) => handleSetTitle(e)}
              onBlur={(e) => handleSetTitleFocusOut(e)}
            />
          )}

          {!inputActive && <p>{title[0]}</p>}
        </div>
        <div className={styles.card_header_icon}>
          <span>
            <BiDotsHorizontalRounded />
          </span>
        </div>
      </div>
      {tasks.map((i) => {
        return (
          <CardContent title={i.title} key={i.id} task={i} parent={listItem} />
        );
      })}
      <div className={styles.addcard}>
        {!activeAddCard ? (
          <span onClick={handleShowAddTask}>
            <FiPlus />
            <p>Adicionar um cartão</p>
          </span>
        ) : (
          <form
            className={styles.addcard_textarea}
            onSubmit={(e) => handleAddCard(e)}
            onBlur={(e) => handleAddCard(e)}
          >
            <textarea
              name="adicionarCartao"
              placeholder="Insira um título para este cartão..."
              onKeyDown={(e) => handleKeyDownAddTask(e)}
              onBlur={handleHideAddTask}
              onChange={(e) => setCardName(e.target.value)}
              value={cardName}
              ref={taskTitleInputRef}
            ></textarea>
            <div className={styles.addcard_textarea_buttons}>
              <div>
                <input type="submit" value="Adicionar Cartão" className="btn" />
                <CgClose
                  className={styles.addcard_closeBtn}
                  onClick={handleHideAddTask}
                />
              </div>
              <div className={styles.addcard_menuContainer}>
                <BiDotsHorizontalRounded className={styles.addcard_menu} />
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Card;
