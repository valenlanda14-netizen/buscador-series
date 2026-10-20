import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Inicio from "./pages/Inicio.jsx";
import Detalle from "./pages/Detalle.jsx";
import Favoritos from "./pages/Favoritos.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/serie/:id" element={<Detalle />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </main>
    </>
  );
}