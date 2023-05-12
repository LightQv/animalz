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
import liked from "../assets/icons/liked.png";
import favorite from "../assets/icons/favorite.png";
import editProfile from "../assets/icons/001-edit.png";
import lucie from "../assets/images/Lucie.jpg";

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
    <div className={styles.topDescription}>
      <img
        src={images.src.large2x}
        alt="cover-img"
        className={styles.coverPicture}
      />
      <div className={styles.topInfos}>
        {id !== "0" ? (
          <button
            type="button"
            onClick={() => {
              if (!usersInfos[0].liked_ids.includes(id)) {
                usersInfos[0].liked_ids.push(id);
              } else {
                usersInfos[0].liked_ids.splice(
                  usersInfos[0].liked_ids.indexOf(id),
                  1
                );
              }
            }}
          >
            Like
            <img className={styles.liked} src={liked} alt="liked" />
          </button>
        ) : null}
        {id !== "0" ? (
          <button
            type="button"
            onClick={() => {
              if (!usersInfos[0].favorite_ids.includes(id)) {
                usersInfos[0].favorite_ids.push(id);
              } else {
                usersInfos[0].favorite_ids.splice(
                  usersInfos[0].favorite_ids.indexOf(id),
                  1
                );
              }
            }}
          >
            Favorite
            <img className={styles.favorite} src={favorite} alt="favorite" />
          </button>
        ) : null}
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
