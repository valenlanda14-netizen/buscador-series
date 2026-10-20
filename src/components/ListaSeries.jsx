import TarjetaSerie from "./TarjetaSerie.jsx";

export default function ListaSeries({ series }) {
  return (
    <section className="grilla">
      {series.map((s) => (
        <TarjetaSerie key={s.id} serie={s} />
      ))}
    </section>
  );
}