# Confluencia Series

Aplicación en React para buscar series de TV usando la API pública de TVMaze, ver su detalle y guardarlas como favoritas.

## Librerías
- React + Vite
- react-router-dom
- API de TVMaze

## Requisitos cubiertos
- Estados con `useState`
- Context para los favoritos
- react-router con parámetros de búsqueda (`/?q=`) y ruta con parámetro (`/serie/:id`)
- Formulario controlado (buscador)
- Custom hooks (`useSeries`, `useSerie`, `useFavoritos`)
- Componentes reutilizables
- 3 páginas: Inicio, Detalle y Favoritos
- Diseño responsive (320px a 2000px) con fondo oscuro y letras claras

## Dificultades
- Muy poco tiempo para realizar el proyecto debido a que consegui trabajo a partir de la segunda clase, lo que me significo perder el tiempo que tenia reservado para este curso, sin embargo llegue a ver la mitad de las clases, sin embargo los contenidos finales los vi mediante las clases(no grabadas, los pdf) y con practica, mientras desarrollaba, me apoyaba y le pedia explicaciones a un asistente de IA.
- TVMaze devuelve las sinopsis solo en inglés, por lo que traducirlas queda como mejora futura.

## Posibles mejoras
Inicio de sesión, sinopsis en español

## Links
- Deploy: https://buscador-series.vercel.app/
- Repositorio: https://github.com/valenlanda14-netizen/buscador-series