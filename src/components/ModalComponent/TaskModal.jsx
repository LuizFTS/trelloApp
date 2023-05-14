import styles from "./TaskModal.module.css";
import { useModalContext } from "../../context/TaskDetailModalContext";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

import { useChangeTitle } from "../../hooks/useChangeTitle";

import EditText from "../EditText";
import { useEffect } from "react";

const TaskModal = () => {
  const { task, closeModal } = useModalContext();
  const [taskTitle, setTaskTitle] = useState("");

  useEffect(() => {
    console.log(task);
    if (task.visible === false) {
      return;
    }

    setTaskTitle(task.task.title);
  }, [task.visible]);

  const handleChangeText = (e) => {
    setTaskTitle(e.target.value);
  };

  return (
    <>
      {task.visible && (
        <div
          className={styles.modal}
          style={
            !task.visible
              ? { visibility: "hidden", backgroundColor: "transparent" }
              : { visibility: "visible" }
          }
        >
          <div
            className={styles.mainContainer}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            <div className={styles.main}>
              <CgClose onClick={() => closeModal()} />
              <div className={styles.modal_header}>
                <EditText changeText={handleChangeText}>
                  {task.task.title}
                </EditText>
                <p>na lista {task.parent.name}</p>
              </div>

              <div className={styles.content}>
                <div className={styles.maincontent}>
                  <h2>Descrição</h2>
                  <textarea name="description" />
                </div>
                <div className={styles.modalsidebar}>
                  <ul>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                    <li>d</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskModal;
