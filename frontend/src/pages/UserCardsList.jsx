import styles from "./UserCardsList.module.css";
import UserCard from "../components/UserCard";
import { useFetchContext } from "../contexts/FetchContext";

export default function UserCardsList() {
  const { usersInfos } = useFetchContext();

  return (
    <div className={styles.userCardList}>
      <h1>UserCardsList</h1>
      {usersInfos.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );
}
