import { useEffect } from "react";
import { useFiltersContext } from "../contexts/FiltersContext";
import UserCard from "../components/UserCard";
import { useFetchContext } from "../contexts/FetchContext";
import styles from "./UserCardsList.module.css";

export default function UserCardsList() {
  const { usersInfos, randomUsers } = useFetchContext();
  const {
    isLikedFiltered,
    isFavoriteFiltered,
    filteredUsers,
    setFilteredUsers,
  } = useFiltersContext();

  useEffect(() => {
    setFilteredUsers(usersInfos);
  }, []);

  useEffect(() => {
    if (isFavoriteFiltered || isLikedFiltered) {
      if (isFavoriteFiltered) {
        setFilteredUsers(
          usersInfos.filter((user) =>
            usersInfos[0].favorite_ids.includes(user.id)
          )
        );
      }
      if (isLikedFiltered) {
        setFilteredUsers(
          usersInfos.filter((user) => usersInfos[0].liked_ids.includes(user.id))
        );
      }
    } else {
      setFilteredUsers(usersInfos);
    }
  }, [isFavoriteFiltered, isLikedFiltered]);

  return (
    <div className={styles.userCardPage}>
      <h1>Cat</h1>
      <h3>Selection of profile whom choosed the same Totem animal.</h3>
      <div className={styles.userCardList}>
        {randomUsers &&
          filteredUsers &&
          filteredUsers.map((user) => {
            if (user.id !== 1) {
              return <UserCard key={user.id} user={user} />;
            }
            return null;
          })}
      </div>
    </div>
  );
}
