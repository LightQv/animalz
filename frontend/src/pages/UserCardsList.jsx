// import React, { useEffect } from "react";
// import axios from "axios";
import styles from "./UserCardsList.module.css";
// import UserCard from "../components/UserCard";

export default function UserCardsList() {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/users")
  //     .then(response => console.log(response.data));
  //     .catch(error => console.log(error))
  // }, []);

  return (
    <div className={styles.userCardList}>
      <h1>UserCardsList</h1>
    </div>
  );
}
