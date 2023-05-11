import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./AnimalChoices.module.css";

export default function AnimalChoices(props) {
  const { showModal } = props;
  if (!showModal) return null;
  return (
    <div className={styles.animalChoicesmModal}>
      <h2 className={styles.title}> Hey Lucie, </h2>
      <h2 className={styles.title}> which animal are you?</h2>

      <div className={styles.buttons}>
        <Link to="/profiles-list">
          <button type="button" className={styles.animals}>
            <img src="../../src/assets/images/lezard-courbe.png" alt="Lizard" />
            <h3>Lizard</h3>
            <p>
              If you are more, quiet holidays in the sun, idleness, basking...{" "}
            </p>
          </button>
        </Link>
        <Link to="/profiles-list">
          <button type="button" className={styles.animals}>
            <img src="../../src/assets/images/chat-noir.png" alt="Cat" />
            <h3>Cat</h3>
            <p>
              If you are more, cultural holidays, discoveries and curiosities...
            </p>
          </button>
        </Link>

        <Link to="/profiles-list">
          <button type="button" className={styles.animals}>
            <img
              src="../../src/assets/images/silhouette-feline-guepard.png"
              alt="Cheetah"
            />
            <h3>Cheetah</h3>
            <p>
              If you are more, sports holidays, hikes and outdoor activities...
            </p>
          </button>
        </Link>

        <Link to="/profiles-list">
          <button type="button" className={styles.animals}>
            <img
              src="../../src/assets/images/tortue-face-a-droite.png"
              alt="Tortoise"
            />
            <h3>Tortoise</h3>
            <p>
              If you are more, motorhome vacation, road trip at your own pace...
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
}

AnimalChoices.propTypes = {
  showModal: PropTypes.string.isRequired,
};
