import React, { useState } from "react";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [list, setList] = useState([]);

  const addListItem = (item) => {
    setList([...list, item]);
  };

  const removeItem = (e) => {
    const itemIndex = e.currentTarget.dataset.index;
    const updatedArray = list.filter(
      (item, index) => index !== Number(itemIndex)
    );
    setList([...updatedArray]);
  };

  return (
    <div className={styles.container}>
      <main>
        <List list={list} removeItem={removeItem} />
        <Form addListItem={addListItem} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
