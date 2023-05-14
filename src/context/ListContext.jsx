// React Hooks
import { createContext, useContext, useState } from "react";

export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Contabilidade",
      tasks: [
        {
          id: 1,
          title: "Preparação do Balanço Patrimonial",
          description:
            "A tarefa envolve a revisão e a preparação do balanço patrimonial da empresa, que é um relatório contábil que apresenta a situação financeira da empresa em determinado período. Isso inclui a análise dos ativos, passivos e patrimônio líquido da empresa, bem como a reconciliação de contas e a preparação de notas explicativas. É importante garantir que o balanço esteja correto e em conformidade com as normas contábeis aplicáveis.",
          dueDate: "2023-06-30",
        },
      ],
    },
    {
      id: 2,
      name: "Fiscal",
      tasks: [
        {
          id: 1,
          title: "Preparação do Balanço Patrimonial",
          description:
            "A tarefa envolve a revisão e a preparação do balanço patrimonial da empresa, que é um relatório contábil que apresenta a situação financeira da empresa em determinado período. Isso inclui a análise dos ativos, passivos e patrimônio líquido da empresa, bem como a reconciliação de contas e a preparação de notas explicativas. É importante garantir que o balanço esteja correto e em conformidade com as normas contábeis aplicáveis.",
          dueDate: "2023-06-30",
        },
      ],
    },
    {
      id: 3,
      name: "Contas a Pagar",
      tasks: [
        {
          id: 1,
          title: "Preparação do Balanço Patrimonial",
          description:
            "A tarefa envolve a revisão e a preparação do balanço patrimonial da empresa, que é um relatório contábil que apresenta a situação financeira da empresa em determinado período. Isso inclui a análise dos ativos, passivos e patrimônio líquido da empresa, bem como a reconciliação de contas e a preparação de notas explicativas. É importante garantir que o balanço esteja correto e em conformidade com as normas contábeis aplicáveis.",
          dueDate: "2023-06-30",
        },
      ],
    },
    {
      id: 4,
      name: "Departamento Pessoal",
      tasks: [
        {
          id: 1,
          title: "Preparação do Balanço Patrimonial",
          description:
            "A tarefa envolve a revisão e a preparação do balanço patrimonial da empresa, que é um relatório contábil que apresenta a situação financeira da empresa em determinado período. Isso inclui a análise dos ativos, passivos e patrimônio líquido da empresa, bem como a reconciliação de contas e a preparação de notas explicativas. É importante garantir que o balanço esteja correto e em conformidade com as normas contábeis aplicáveis.",
          dueDate: "2023-06-30",
        },
      ],
    },
  ]);

  // Function to change the title of a list
  const handleChangeListTitle = (text, id) => {
    // Define a variable to filter the list that it'll change the title of
    let newList = data.filter((item) => {
      //Finding the list
      if (item.id === id) {
        // Changing the name of the list
        item.name = text;
      }

      // Returning the new array with the name changed
      return item;
    });

    // Replace the previous array with the new array with the name of the list changed
    setData(newList);
  };

  // Function to change the title of a task
  const handleChangeTaskTitle = (text, taskId, parentID) => {
    // Define a variable to filter the list that will have the task that it'll change the title of
    let newList = data.filter((list) => {
      // Finding the list
      if (list.id === parentID) {
        list.tasks.map((task) => {
          // Finding the task inside the list
          if (task.id === taskId) {
            // Changing the title of the task
            task.title = text;
          }

          // Returning the task with the title changed
          return task;
        });
      }

      // Returning the list with the name changed and the title of the task changed as well
      return list;
    });

    // Change the Data Array with the new Array with the changed title of the task
    setData(newList);
  };

  // Function to add a new list in the data
  const handleAddNewList = (newList) => {
    // Get the previous value of the array and insert a new item into it
    setData((prevState) => {
      return [...prevState, newList];
    });
  };

  return (
    <ListContext.Provider
      value={{
        data,
        setData,
        handleChangeListTitle,
        handleAddNewList,
        handleChangeTaskTitle,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

// Custom hook to use the List Context
export const useListContext = () => {
  const context = useContext(ListContext);

  if (!context) {
    console.log("ListContext não encontrado!");
  }

  return context;
};
