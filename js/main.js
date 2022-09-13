import sorteo from "./modulos/sorteo.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  sorteo("#ganador-btn", ".jugador");
});
