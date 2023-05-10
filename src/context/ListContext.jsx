import { createContext, useState } from "react";

export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Pendências SOS",
      tasks: [
        { id: 1, title: "Tarefa 1" },
        { id: 2, title: "Tarefa 2" },
      ],
    },
    {
      id: 2,
      name: "Pendências e-mail",
      tasks: [
        { id: 1, title: "Tarefa 1" },
        { id: 2, title: "Tarefa 2" },
      ],
    },
    {
      id: 3,
      name: "Pendências Geral",
      tasks: [
        { id: 1, title: "Tarefa 1" },
        { id: 2, title: "Tarefa 2" },
      ],
    },
    {
      id: 4,
      name: "Anotações",
      tasks: [
        { id: 1, title: "Tarefa 1" },
        { id: 2, title: "Tarefa 2" },
      ],
    },
  ]);
  return (
    <ListContext.Provider value={{ data, setData }}>
      {children}
    </ListContext.Provider>
  );
};
