import React from "react";
import styles from "./ProfilePicturesDisplay.module.css";
// import { useFetchContext } from "../contexts/FetchContext";

export default function ProfilePicturesDisplay() {
  //   const { images } = useFetchContext();

  return (
    <div className={styles.picturesDisplay}>
      {/* <ul>
        {images.map((image) => (
          <li key={image.id}>{image.url}</li>
        ))}
      </ul> */}
    </div>
  );
}
