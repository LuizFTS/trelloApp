import { useListContext } from "../hooks/useListContext";

import Card from "./Card";
import CardAddContent from "./CardAddContent";
import styles from "./Main.module.css";

import React, { useEffect, useState } from "react";

const Main = () => {
  const { data, setData } = useListContext();

  const handleTitleChange = (text, id) => {
    let newList = data.filter((item) => {
      if (item.id === id) {
        item.name = text;
      }
      return item;
    });
    setData(newList);
  };

  /* useEffect(() => {
    console.log(data);
  }, [data]); */
  /* console.log(data); */

  const handleAddList = (e) => {
    e.preventDefault();
    console.log("teste");
  };

  return (
    <div className={styles.main}>
      {data <= 0 ? (
        <></>
      ) : (
        data.map((i) => (
          <Card data={i} key={i.id} clickFunction={handleTitleChange} />
        ))
      )}
      <CardAddContent handleAddList={handleAddList} />
    </div>
  );
};

export default Main;
