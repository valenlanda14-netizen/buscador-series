import { useState } from "react";

export default function Buscador({ valorInicial, onBuscar }) {
  const [texto, setTexto] = useState(valorInicial);

  const enviar = (e) => {
    e.preventDefault();
    onBuscar(texto.trim());
  };

  return (
    <form className="buscador" onSubmit={enviar}>
      <label htmlFor="busqueda">Buscar una serie</label>
      <input
        id="busqueda"
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Ej: breaking bad"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}