import React from "react";
import styles from "./ProfileDetails.module.css";
import ProfileTopInfos from "../components/ProfileTopInfos";
import ProfileDescription from "../components/ProfileDescription";
import ProfilePicturesDisplay from "../components/ProfilePicturesDisplay";
import ProfileCalendar from "../components/ProfileCalendar";

export default function ProfileDetails() {
  return (
    <>
      <div className={styles.empty} />
      <ProfileTopInfos />
      <ProfileDescription />
      <ProfileCalendar />
      <ProfilePicturesDisplay />
    </>
  );
}
