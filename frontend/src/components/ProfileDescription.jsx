import React from "react";
import styles from "./ProfileDescription.module.css";

export default function ProfileDescription() {
  return (
    <div className={styles.description}>
      <h3>City, Country</h3>
      <h4>Speaks: language</h4>
      <h5>Activities I'm interested in: cultural_interests</h5>
      <h5>Places I want to visit: geography_interest</h5>
      <h5>How I want to travel: locomotion</h5>
      <h5>My budget: budget</h5>
      <h5>Availability for travel: travel_duration</h5>
    </div>
  );
}
