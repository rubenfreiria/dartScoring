import { contadorPersonal } from "./contadorPersonal.js";
import { pointsSelector } from "./pointsSelector.js";

export function show(){
    const player1Counter = document.getElementById("player1");
    const player2Counter = document.getElementById("player2");
    const selector = document.getElementById("selector");

    player1Counter.innerHTML = contadorPersonal(501, "Player1");
    player2Counter.innerHTML = contadorPersonal(501, "Player2");
    selector.innerHTML = pointsSelector();
}