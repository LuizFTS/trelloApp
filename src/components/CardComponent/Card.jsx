// React Hooks
import { useEffect, useState } from "react";

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
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState([
    "Clique para alterar o texto",
    listItem.id,
  ]);
  const [inputActive, setInputActive] = useState(false);
  const [activeAddCard, setActiveAddCard] = useState(false);
  const [cardName, setCardName] = useState("");
  const { handleChangeListTitle } = useListContext();

  const handleSetTitle = (e) => {
    if (e.target.value === "" && e.key === "Enter") {
      setTitle(["Insira um título", listItem.id]);
      e.target.blur();
      handleChangeListTitle(e.target.value, listItem.id);
    } else if (e.key === "Enter") {
      setTitle([e.target.value, listItem.id]);
      e.target.blur();
      handleChangeListTitle(e.target.value, listItem.id);
    }
  };

  const handleSetTitleFocusOut = (e) => {
    setInputActive(false);
    if (e.target.value === "") {
      setTitle(["Insira um título", listItem.id]);
      handleChangeListTitle(e.target.value, listItem.id);
    }
  };

  const handleShowAddTask = () => {
    setActiveAddCard(true);
  };

  const handleAddCard = (e) => {
    e.preventDefault();

    if (cardName === "") {
      return;
    } else if (e.key === "s") {
      console.log(e.key);
    }

    setTasks((prevState) => {
      return [...prevState, { id: Math.random(), title: cardName }];
    });

    setCardName("");
    setActiveAddCard(false);
  };

  const handleKeyDownAddTask = (e) => {
    if (e.key === "Enter" || e.key === "Esc") {
      e.target.blur();
      setActiveAddCard(false);

      setTasks((prevState) => {
        return [
          ...prevState,
          { id: tasks[tasks.length - 1] + 1, title: cardName },
        ];
      });
    } else if (e.key !== "Enter" || e.key !== "Esc") {
    }
  };

  const handleCloseAddTask = () => {
    setActiveAddCard(false);
  };

  useEffect(() => {
    setTitle([listItem.name, listItem.id]);
    setTasks(listItem.tasks);
  }, [listItem]);

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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddCard(e);
                }
              }}
              onChange={(e) => setCardName(e.target.value)}
              value={cardName}
            ></textarea>
            <div className={styles.addcard_textarea_buttons}>
              <div>
                <input type="submit" value="Adicionar Cartão" className="btn" />
                <CgClose
                  className={styles.addcard_closeBtn}
                  onClick={handleCloseAddTask}
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