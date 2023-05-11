import React from "react";
import PropTypes from "prop-types";
import { useFetchContext } from "../contexts/FetchContext";
import styles from "./UserCard.module.css";

export default function UserCard({ user }) {
  const { randomUsers } = useFetchContext();
  return (
    <div className={styles.userCard}>
      <img src={randomUsers[user.id].picture.large} alt={user.id} />
      <h1>{user.name ? user.name.first : randomUsers[user.id].name.first}</h1>
      <h2>{user.age ? user.age : randomUsers[user.id].dob.age}</h2>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
