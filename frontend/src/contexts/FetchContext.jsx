import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useState, useMemo, useContext, useEffect } from "react";

const FetchContext = createContext();

export default FetchContext;

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export function FetchContextProvider({ children }) {
  // States
  const [usersInfos, setUsersInfos] = useState([]);
  const [randomUsers, setRandomUsers] = useState([]);
  const [images, setImages] = useState([]);

  const getImages = () => {
    axios("https://api.pexels.com/v1/search?query=voyage", {
      headers: {
        Authorization: `${API_KEY}`,
      },
    })
      .then((data) => {
        setImages(data.data.photos[1]);
      })
      .catch((err) => console.error(err));
  };

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
