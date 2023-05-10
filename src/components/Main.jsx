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

  return (
    <div className={styles.main}>
      {data <= 0 ? (
        <></>
      ) : (
        data.map((i) => (
          <Card data={i} key={i.id} clickFunction={handleTitleChange} />
        ))
      )}
      <CardAddContent />
    </div>
  );
};

export default Main;
