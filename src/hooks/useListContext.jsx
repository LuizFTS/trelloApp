import { useContext } from "react";
import { ListContext } from "../context/ListContext";

export const useListContext = () => {
  const context = useContext(ListContext);

  if (!context) {
    console.log("ListContext não encontrado!");
  }

  return context;
};
