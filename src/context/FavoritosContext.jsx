import { createContext, useState } from "react";

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const alternar = (serie) => {
    setFavoritos((prev) =>
      prev.some((s) => s.id === serie.id)
        ? prev.filter((s) => s.id !== serie.id)
        : [...prev, serie]
    );
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, alternar }}>
      {children}
    </FavoritosContext.Provider>
  );
}