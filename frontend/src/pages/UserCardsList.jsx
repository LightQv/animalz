import UserCard from "../components/UserCard";
import { useFetchContext } from "../contexts/FetchContext";
import styles from "./UserCardsList.module.css";

export default function UserCardsList() {
  const { usersInfos, randomUsers } = useFetchContext();
  return (
    <div className={styles.userCardPage}>
      <h1>Cat</h1>
      <h3>Selection of profile whom choosed the same Totem animal.</h3>
      <div className={styles.userCardList}>
        {randomUsers &&
          usersInfos &&
          usersInfos.map((user) => {
            return <UserCard user={user} />;
          })}
      </div>
    </div>
  );
}
