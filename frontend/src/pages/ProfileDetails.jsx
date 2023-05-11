import React from "react";
import Header from "../components/Header";
import ProfileTopInfos from "../components/ProfileTopInfos";
import ProfileDescription from "../components/ProfileDescription";
import ProfilePicturesDisplay from "../components/ProfilePicturesDisplay";

export default function ProfileDetails() {
  return (
    <>
      <Header />
      <ProfileTopInfos />
      <ProfileDescription />
      <ProfilePicturesDisplay />
    </>
  );
}
