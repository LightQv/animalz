import React from "react";
import { useParams } from "react-router-dom";
import { useFetchContext } from "../contexts/FetchContext";
import styles from "./ProfileTopInfos.module.css";
import lizard from "../assets/images/007-lzard-courb.png";
import cat from "../assets/images/007-chat-noir.png";
import guepard from "../assets/images/008-silhouette-fline-gupard.png";
import turtle from "../assets/images/008-tortue-face-droite.png";
import bear from "../assets/images/004-silhouette-vue-ct-ours.png";
import frog from "../assets/images/002-frop-tropical.png";
import lion from "../assets/images/001-lion.png";
import fox from "../assets/images/003-renard-assis.png";
import editProfile from "../assets/icons/001-edit.png";
import lucie from "../assets/images/Lucie.jpg";

export default function ProfileTopInfos() {
  const { coverImage, randomUsers, usersInfos } = useFetchContext();
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
  const randomPhoto = Math.floor(Math.random() * 5);

  return (
    <div className={styles.topDescription}>
      <img
        src={coverImage[randomPhoto].src.large2x}
        alt="cover-img"
        className={styles.coverPicture}
      />
      <div className={styles.topInfos}>
        <img
          src={`${id === "0" ? lucie : randomUsers[id].picture.large}`}
          alt="profile-pic"
          className={styles.profileImg}
        />
        {id === "0" ? (
          <button type="button" className={styles.editImg}>
            <img src={editProfile} alt="edit the profile" />
          </button>
        ) : null}
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
