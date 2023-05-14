import { useState, useEffect } from "react";

import styles from "./App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import SubTitle from "./components/SubTitle";
import TaskModal from "./components/ModalComponent/TaskModal";

const App = () => {
  return (
    <div>
      <TaskModal />
      <Header />
      <div className={styles.main_sidebar}>
        {/* <Sidebar /> */}
        <div className={styles.main}>
          <SubTitle />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
