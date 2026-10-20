import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext.jsx";

export function useFavoritos() {
  return useContext(FavoritosContext);
}