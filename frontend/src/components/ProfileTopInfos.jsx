import React from "react";
import { useParams } from "react-router-dom";
import { useFetchContext } from "../contexts/FetchContext";
import styles from "./ProfileTopInfos.module.css";
import lizard from "../assets/images/lezard-courbe.png";
import cat from "../assets/images/chat-noir.png";
import guepard from "../assets/images/silhouette-feline-guepard.png";
import turtle from "../assets/images/tortue-face-a-droite.png";
import bear from "../assets/images/004-silhouette-vue-ct-ours.png";
import frog from "../assets/images/002-frop-tropical.png";
import lion from "../assets/images/001-lion.png";
import fox from "../assets/images/003-renard-assis.png";

export default function ProfileTopInfos() {
  const { images, randomUsers, usersInfos } = useFetchContext();
  const { id } = useParams();

  let totemAnimal = null;
  if (usersInfos[id].totem_animal === "lizard") {
    totemAnimal = lizard;
  } else if (usersInfos[id].totem_animal === "cat") {
    totemAnimal = cat;
  } else if (usersInfos[id].totem_animal === "guepard") {
    totemAnimal = guepard;
  } else if (usersInfos[id].totem_animal === "turtle") {
    totemAnimal = turtle;
  }

  let climateAnimal = null;
  if (usersInfos[id].climate_animal === "lion") {
    climateAnimal = lion;
  } else if (usersInfos[id].climate_animal === "polar bear") {
    climateAnimal = bear;
  } else if (usersInfos[id].climate_animal === "frog") {
    climateAnimal = frog;
  } else if (usersInfos[id].climate_animal === "fox") {
    climateAnimal = fox;
  }

  return (
    <div
      className={styles.coverPicture}
      style={{
        backgroundImage: `url(${images.src.large2x})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.topInfos}>
        <img
          src={`${randomUsers[id].picture.large}`}
          alt="profile-pic"
          className={styles.profileImg}
        />
        <div className={styles.mainInfos}>
          <h3>
            {usersInfos[id].name
              ? usersInfos[id].name.first
              : randomUsers[id].name.first}{" "}
            {usersInfos[id].name
              ? usersInfos[id].name.last
              : randomUsers[id].name.last}
            , {randomUsers[id].dob.age}
          </h3>
          <div>
            {usersInfos[id].totem_animal ? (
              <img
                src={totemAnimal}
                alt="climate animal"
                className={styles.totemImg}
              />
            ) : null}
            {usersInfos[id].climate_animal ? (
              <img
                src={climateAnimal}
                alt="climate animal"
                className={styles.climateImg}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
