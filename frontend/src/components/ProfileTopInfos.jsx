import React from "react";
import { useFetchContext } from "../contexts/FetchContext";
import styles from "./ProfileTopInfos.module.css";

export default function ProfileTopInfos() {
  const { images } = useFetchContext();
  //  const url = "https://images.pexels.com/photos/";

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
            <img src="../src/assets/images/chat-noir.png" alt="travel animal" />
            <img
              src="../src/assets/images/004-silhouette-vue-ct-ours.png"
              alt="climate animal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
