import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./ProfilePicturesDisplay.module.css";
import { useFetchContext } from "../contexts/FetchContext";

export default function ProfilePicturesDisplay() {
  const { usersInfos, randomUsers, images, setImages, API_KEY } =
    useFetchContext();
  const [query, setQuery] = useState();
  const { id } = useParams();

  useEffect(() => {
    setQuery(
      usersInfos[id].location
        ? usersInfos[id].location.country
        : randomUsers[id].location.country
    );
  }, []);

  useEffect(() => {
    axios(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: {
        Authorization: `${API_KEY}`,
      },
    })
      .then((res) => {
        setImages(res.data.photos);
      })
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <div className={styles.picturesDisplay}>
      <h3 className={styles.categoryTitle}>My album</h3>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.src.small} alt={image.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}
