// React Hooks
import { useState, useEffect } from "react";

// CSS module file
import styles from "./TaskModal.module.css";

// React Icons
import { CgClose } from "react-icons/cg";
import { RiWindow2Fill } from "react-icons/ri";
import { GrTextAlignFull } from "react-icons/gr";

// Context
import { useModalContext } from "../../context/TaskDetailModalContext";
import { useListContext } from "../../context/ListContext";

// Components
import EditText from "../EditText";

const TaskModal = () => {
  // Import contexts
  const { task, closeModal } = useModalContext();
  const { handleChangeTaskTitle } = useListContext();

  // Set States
  const [description, setDescription] = useState("");
  const [taskTitle, setTaskTitle] = useState("");

  // Set Task title and description every time task.visible is changed
  useEffect(() => {
    if (task.visible === false) {
      return;
    }

    setTaskTitle(task.task.title);
    setDescription(task.task.description);
  }, [task.visible]);

  // Function to change the title of the task
  const handleChangeText = (e) => {
    if (e.target.value === "") {
      return;
    }
    setTaskTitle(e.target.value);
    handleChangeTaskTitle(e.target.value, task.task.id, task.parent.id);
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
              <CgClose
                className={styles.closeIcon}
                onClick={() => closeModal()}
              />
              <div className={styles.modal_header}>
                <span>
                  <RiWindow2Fill className={styles.icons} />
                  <EditText handleChangeText={handleChangeText}>
                    {task.task.title}
                  </EditText>
                </span>
                <p>na lista {task.parent.name}</p>
              </div>

              <div className={styles.content}>
                <div className={styles.maincontent}>
                  <GrTextAlignFull className={styles.icons_description} />
                  <span>
                    <h2>Descrição</h2>
                    <textarea
                      name="description"
                      className={styles.textarea_description}
                      value={task.task.description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </span>
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
