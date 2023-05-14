// CSS module file
import styles from "./CardContent.module.css";

// React Icons
import { BiEditAlt } from "react-icons/bi";

// Context
import { useModalContext } from "../../context/TaskDetailModalContext";

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
