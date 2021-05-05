import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import styles from "../styles/Home.module.css";
import { connectToDatabase } from "../util/mongodb";

const Home = ({ properties }) => {
  const [list, setList] = useState([]);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  useEffect(() => {
    setList([...properties]);
  }, [properties]);

  const addListItem = async (item) => {
    // setList([...list, item]);
    // console.log(item);
    const data = await fetch(`http://localhost:3000/api/addItem?title=${item}`);
    refreshData();
  };

  const removeItem = async (id) => {
    console.log(id);
    const data = await fetch(`http://localhost:3000/api/removeItem?id=${id}`);
    console.log(data);
    refreshData();
    // setList([...updatedArray]);
  };

  return (
    <div className={styles.container}>
      <main>
        <Form addListItem={addListItem} />
        <List list={list} removeItem={removeItem} />
      </main>
      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  let data = await db.collection("todos").find({}).toArray();
  let properties = JSON.parse(JSON.stringify(data));
  // console.log(properties);
  return {
    props: { properties: properties },
  };
}
export default Home;
