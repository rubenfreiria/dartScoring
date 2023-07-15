/* // Obtener todos los elementos div con clase "flex"
var divElements = document.getElementsByClassName("flex");

// Iterar sobre los elementos div y agregar el evento de clic a cada uno

for (var i = 0; i < divElements.length; i++) {
  divElements[i].addEventListener("click", function (event) {
    var clickedDiv = event.target;
    var value = parseInt(clickedDiv.getAttribute("value"));
    if (!isNaN(value)) {
      var counterP1 = document.getElementById("counterP1");
      var counterP2 = document.getElementById("counterP2");
      var currentValue = parseInt(counterP1.innerText);
      if (!isNaN(currentValue)) {
        counterP1.innerText = currentValue - value;
      }
    }
  });
} */

var divElements = document.getElementsByClassName("flex");
var clicksP1 = 0;
var clicksP2 = 0;
var currentPlayer = "P1";

for (var i = 0; i < divElements.length; i++) {
  divElements[i].addEventListener("click", function (event) {
    var clickedDiv = event.target;
    var value = parseInt(clickedDiv.getAttribute("value"));
    if (!isNaN(value)) {
      var counterP1 = document.getElementById("counterP1");
      var counterP2 = document.getElementById("counterP2");
      var currentValueP1 = parseInt(counterP1.innerText);
      var currentValueP2 = parseInt(counterP2.innerText);
      if (!isNaN(currentValueP1) && !isNaN(currentValueP2)) {
        if (currentPlayer === "P1") {
          counterP1.innerText = currentValueP1 - value;
          clicksP1++;
          if (clicksP1 % 3 === 0) {
            currentPlayer = "P2";
          }
        } else if (currentPlayer === "P2") {
          counterP2.innerText = currentValueP2 - value;
          clicksP2++;
          if (clicksP2 % 3 === 0) {
            currentPlayer = "P1";
          }
        }
      }
    }
  });
}

