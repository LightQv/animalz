import React from "react";
import styles from "./ProfileDescription.module.css";

export default function ProfileDescription() {
  return (
    <div className={styles.description}>
      <h3>City, Country</h3>
      <h4>language</h4>
      <h5>cultural_interests</h5>
      <h5>geography_interest</h5>
      <h5>locomotion</h5>
      <h5>budget</h5>
      <h5>travel_duration</h5>
      <h5>disponibility(calendar)</h5>
    </div>
  );
}
