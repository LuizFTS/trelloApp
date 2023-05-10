import styles from "./Card.module.css";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import CardContent from "./CardContent";

const Card = ({ data, clickFunction }) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState(["Clique para alterar o texto", data.id]);
  const [inputActive, setInputActive] = useState(false);
  const [activeAddCard, setActiveAddCard] = useState(false);

  const handleSetTitle = (e) => {
    if (e.target.value === "" && e.key === "Enter") {
      setTitle(["Insira um título", data.id]);
      e.target.blur();
      clickFunction(e.target.value, data.id);
    } else if (e.key === "Enter") {
      setTitle([e.target.value, data.id]);
      e.target.blur();
      clickFunction(e.target.value, data.id);
    }
  };

  const handleSetTitleFocusOut = (e) => {
    setInputActive(false);
    if (e.target.value === "") {
      setTitle(["Insira um título", data.id]);
      clickFunction(e.target.value, data.id);
    }
  };

  const handleAddTask = () => {
    setActiveAddCard(true);
    console.log([...tasks, "T"]);
  };

  const handleKeyDownAddTask = (e) => {
    if (e.key === "Enter" || e.key === "Esc") {
      e.target.blur();
      setActiveAddCard(false);
    } else if (e.key !== "Enter" || e.key !== "Esc") {
    }
    console.log(activeAddCard);
  };

  const handleCloseAddTask = () => {
    setActiveAddCard(false);
  };

  useEffect(() => {
    setTitle([data.name, data.id]);
    setTasks(data.tasks);
  }, [data]);

  useEffect(() => {
    console.log(activeAddCard);
  }, [activeAddCard]);

  return (
    <div className={styles.card} onClick={clickFunction}>
      <div className={styles.card_header}>
        <div className={styles.card_header_title}>
          {!inputActive ? (
            <input
              type="text"
              className={styles.notActive}
              onFocus={() => setInputActive(true)}
              value={title[0]}
              onChange={(e) => setTitle([e.target.value, data.id])}
            />
          ) : (
            <input
              type="text"
              className={styles.active}
              onChange={(e) => setTitle([e.target.value, data.id])}
              onKeyDown={(e) => handleSetTitle(e)}
              value={title[0]}
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
        return <CardContent title={i.title} key={i.id} />;
      })}
      <div className={styles.addcard}>
        {!activeAddCard ? (
          <span onClick={handleAddTask}>
            <FiPlus />
            <p>Adicionar um cartão</p>
          </span>
        ) : (
          <div className={styles.addcard_textarea}>
            <textarea
              name="adicionarCartao"
              placeholder="Insira um título para este cartão..."
              onKeyDown={(e) => handleKeyDownAddTask(e)}
            ></textarea>
            <div className={styles.addcard_textarea_buttons}>
              <div>
                <button className="btn">Adicionar Cartão</button>
                <CgClose
                  className={styles.addcard_closeBtn}
                  onClick={handleCloseAddTask}
                />
              </div>
              <div className={styles.addcard_menuContainer}>
                <BiDotsHorizontalRounded className={styles.addcard_menu} />
              </div>
            </div>
          </div>
        )}

        {/* <span>
          <FiPlus />
          <p>Adicionar um cartão</p>
        </span> */}
      </div>
    </div>
  );
};

export default Card;
