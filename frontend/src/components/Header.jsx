import { useState } from "react";
import { NavLink } from "react-router-dom";
import avatar from "../assets/icons/avatar.png";
import activeAvatar from "../assets/icons/avatar-active.png";
import animalz from "../assets/icons/animalz.png";
import activeAnimalz from "../assets/icons/animalz-active.png";
import message from "../assets/icons/message.png";
import activeMessage from "../assets/icons/message-active.png";
import filter from "../assets/icons/filter.png";
import activeFilter from "../assets/icons/filter-active.png";
import styles from "./Header.module.css";

export default function Header() {
  const [showFilterPage, setShowFilterPage] = useState(false);
  const [filterBarActive, setFilterBarActive] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [like, setLike] = useState(false);
  const [languageFilter, setLanguageFilter] = useState("all");

  const handleChangePage = () => {
    setShowFilterPage(false);
    setFilterBarActive(false);
  };

  return (
    <nav>
      <ul className={styles.navContainer}>
        <li className={styles.linkContainer}>
          <NavLink
            to="/profile/1"
            className={({ isActive }) =>
              isActive ? styles.activeNavContent : styles.navContent
            }
            onClick={() => handleChangePage()}
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <img
                    src={activeAvatar}
                    alt="profile-icon"
                    className={styles.navIcon}
                  />
                  <p className={styles.navText}>Profile</p>
                </>
              ) : (
                <>
                  <img
                    src={avatar}
                    alt="profile-icon"
                    className={styles.navIcon}
                  />
                </>
              )
            }
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles-list"
            className={({ isActive }) =>
              isActive ? styles.activeNavContent : styles.navContent
            }
            onClick={() => setShowFilterPage(true)}
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <img
                    src={activeAnimalz}
                    alt="results-icon"
                    className={styles.navIcon}
                  />
                  <p className={styles.navText}>Finder</p>
                </>
              ) : (
                <>
                  <img
                    src={animalz}
                    alt="results-icon"
                    className={styles.navIcon}
                  />
                </>
              )
            }
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/no"
            className={({ isActive }) =>
              isActive ? styles.activeNavContent : styles.navContent
            }
            onClick={() => handleChangePage()}
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <img
                    src={activeMessage}
                    alt="message-icon"
                    className={styles.navIcon}
                  />
                  <p className={styles.navText}>Messenger</p>
                </>
              ) : (
                <>
                  <img
                    src={message}
                    alt="message-icon"
                    className={styles.navIcon}
                  />
                </>
              )
            }
          </NavLink>
        </li>
        {showFilterPage ? (
          <li
            className={
              filterBarActive ? styles.activeNavContent : styles.navContent
            }
            onClick={() => setFilterBarActive(!filterBarActive)}
          >
            <img
              src={filterBarActive ? activeFilter : filter}
              alt="filter-icon"
              className={styles.navIcon}
            />
          </li>
        ) : null}
      </ul>
      {showFilterPage && filterBarActive ? (
        <section className={styles.filterContainer}>
          <div className={styles.likeContainer}>
            <button
              className={
                favorite ? styles.activeButtonContainer : styles.buttonContainer
              }
              onClick={() => setFavorite(!favorite)}
            >
              Favorites
            </button>
            <button
              className={
                like ? styles.activeButtonContainer : styles.buttonContainer
              }
              onClick={() => setLike(!like)}
            >
              Likes
            </button>
          </div>
          <h3 className={styles.categoryTitle}>Language</h3>
          <div className={styles.categoryContainer}>
            <button
              className={
                languageFilter === "all"
                  ? styles.activeButtonContainer
                  : styles.buttonContainer
              }
              onClick={() => setLanguageFilter("all")}
            >
              All
            </button>
            <button
              className={
                languageFilter === "dutch"
                  ? styles.activeButtonContainer
                  : styles.buttonContainer
              }
              onClick={() => setLanguageFilter("dutch")}
            >
              Dutch
            </button>
            <button
              className={
                languageFilter === "english"
                  ? styles.activeButtonContainer
                  : styles.buttonContainer
              }
              onClick={() => setLanguageFilter("english")}
            >
              English
            </button>
            <button
              className={
                languageFilter === "french"
                  ? styles.activeButtonContainer
                  : styles.buttonContainer
              }
              onClick={() => setLanguageFilter("french")}
            >
              French
            </button>
            <button
              className={
                languageFilter === "spanish"
                  ? styles.activeButtonContainer
                  : styles.buttonContainer
              }
              onClick={() => setLanguageFilter("spanish")}
            >
              Spanish
            </button>
          </div>
        </section>
      ) : null}
    </nav>
  );
}
