import styles from "./Card.module.css";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";

const Card = () => {
  const [title, setTitle] = useState("Clique para alterar o texto");
  const [inputActive, setInputActive] = useState(false);

  const handleSetTitle = (e) => {
    if (e.target.value === "" && e.key === "Enter") {
      setTitle("Insira um título");
      e.target.blur();
    } else if (e.key === "Enter") {
      setTitle(e.target.value);
      e.target.blur();
    }
  };

  const handleSetTitleFocusOut = (e) => {
    setInputActive(false);
    if (e.target.value === "") {
      setTitle("Insira um título");
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <div className={styles.card_header_title}>
          {!inputActive ? (
            <input
              type="text"
              className={styles.notActive}
              onFocus={() => setInputActive(true)}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <input
              type="text"
              className={styles.active}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => handleSetTitle(e)}
              value={title}
              onBlur={(e) => handleSetTitleFocusOut(e)}
            />
          )}

          {!inputActive && <p>{title}</p>}
        </div>
        <div className={styles.card_header_icon}>
          <span>
            <BiDotsHorizontalRounded />
          </span>
        </div>
      </div>
      <div className={styles.addcard}>
        <span>
          <FiPlus />
          <p>Adicionar um cartão</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
