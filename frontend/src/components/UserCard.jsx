import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useFetchContext } from "../contexts/FetchContext";
import styles from "./UserCard.module.css";
import liked from "../assets/icons/liked.png";
import favorite from "../assets/icons/favorite.png";
import bear from "../assets/images/004-silhouette-vue-ct-ours.png";
import frog from "../assets/images/002-frop-tropical.png";
import lion from "../assets/images/001-lion.png";
import fox from "../assets/images/003-renard-assis.png";

export default function UserCard({ user }) {
  const { usersInfos, randomUsers } = useFetchContext();
  let climateAnimal = null;
  if (user.climate_animal === "lion") {
    climateAnimal = lion;
  } else if (user.climate_animal === "polar bear") {
    climateAnimal = bear;
  } else if (user.climate_animal === "frog") {
    climateAnimal = frog;
  } else if (user.climate_animal === "fox") {
    climateAnimal = fox;
  }

  return (
    <Link to={`/profile/${user.id}`}>
      <div className={styles.userCard}>
        <img src={randomUsers[user.id].picture.large} alt={user.id} />
        {usersInfos[0].liked_ids.includes(user.id) ? (
          <img src={liked} alt="liked" />
        ) : null}
        {usersInfos[0].favorite_ids.includes(user.id) ? (
          <img src={favorite} alt="liked" />
        ) : null}
        {user.climate_animal ? (
          <img src={climateAnimal} alt="climate animal" />
        ) : null}
        <h1>{user.name ? user.name.first : randomUsers[user.id].name.first}</h1>
        <h2>{user.age ? user.age : randomUsers[user.id].dob.age}</h2>
      </div>
    </Link>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    climate_animal: PropTypes.string.isRequired,
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
