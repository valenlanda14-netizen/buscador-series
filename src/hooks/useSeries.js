import { useState, useEffect } from "react";

export function useSeries(query) {
  const [series, setSeries] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = query || "drama";
    setCargando(true);
    setError(null);
    fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((data) => setSeries(data.map((d) => d.show)))
      .catch(() => setError("No se pudieron cargar las series."))
      .finally(() => setCargando(false));
  }, [query]);

  return { series, cargando, error };
}

export function useSerie(id) {
  const [serie, setSerie] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then(setSerie)
      .catch(() => setError("No se pudo cargar la serie."))
      .finally(() => setCargando(false));
  }, [id]);

  return { serie, cargando, error };
}