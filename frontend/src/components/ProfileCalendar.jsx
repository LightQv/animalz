import React from "react";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./ProfileCalendar.module.css";
import { useFetchContext } from "../contexts/FetchContext";

export default function ProfileCalendar() {
  const { usersInfos } = useFetchContext();
  const { id } = useParams();

  return (
    usersInfos && (
      <div className={styles.calendar}>
        <Calendar value={usersInfos[id].disponibility[0]} />
      </div>
    )
  );
}
