import { useParams, Link } from "react-router-dom";
import { useSerie } from "../hooks/useSeries.js";
import { useFavoritos } from "../hooks/useFavoritos.js";

export default function Detalle() {
  const { id } = useParams();
  const { serie, cargando, error } = useSerie(id);
  const { favoritos, alternar } = useFavoritos();

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p role="alert">{error}</p>;

  const esFavorita = favoritos.some((s) => s.id === serie.id);
  const resumen = serie.summary ? serie.summary.replace(/<[^>]+>/g, "") : "Sin descripción.";

  return (
    <article className="detalle">
      <Link to="/">← Volver</Link>
      <h2>{serie.name}</h2>
     {serie.image && <img src={serie.image.medium} alt={`Póster de ${serie.name}`} />}
      <p>{resumen}</p>
      <p>Géneros: {serie.genres.join(", ") || "s/d"}</p>
      <p>Puntaje: {serie.rating?.average ?? "s/d"}</p>
      <button onClick={() => alternar(serie)}>
        {esFavorita ? "Quitar de favoritos" : "Agregar a favoritos"}
      </button>
    </article>
  );
}