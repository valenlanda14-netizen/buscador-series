import { useFavoritos } from "../hooks/useFavoritos.js";
import ListaSeries from "../components/ListaSeries.jsx";

export default function Favoritos() {
  const { favoritos } = useFavoritos();
  return (
    <>
      <h2>Mis favoritos</h2>
      {favoritos.length === 0 ? <p>Todavía no agregaste favoritos.</p> : <ListaSeries series={favoritos} />}
    </>
  );
}