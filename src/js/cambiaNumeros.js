  let divElements = document.getElementsByClassName("flex");
  let clicksP1 = 0;
  let clicksP2 = 0;
  let currentPlayer = "P1";
  const tiradasP1 = [];
  const tiradasP2 = [];


  for (let i = 0; i < divElements.length; i++) {
    divElements[i].addEventListener("click", function (event) {
      let clickedDiv = event.target;
      let value = parseInt(clickedDiv.getAttribute("value"));
      if (!isNaN(value)) {
        let counterP1 = document.getElementById("counterP1");
        let counterP2 = document.getElementById("counterP2");
        let currentValueP1 = parseInt(counterP1.innerText);
        let currentValueP2 = parseInt(counterP2.innerText);

        if (!isNaN(currentValueP1) && !isNaN(currentValueP2)) {
          if (currentPlayer === "P1") {
            counterP1.innerText = currentValueP1 - value;
            tiradasP1.push(value);
            console.log(tiradasP1);
            back();
            clicksP1++;
            if (clicksP1 % 3 === 0) {
              currentPlayer = "P2";
            }
          } else if (currentPlayer === "P2") {
            counterP2.innerText = currentValueP2 - value;
            tiradasP2.push(value);
            console.log(tiradasP2);
            clicksP2++;
            if (clicksP2 % 3 === 0) {
              currentPlayer = "P1";
            }
          }
        }
      }
    });
  }


function back() {
  // Obtener el elemento con el id "point-back"
  const pointBackBtn = document.getElementById("point-back");

  // Agregar un evento click al botón
  pointBackBtn.addEventListener("click", function () {
    // Verificar si hay elementos en el array tiradasP1
    if (tiradasP1.length > 0) {
      if (clicksP1 > 0) {
        counterP1.innerText = parseInt(document.getElementById("counterP1").innerText) + tiradasP1[tiradasP1.length - 1];
        clicksP1--;
        tiradasP1.pop();
        console.log("Último elemento eliminado de tiradasP1");
      }
    } else {
      console.log("No hay elementos en tiradasP1");
    }
  });
}
