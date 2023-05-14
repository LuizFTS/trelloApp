import { createContext, useState } from "react";

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
  return (
    <ListContext.Provider value={{ data, setData }}>
      {children}
    </ListContext.Provider>
  );
};
