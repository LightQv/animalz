import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import liked from "../assets/icons/liked.png";
import favorite from "../assets/icons/favorite.png";
import styles from "./ProfileDescription.module.css";
import { useFetchContext } from "../contexts/FetchContext";

export default function ProfileDescription() {
  const { usersInfos, randomUsers } = useFetchContext();
  const { id } = useParams();

  const [language, setLanguage] = useState("");
  const [culuralInterests, setCulturalInterests] = useState([]);
  const [geoInterests, setGeoInterests] = useState([]);
  const [locomotion, setLocomotion] = useState([]);
  const [budget, setBudget] = useState([]);
  const [travelDuration, setTravelDuration] = useState([]);

  useEffect(() => {
    setLanguage(usersInfos[id].language);
    setCulturalInterests(usersInfos[id].cultural_interests);
    setGeoInterests(usersInfos[id].geography_interests);
    setLocomotion(usersInfos[id].locomotion);
    setBudget(usersInfos[id].budget[0]);
    setTravelDuration(usersInfos[id].travel_duration);
  }, []);

  return (
    usersInfos && (
      <div className={styles.description}>
        <section>
          <h3 className={styles.categoryTitle}>Who am I ?</h3>
          <p className={styles.location}>
            I'm from :{" "}
            {usersInfos[id].location
              ? usersInfos[id].location.city
              : randomUsers[id].location.city}
            ,{" "}
            {usersInfos[id].location
              ? usersInfos[id].location.country
              : randomUsers[id].location.country}
          </p>
          <h4>I speak :</h4>
          <p>
            {language.charAt(0).toUpperCase() + language.slice(1).toLowerCase()}
          </p>
          <div>
            <h5>I'm interested in :</h5>
            <ul>
              {culuralInterests.map((el) => (
                <li key={el}>
                  {el.charAt(0).toUpperCase()}
                  {el.slice(1).toLowerCase()}
                </li>
              ))}
            </ul>
            <h5>I'd like to visit :</h5>
            <ul>
              {geoInterests.map((el) => (
                <li key={el}>
                  {el.charAt(0).toUpperCase()}
                  {el.slice(1).toLowerCase()}
                </li>
              ))}
            </ul>
            <h5>I want to travel by :</h5>
            <ul>
              {locomotion.map((el) => (
                <li key={el}>
                  {el.charAt(0).toUpperCase()}
                  {el.slice(1).toLowerCase()}
                </li>
              ))}
            </ul>
            <h5>My budget : {`${budget[0]} - ${budget[1]} €`}</h5>
            <h5>Availability for travel : {travelDuration} days</h5>
          </div>
        </section>
        {id !== "0" ? (
          <section className={styles.likeFavButtons}>
            {id !== "0" ? (
              <button
                type="button"
                onClick={() => {
                  if (!usersInfos[0].liked_ids.includes(id)) {
                    usersInfos[0].liked_ids.push(id);
                  } else {
                    usersInfos[0].liked_ids.splice(
                      usersInfos[0].liked_ids.indexOf(id),
                      1
                    );
                  }
                }}
                className={styles.likeButton}
              >
                <img className={styles.liked} src={liked} alt="liked" />
              </button>
            ) : null}
            {id !== "0" ? (
              <button
                type="button"
                onClick={() => {
                  if (!usersInfos[0].favorite_ids.includes(id)) {
                    usersInfos[0].favorite_ids.push(id);
                  } else {
                    usersInfos[0].favorite_ids.splice(
                      usersInfos[0].favorite_ids.indexOf(id),
                      1
                    );
                  }
                }}
                className={styles.favButton}
              >
                <img
                  className={styles.favorite}
                  src={favorite}
                  alt="favorite"
                />
              </button>
            ) : null}
          </section>
        ) : null}
      </div>
    )
  );
}
