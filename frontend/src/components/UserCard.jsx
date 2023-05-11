import React from "react";
import PropTypes from "prop-types";
import { useFetchContext } from "../contexts/FetchContext";
import styles from "./UserCard.module.css";

export default function UserCard({ user }) {
  const { randomUsers } = useFetchContext();
  return (
    <div
      className={styles.userCard}
      style={{
        backgroundImage: `url(${randomUsers[user.id].picture.large})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.userTitle}>
        <h3>{`${
          user.name ? user.name.first : randomUsers[user.id].name.first
        }, ${user.age ? user.age : randomUsers[user.id].dob.age}`}</h3>
      </div>
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
