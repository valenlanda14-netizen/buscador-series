import { useSearchParams } from "react-router-dom";
import { useSeries } from "../hooks/useSeries.js";
import Buscador from "../components/Buscador.jsx";
import ListaSeries from "../components/ListaSeries.jsx";

export default function Inicio() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const { series, cargando, error } = useSeries(q);

  return (
    <>
      <Buscador valorInicial={q} onBuscar={(texto) => setParams(texto ? { q: texto } : {})} />
      <h2>{q ? `Resultados para "${q}"` : "Series sugeridas"}</h2>
      {cargando && <p>Cargando...</p>}
      {error && <p role="alert">{error}</p>}
      {!cargando && !error && series.length === 0 && <p>No se encontraron series.</p>}
      <ListaSeries series={series} />
    </>
  );
}