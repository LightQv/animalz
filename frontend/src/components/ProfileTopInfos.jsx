import React from "react";
import { useFetchContext } from "../contexts/FetchContext";
import styles from "./ProfileTopInfos.module.css";

export default function ProfileTopInfos() {
  const { images } = useFetchContext();

  return (
    <div
      className={styles.coverPicture}
      style={{
        backgroundImage: `url(${images.src.tiny})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
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
    </div>
  );
}
