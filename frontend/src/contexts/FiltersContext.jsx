import PropTypes from "prop-types";
import { createContext, useState, useMemo, useContext } from "react";

const FiltersContext = createContext();

export default FiltersContext;

export function FiltersContextProvider({ children }) {
  // States
  const [isFavoriteFiltered, setIsFavoriteFiltered] = useState(false);
  const [isLikedFiltered, setIsLikedFiltered] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState(null);

  // Memo pour optimisation => empêche les rerenders intempestifs au moindre changement de state
  //  - Passer les getter et setter de vos states entre les accolades, et le getter dans le tableau
  //    de dépendances
  const value = useMemo(
    () => ({
      isFavoriteFiltered,
      setIsFavoriteFiltered,
      isLikedFiltered,
      setIsLikedFiltered,
      filteredUsers,
      setFilteredUsers,
    }),
    [isFavoriteFiltered, isLikedFiltered, filteredUsers]
  );

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
}

// Custom hook à utiliser dans vos imports de Context
export const useFiltersContext = () => useContext(FiltersContext);

FiltersContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
