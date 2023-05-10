import { useState, useEffect } from "react";

import styles from "./App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import SubTitle from "./components/SubTitle";

const App = () => {
  const [lista, setLista] = useState([]);

  const data = [
    { id: 1, name: "Pendências SOS" },
    { id: 2, name: "Pendências e-mail" },
    { id: 3, name: "Pendências Geral" },
    { id: 4, name: "Anotações" },
  ];

  useEffect(() => {
    setLista(data);
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.main_sidebar}>
        <Sidebar />
        <div className={styles.main}>
          <SubTitle />
          <Main lista={lista} />
        </div>
      </div>
    </div>
  );
};

export default App;
