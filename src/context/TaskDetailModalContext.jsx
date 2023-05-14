// React Hooks
import { createContext, useContext, useState } from "react";

const TaskDetailModalContext = createContext();

const TaskDetailModalContextProvider = ({ children }) => {
  const [task, setTask] = useState({ visible: false });

  const openModal = (payload) => setTask({ ...payload, visible: true });
  const closeModal = () => setTask({ visible: false });

  return (
    <TaskDetailModalContext.Provider value={{ task, openModal, closeModal }}>
      {children}
    </TaskDetailModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(TaskDetailModalContext);
  return context;
};

export { useModalContext, TaskDetailModalContextProvider };
