import { show } from "./showGameStats.js";

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que se envíe el formulario

  let main = document.getElementById("game");
  let form = document.getElementById("myForm");

  // Obtener los valores del formulario
  const points = document.getElementById("points").value;
  const player1 = document.getElementById("player1Form").value;
  const player2 = document.getElementById("player2Form").value;

  // Guardar los valores en el almacenamiento local
  localStorage.clear();
  localStorage.setItem("points", points);
  localStorage.setItem("player1", player1);
  localStorage.setItem("player2", player2);

  // Realizar cualquier otra acción que desees con los datos del formulario
  console.log("Datos del formulario guardados en el almacenamiento local");
  console.log(localStorage.getItem("points"));

  main.classList.remove("hidden"); // Muestra el contenido principal
  form.classList.add("hidden"); // Oculta el formulario
  show();
});
