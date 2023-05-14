// CSS module file
import styles from "./Main.module.css";

// Components
import Card from "./CardComponent/Card";
import CardAddContent from "./CardComponent/CardAddContent";

// Context
import { useListContext } from "../context/ListContext";

const Main = () => {
  const { data, setData } = useListContext();

  const handleAddList = (newList) => {
    console.log(newList);

    setData((prevState) => {
      return [...prevState, newList];
    });
  };

  return (
    <div className={styles.main}>
      {data <= 0 ? (
        <></>
      ) : (
        data.map((item) => <Card listItem={item} key={item.id} />)
      )}
      <CardAddContent handleAddList={handleAddList} />
    </div>
  );
};

export default Main;
