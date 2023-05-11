import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFiltersContext } from "../contexts/FiltersContext";
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
  const [showFilterPage, setShowFilterPage] = useState(true);
  const [filterBarActive, setFilterBarActive] = useState(false);
  const [languageFilter, setLanguageFilter] = useState("all");
  const [animalFilter, setAnimalFilter] = useState("all");
  const [culturalFilter, setCulturalFilter] = useState("all");
  const [locomotionFilter, setLocomotionFilter] = useState("all");
  const {
    setIsLikedFiltered,
    isLikedFiltered,
    setIsFavoriteFiltered,
    isFavoriteFiltered,
  } = useFiltersContext();

  const handleChangePage = () => {
    setShowFilterPage(false);
    setFilterBarActive(false);
  };

  return (
    <nav>
      <ul className={styles.navContainer}>
        <li className={styles.linkContainer}>
          <NavLink
            to="/profile/0"
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
                <img
                  src={avatar}
                  alt="profile-icon"
                  className={styles.navIcon}
                />
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
                <img
                  src={animalz}
                  alt="results-icon"
                  className={styles.navIcon}
                />
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
                <img
                  src={message}
                  alt="message-icon"
                  className={styles.navIcon}
                />
              )
            }
          </NavLink>
        </li>
        {showFilterPage ? (
          <li
            className={
              filterBarActive ? styles.activeNavContent : styles.navContent
            }
          >
            <button
              type="button"
              onClick={() => setFilterBarActive(!filterBarActive)}
            >
              <img
                src={filterBarActive ? activeFilter : filter}
                alt="filter-icon"
                className={styles.navIcon}
              />
            </button>
          </li>
        ) : null}
      </ul>
      {showFilterPage && filterBarActive ? (
        <section className={styles.filterContainer}>
          <div className={styles.likeContainer}>
            <button
              type="button"
              className={
                isFavoriteFiltered
                  ? styles.activeButtonContainer
                  : styles.buttonContainer
              }
              onClick={() => setIsFavoriteFiltered(!isFavoriteFiltered)}
            >
              Favorites
            </button>
            <button
              type="button"
              className={
                isLikedFiltered
                  ? styles.activeButtonContainer
                  : styles.buttonContainer
              }
              onClick={() => setIsLikedFiltered(!isLikedFiltered)}
            >
              Likes
            </button>
          </div>
          <div>
            <h3 className={styles.categoryTitle}>Language</h3>
            <div className={styles.categoryContainer}>
              <button
                type="button"
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
                type="button"
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
                type="button"
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
                type="button"
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
                type="button"
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
            <h3 className={styles.categoryTitle}>Climate Animal</h3>
            <div className={styles.categoryContainer}>
              <button
                type="button"
                className={
                  animalFilter === "all"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setAnimalFilter("all")}
              >
                All
              </button>
              <button
                type="button"
                className={
                  animalFilter === "fox"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setAnimalFilter("fox")}
              >
                Fox
              </button>
              <button
                type="button"
                className={
                  animalFilter === "frog"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setAnimalFilter("frog")}
              >
                Frog
              </button>
              <button
                type="button"
                className={
                  animalFilter === "bear"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setAnimalFilter("bear")}
              >
                Polar Bear
              </button>
              <button
                type="button"
                className={
                  animalFilter === "lion"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setAnimalFilter("lion")}
              >
                Lion
              </button>
            </div>

            <h3 className={styles.categoryTitle}>Cultural Interest</h3>
            <div className={styles.categoryContainer}>
              <button
                type="button"
                className={
                  culturalFilter === "all"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setCulturalFilter("all")}
              >
                All
              </button>
              <button
                type="button"
                className={
                  culturalFilter === "drinks"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setCulturalFilter("drinks")}
              >
                Drinks
              </button>
              <button
                type="button"
                className={
                  culturalFilter === "food"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setCulturalFilter("food")}
              >
                Food
              </button>
              <button
                type="button"
                className={
                  culturalFilter === "landscapes"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setCulturalFilter("landscapes")}
              >
                Landscapes
              </button>
              <button
                type="button"
                className={
                  culturalFilter === "museums"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setCulturalFilter("museums")}
              >
                Museums
              </button>
            </div>
            <h3 className={styles.categoryTitle}>Locomotion</h3>
            <div className={styles.categoryContainer}>
              <button
                type="button"
                className={
                  locomotionFilter === "all"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setLocomotionFilter("all")}
              >
                All
              </button>
              <button
                type="button"
                className={
                  locomotionFilter === "bicycle"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setLocomotionFilter("bicycle")}
              >
                Bicycle
              </button>
              <button
                type="button"
                className={
                  locomotionFilter === "bus"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setLocomotionFilter("bus")}
              >
                Bus
              </button>
              <button
                type="button"
                className={
                  locomotionFilter === "car"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setLocomotionFilter("car")}
              >
                Car
              </button>
              <button
                type="button"
                className={
                  locomotionFilter === "feet"
                    ? styles.activeButtonContainer
                    : styles.buttonContainer
                }
                onClick={() => setLocomotionFilter("feet")}
              >
                Feet
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </nav>
  );
}
