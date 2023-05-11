import React from "react";
import styles from "./ProfileTopInfos.module.css";

export default function ProfileTopInfos() {
  return (
    <div className={styles.topInfos}>
      <img src="" alt="profile" />
      <div className={styles.mainInfos}>
        <h2>Name, age</h2>
        <div className={styles.animalsInfos}>
          <img src="" alt="travel animal" />
          <img src="" alt="climate animal" />
        </div>
      </div>
    </div>
  );
}
