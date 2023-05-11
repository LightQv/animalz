import PropTypes from "prop-types";
import { createContext, useState, useMemo, useContext } from "react";

const FetchContext = createContext();

export default FetchContext;

export function FetchContextProvider({ children }) {
  // States
  const [usersInfos, setUsersInfos] = useState([]);
  const [randomUsers, setRandomUsers] = useState([]);
  const [images, setImages] = useState([]);

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

  return (
    <FetchContext.Provider value={value}>{children}</FetchContext.Provider>
  );
}

// Custom hook à utiliser dans vos imports de Context
export const useFetchContext = () => useContext(FetchContext);

FetchContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
