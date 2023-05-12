import React, { useState } from "react";
import AnimalChoices from "../components/Animal-Choices/AnimalChoices";
import styles from "./Home.module.css";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const onClickHandle = () => {
    setShowModal(true);
  };
  return (
    <div className={styles.homePage}>
      <AnimalChoices showModal={showModal} />

      <img
        src="../src/assets/logo/Animalz.png"
        alt="logo"
        className={styles.logo}
      />
      <div className={styles.buttons}>
        <button type="button" className={styles.button}>
          Register
        </button>
        <button type="button" className={styles.button} onClick={onClickHandle}>
          Log in
        </button>
      </div>
    </div>
  );
}
