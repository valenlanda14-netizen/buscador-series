import { Link } from "react-router-dom";
import { useFavoritos } from "../hooks/useFavoritos.js";

export default function TarjetaSerie({ serie }) {
  const { favoritos, alternar } = useFavoritos();
  const esFavorita = favoritos.some((s) => s.id === serie.id);

  return (
    <article className="tarjeta">
      <Link to={`/serie/${serie.id}`}>
        {serie.image ? (
          <img src={serie.image.medium} alt={`Póster de ${serie.name}`} />
        ) : (
          <div className="sin-imagen">Sin imagen</div>
        )}
        <h3>{serie.name}</h3>
      </Link>
      <p>{serie.premiered ? serie.premiered.slice(0, 4) : "s/f"}</p>
      <button onClick={() => alternar(serie)}>
        {esFavorita ? "Quitar de favoritos" : "Agregar a favoritos"}
      </button>
    </article>
  );
}