import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useState, useEffect, useMemo, useContext } from "react";

const FetchContext = createContext();

export default FetchContext;

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export function FetchContextProvider({ children }) {
  // States
  const [usersInfos, setUsersInfos] = useState(null);
  const [randomUsers, setRandomUsers] = useState(null);
  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState([]);

  const getCoverImage = () => {
    axios("https://api.pexels.com/v1/search?query=voyage", {
      headers: {
        Authorization: `${API_KEY}`,
      },
    })
      .then((data) => {
        setCoverImage(data.data.photos[1]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((response) => setUsersInfos(response.data))
      .catch((err) => console.error(err));

    axios
      .get("https://randomuser.me/api/?results=8")
      .then((response) => setRandomUsers(response.data.results))
      .catch((err) => console.error(err));
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
      coverImage,
      setCoverImage,
      API_KEY,
    }),
    [usersInfos, randomUsers, images, coverImage]
  );

  useEffect(getCoverImage, []);

  return (
    <FetchContext.Provider value={value}>{children}</FetchContext.Provider>
  );
}

// Custom hook à utiliser dans vos imports de Context
export const useFetchContext = () => useContext(FetchContext);

FetchContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
