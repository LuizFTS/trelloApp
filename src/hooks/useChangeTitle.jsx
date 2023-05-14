import { useState } from "react";

import { useListContext } from "./useListContext";

export const useChangeTitle = (initialTitle, taskId, listId) => {
  const { data, setData } = useListContext();
  const [title, setTitle] = useState(initialTitle);

  const handleChangeTitle = (text, taskId, listId) => {
    let newList = data.filter((item) => {
      if (item.id === listId) {
        item.tasks.map((task) => {
          if (task.id === taskId) {
            task.title === text;
            console.log(task);
            return task;
          }
        });
      }
      return item;
    });

    console.log(newList);
    /* setData(newList); */
  };

  return [title, handleChangeTitle];
};
