import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <img
        src="../src/assets/logo/Animalz.png"
        alt="logo"
        className={styles.logo}
      />
      <div className={styles.buttons}>
        <button type="button" className={styles.button}>
          Register
        </button>
        <button type="button" className={styles.button}>
          Log in
        </button>
      </div>
    </div>
  );
}
