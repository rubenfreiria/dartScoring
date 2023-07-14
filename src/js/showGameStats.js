import { contadorPersonal } from "./contadorPersonal.js";
import { pointsSelector } from "./pointsSelector.js";

export function show(){
    const player1Counter = document.getElementById("player1");
    const player2Counter = document.getElementById("player2");
    const selector = document.getElementById("selector");

    player1Counter.innerHTML = contadorPersonal(localStorage.getItem('points'), localStorage.getItem('player1'));
    player2Counter.innerHTML = contadorPersonal(localStorage.getItem('points'), localStorage.getItem('player2'));
    selector.innerHTML = pointsSelector(); 
}