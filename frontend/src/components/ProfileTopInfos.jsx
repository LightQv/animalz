import React from "react";
import { useFetchContext } from "../contexts/FetchContext";
import styles from "./ProfileTopInfos.module.css";

export default function ProfileTopInfos() {
  const { images, randomUsers, usersInfos } = useFetchContext();

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
          <h2>
            {" "}
            {randomUsers[1].name.first} {randomUsers[1].name.last}{" "}
            {randomUsers[1].dob.age}
          </h2>
          <div className={styles.animalsInfos}>
            <img src={usersInfos.totem_animal} alt="travel animal" />
            <img src="" alt="climate animal" />
            <img src="" alt="travel animal" />
            <img src="" alt="climate animal" />
          </div>
        </div>
      </div>
    </div>
  );
}
