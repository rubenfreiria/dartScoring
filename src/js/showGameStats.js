import { contadorPersonal } from "./contadorPersonal.js";

export function show(){
    // Mostrar los contadores de cada jugador
    const player1Counter = document.getElementById("player1");
    const player2Counter = document.getElementById("player2");
    
    player1Counter.innerHTML = contadorPersonal(localStorage.getItem('points'), localStorage.getItem('player1'), 1, "blue-600");
    player2Counter.innerHTML = contadorPersonal(localStorage.getItem('points'), localStorage.getItem('player2'), 2, "red-600");
    
    //Modificar el tipo de media segun lo que se seleccione en el formulario
    const mediaTextP1 = document.getElementById("mediaTextP1");
    const mediaTextP2 = document.getElementById("mediaTextP2");

    mediaTextP1.innerText = localStorage.getItem('averageForm');
    mediaTextP2.innerText = localStorage.getItem('averageForm');
}