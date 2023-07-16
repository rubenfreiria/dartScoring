import { contadorPersonal } from "./contadorPersonal.js";

export function show(){
    const player1Counter = document.getElementById("player1");
    const player2Counter = document.getElementById("player2");

    player1Counter.innerHTML = contadorPersonal(localStorage.getItem('points'), localStorage.getItem('player1'), 1);
    player2Counter.innerHTML = contadorPersonal(localStorage.getItem('points'), localStorage.getItem('player2'), 2);
}