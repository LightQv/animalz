import React from "react";
import ProfileTopInfos from "../components/ProfileTopInfos";
import ProfileDescription from "../components/ProfileDescription";
import ProfilePicturesDisplay from "../components/ProfilePicturesDisplay";
import ProfileCalendar from "../components/ProfileCalendar";
import styles from "./ProfileDetails.module.css";

export default function ProfileDetails() {
  return (
    <main className={styles.profileDetailsPage}>
      <ProfileTopInfos />
      <ProfileDescription />
      <ProfileCalendar />
      <ProfilePicturesDisplay />
    </main>
  );
}
