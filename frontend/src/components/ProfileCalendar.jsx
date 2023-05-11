import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./ProfileCalendar.module.css";
import { useFetchContext } from "../contexts/FetchContext";

export default function ProfileCalendar() {
  // const { usersInfos } = useFetchContext();
  // const value = usersInfos.disponibility[0];

  return (
    <div className={styles.calendar}>
      <Calendar />
    </div>
  );
}
