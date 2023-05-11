import axios from "axios";
import PropTypes from "prop-types";
import axios from "axios";
import { createContext, useState, useEffect, useMemo, useContext, useEffect } from "react";

const FetchContext = createContext();

export default FetchContext;

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export function FetchContextProvider({ children }) {
  // States
  const [usersInfos, setUsersInfos] = useState(null);
  const [randomUsers, setRandomUsers] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((response) => setUsersInfos(response.data));

    axios
      .get("https://randomuser.me/api/?results=8")
      .then((response) => setRandomUsers(response.data.results));
  }, []);

  // Memo pour optimisation => empêche les rerenders intempestifs au moindre changement de state
  //  - Passer les getter et setter de vos states entre les accolades, et le getter dans le tableau
  //    de dépendances
  const value = useMemo(
    () => ({
      usersInfos,
      setUsersInfos,
      randomUsers,
      setRandomUsers,
      images,
      setImages,
    }),
    [usersInfos, randomUsers, images]
  );
  useEffect(getImages, []);

  return (
    <FetchContext.Provider value={value}>{children}</FetchContext.Provider>
  );
}

// Custom hook à utiliser dans vos imports de Context
export const useFetchContext = () => useContext(FetchContext);

FetchContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
