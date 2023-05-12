import React from "react";
import styles from "./ProfileDetails.module.css";
import ProfileTopInfos from "../components/ProfileTopInfos";
import ProfileDescription from "../components/ProfileDescription";
import ProfilePicturesDisplay from "../components/ProfilePicturesDisplay";
import ProfileCalendar from "../components/ProfileCalendar";
import InterestPoints from "../components/InterestPoints";

export default function ProfileDetails() {
  return (
    <main className={styles.profileDetailsPage}>
      <ProfileTopInfos />
      <ProfileDescription />
      <ProfileCalendar />
      <ProfilePicturesDisplay />
      <div className={styles.mapDisplay}>
        <h3 className={styles.categoryTitle}>Places I'd like to visit :</h3>
        <InterestPoints />
      </div>
    </main>
  );
}
