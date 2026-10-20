import { NavLink } from "react-router-dom";
import { useFavoritos } from "../hooks/useFavoritos.js";

export default function Header() {
  const { favoritos } = useFavoritos();
  return (
    <header className="header">
      <h1>Patagonia Series</h1>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/favoritos">Favoritos ({favoritos.length})</NavLink>
      </nav>
    </header>
  );
}