// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Obtener todos los elementos div con el id que comienza con "point-"
  const pointDivs = document.querySelectorAll('[id^="point-"]');
  let clicksP1 = 0;
  let clicksP2 = 0;
  let multiplicador = 1;
  let currentPlayer = "P1";
  let tiradasP1 = [];
  let tiradasP2 = [];

  /* Manejo del boton de back */
  // Iterar sobre los elementos y agregar un controlador de eventos de click
  pointDivs.forEach(function (div) {
    div.addEventListener("click", function () {
      const especialPulsado = this.textContent.trim();
      if (especialPulsado === "BACK") {
        console.log(especialPulsado);

        /* Revisar clicks */
        if (currentPlayer === "P1") {
          /* Manejar que no se pueda volver mas atras que el inicio de la partida para P1 */
          if (tiradasP1.length === 0) {
            currentPlayer = "P1";
            console.log("No se puede volver mas atras");
            return;
          }
          if (clicksP1 % 3 === 0 && tiradasP2.length > 0) {
            clicksP2 = 3;
            currentPlayer = "P2";
            let counterP2 = document.getElementById("counterP2");
            let currentValueP2 = parseInt(counterP2.innerText);
            counterP2.innerText =
              currentValueP2 + tiradasP2[tiradasP2.length - 1];
            tiradasP2.pop();
            clicksP2--;
            document.getElementById(`dart${clicksP2 + 1}-P2`).innerText = "--";
            return;
          }
          let counterP1 = document.getElementById("counterP1");
          let currentValueP1 = parseInt(counterP1.innerText);
          counterP1.innerText =
            currentValueP1 + tiradasP1[tiradasP1.length - 1];
            tiradasP1.pop();
            clicksP1--;
            document.getElementById(`dart${clicksP1 + 1}-P1`).innerText = "--";
        } else if (currentPlayer === "P2") {
          if (clicksP2 % 3 === 0 && tiradasP1.length > 0) {
            clicksP1 = 3;
            currentPlayer = "P1";
            let counterP1 = document.getElementById("counterP1");
            let currentValueP1 = parseInt(counterP1.innerText);
            counterP1.innerText =
              currentValueP1 + tiradasP1[tiradasP1.length - 1];
              tiradasP1.pop();
              document.getElementById(`dart${clicksP1}-P1`).innerText = "--";
              clicksP1--;
            return;
          }
          let counterP2 = document.getElementById("counterP2");
          let currentValueP2 = parseInt(counterP2.innerText);
          counterP2.innerText =
            currentValueP2 + tiradasP2[tiradasP2.length - 1];
            tiradasP2.pop();
            clicksP2--;
            document.getElementById(`dart${clicksP2 + 1}-P2`).innerText = "--";
        }
      }

      /* Manejo de los multiplicadores */
      if (especialPulsado === "DOUBLE") {
        multiplicador = 2;
      }

      if (especialPulsado === "TRIPLE") {
        multiplicador = 3;
      }

      /* Manejo de la resta de numeros */
      const numeroPulsado = parseInt(this.textContent.trim());
      // Verificar si el contenido es numérico
      if (!isNaN(numeroPulsado)) {
        let counterP1 = document.getElementById("counterP1");
        let counterP2 = document.getElementById("counterP2");

        let currentDartP1 = document.getElementById(`dart${clicksP1 + 1}-P1`);
        let currentDartP2 = document.getElementById(`dart${clicksP2 + 1}-P2`);

        let currentValueP1 = parseInt(counterP1.innerText);
        let currentValueP2 = parseInt(counterP2.innerText);

        if (currentPlayer === "P1") {
          if (numeroPulsado !== 25) {
            counterP1.innerText =
              currentValueP1 - numeroPulsado * multiplicador;
            tiradasP1.push(numeroPulsado * multiplicador);
            currentDartP1.innerText = numeroPulsado * multiplicador;
            multiplicador = 1;
            console.log(tiradasP1);
            clicksP1++;
            if (clicksP1 % 3 === 0) {
              clicksP1 = 0;
              currentPlayer = "P2";
            }
          } else {
            //Caso en el que el numero pulsado es 25 y el multiplicador es 1 o 2
            if (multiplicador === 1 || multiplicador === 2) {
              counterP1.innerText =
                currentValueP1 - numeroPulsado * multiplicador;
              tiradasP1.push(numeroPulsado * multiplicador);
              currentDartP1.innerText = numeroPulsado * multiplicador;
              multiplicador = 1;
              console.log(tiradasP1);
              clicksP1++;
              if (clicksP1 % 3 === 0) {
                clicksP1 = 0;
                currentPlayer = "P2";
              }
            } else {
              //Caso en el que el multiplicador es 3
              counterP1.innerText = currentValueP1 - numeroPulsado;
              tiradasP1.push(numeroPulsado);
              currentDartP1.innerText = numeroPulsado;
              multiplicador = 1;
              
              console.log(tiradasP1);
              clicksP1++;
              if (clicksP1 % 3 === 0) {
                clicksP1 = 0;
                currentPlayer = "P2";
              }
            }
          }
        } else if (currentPlayer === "P2") {
          if (numeroPulsado !== 25) {
            counterP2.innerText =
              currentValueP2 - numeroPulsado * multiplicador;
            clicksP2++;
            tiradasP2.push(numeroPulsado * multiplicador);
            currentDartP2.innerText = numeroPulsado * multiplicador;
            multiplicador = 1;
            console.log(tiradasP2);
            if (clicksP2 % 3 === 0) {
              clicksP2 = 0;
              currentPlayer = "P1";
            }
          } else {
            //Caso en el que el numero pulsado es 25 y el multiplicador es 1 o 2
            if (multiplicador === 1 || multiplicador === 2) {
              counterP2.innerText =
                currentValueP2 - numeroPulsado * multiplicador;
              clicksP2++;
              tiradasP2.push(numeroPulsado * multiplicador);
              currentDartP2.innerText = numeroPulsado * multiplicador;
              multiplicador = 1;
              console.log(tiradasP2);
              if (clicksP2 % 3 === 0) {
                clicksP2 = 0;
                currentPlayer = "P1";
              }
            } else {
              //Caso en el que el multiplicador es 3
              counterP2.innerText = currentValueP2 - numeroPulsado;
              clicksP2++;
              tiradasP2.push(numeroPulsado);
              currentDartP2.innerText = numeroPulsado * multiplicador;
              multiplicador = 1;
              console.log(tiradasP2);
              if (clicksP2 % 3 === 0) {
                clicksP2 = 0;
                currentPlayer = "P1";
              }
            }
          }
        }
        console.log(numeroPulsado);
      }
    });
  });
});
