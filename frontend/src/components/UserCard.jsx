import React from "react";
import PropTypes from "prop-types";
import styles from "./UserCard.module.css";

export default function UserCard({ user }) {
  return <div className={styles.userCard}>{user.id}</div>;
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
