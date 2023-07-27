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

  // Funcion para calcular la media total
  function calcAverage(array, averageForm = localStorage.getItem("averageForm")) {
    if (array.length === 0) {
      return "--";
    }

    const total = array.reduce((acc, c) => acc + c);
    const media = (total / array.length);

    if (averageForm === "MPR") {
      return (media*3).toFixed(2);
    } else if (averageForm === "PPD") {
      return media.toFixed(2);
    }
  }

  // Funcion para calcular la media de la ronda
  function calcRound(player) {
    const d1 = document.getElementById(`dart1-${player}`);
    const d2 = document.getElementById(`dart2-${player}`);
    const d3 = document.getElementById(`dart3-${player}`);

    if (d1.innerText === "--" && d2.innerText === "--" && d3.innerText === "--") {
      return "--";
    }

    if (d1.innerText !== "--" && d2.innerText !== "--" && d3.innerText !== "--") {
      return parseInt(d1.innerText) + parseInt(d2.innerText) + parseInt(d3.innerText);
    }

    if (d1.innerText !== "--" && d2.innerText !== "--") {
      return parseInt(d1.innerText) + parseInt(d2.innerText);
    }

    if (d1.innerText !== "--") {
      return parseInt(d1.innerText);
    }
  }

  function gameOver() {
    let body = document.querySelector("body");

    body.innerHTML = `
    <div class="flex items-center justify-center mt-8">
      <div class="flex items-center justify-center flex-col bg-slate-400 w-80 h-[420px] rounded-xl shadow-black shadow-sm">
        <h1 class="text-4xl font-bold flex justify-center mb-4">Dart Scoring</h1>
        <h2 class="text-3xl m-3 text-center">${localStorage.getItem("winner")} is the winner!</h2>

        <h3 class="text-2xl font-semibold mb-1 mt-4">Game Stats</h3>
        <p class="text-xl m-1">${localStorage.getItem("P1Name")}: ${localStorage.getItem("P1Average")}</p>
        <p class="text-xl m-1">${localStorage.getItem("P2Name")}: ${localStorage.getItem("P2Average")}</p>

        <button class="bg-gray-900 py-2 px-4 mt-4 rounded hover:bg-gray-700 text-white" onclick="location.reload()">Play Again</button>
      </div>
    </div>
    `;
  }

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
            if (document.getElementById("partialAverageP2").innerText === "Overthrow") {
              //Hacemos back 3 veces
              clicksP2 = 3;
              while(clicksP2 > 0) {
              document.getElementById("P1Name").classList.add("font-semibold");
              document.getElementById("P2Name").classList.remove("font-semibold");
              document.getElementById("dart3-P2").innerText = "--";
              document.getElementById("dart2-P2").innerText = "--";
              document.getElementById("dart1-P2").innerText = "--";
              currentPlayer = "P2";
              let counterP2 = document.getElementById("counterP2");
              let currentValueP2 = parseInt(counterP2.innerText);
              counterP2.innerText = currentValueP2 + tiradasP2[tiradasP2.length - 1];
              tiradasP2.pop();
              clicksP2--;
              document.getElementById(`dart${clicksP2 + 1}-P2`).innerText = "--";
              totalAverageP2.innerText = calcAverage(tiradasP2);
              }
              partialAverageP2.innerText = calcRound("P2");
              return;
            }
            clicksP2 = 3;
            document.getElementById("P2Name").classList.add("font-semibold");
            document.getElementById("P1Name").classList.remove("font-semibold");
            document.getElementById("dart3-P1").innerText = tiradasP1[tiradasP1.length - 1];
            document.getElementById("dart2-P1").innerText = tiradasP1[tiradasP1.length - 2];
            document.getElementById("dart1-P1").innerText = tiradasP1[tiradasP1.length - 3];
            currentPlayer = "P2";
            let counterP2 = document.getElementById("counterP2");
            let currentValueP2 = parseInt(counterP2.innerText);
            counterP2.innerText =
              currentValueP2 + tiradasP2[tiradasP2.length - 1];
            tiradasP2.pop();
            clicksP2--;
            document.getElementById(`dart${clicksP2 + 1}-P2`).innerText = "--";
            totalAverageP2.innerText = calcAverage(tiradasP2);
            partialAverageP2.innerText = calcRound("P2");
            return;
          }
          let counterP1 = document.getElementById("counterP1");
          let currentValueP1 = parseInt(counterP1.innerText);
          counterP1.innerText =
            currentValueP1 + tiradasP1[tiradasP1.length - 1];
            tiradasP1.pop();
            clicksP1--;
            document.getElementById(`dart${clicksP1 + 1}-P1`).innerText = "--";
            totalAverageP1.innerText = calcAverage(tiradasP1);
            partialAverageP1.innerText = calcRound("P1");
        } else if (currentPlayer === "P2") {
          if (clicksP2 % 3 === 0 && tiradasP1.length > 0) {
            if (document.getElementById("partialAverageP1").innerText === "Overthrow") {
              //Hacemos back 3 veces
              clicksP1 = 3;
              while(clicksP1 > 0) {
              document.getElementById("P1Name").classList.add("font-semibold");
              document.getElementById("P2Name").classList.remove("font-semibold");
              document.getElementById("dart3-P1").innerText = "--";
              document.getElementById("dart2-P1").innerText = "--";
              document.getElementById("dart1-P1").innerText = "--";
              currentPlayer = "P1";
              let counterP1 = document.getElementById("counterP1");
              let currentValueP1 = parseInt(counterP1.innerText);
              counterP1.innerText = currentValueP1 + tiradasP1[tiradasP1.length - 1];
              tiradasP1.pop();
              clicksP1--;
              document.getElementById(`dart${clicksP1 + 1}-P1`).innerText = "--";
              totalAverageP1.innerText = calcAverage(tiradasP1);
              }
              partialAverageP1.innerText = calcRound("P1");
              return;
            }
            clicksP1 = 3;
            document.getElementById("P1Name").classList.add("font-semibold");
            document.getElementById("P2Name").classList.remove("font-semibold");
            if (tiradasP2.length > 0) {  
              document.getElementById("dart3-P2").innerText = tiradasP2[tiradasP2.length - 1];
              document.getElementById("dart2-P2").innerText = tiradasP2[tiradasP2.length - 2];
              document.getElementById("dart1-P2").innerText = tiradasP2[tiradasP2.length - 3];
            }
            currentPlayer = "P1";
            let counterP1 = document.getElementById("counterP1");
            let currentValueP1 = parseInt(counterP1.innerText);
            counterP1.innerText =
              currentValueP1 + tiradasP1[tiradasP1.length - 1];
              tiradasP1.pop();
              document.getElementById(`dart${clicksP1}-P1`).innerText = "--";
              clicksP1--;
              totalAverageP1.innerText = calcAverage(tiradasP1);
              partialAverageP1.innerText = calcRound("P1");
            return;
          }
          let counterP2 = document.getElementById("counterP2");
          let currentValueP2 = parseInt(counterP2.innerText);
          counterP2.innerText =
            currentValueP2 + tiradasP2[tiradasP2.length - 1];
            tiradasP2.pop();
            clicksP2--;
            document.getElementById(`dart${clicksP2 + 1}-P2`).innerText = "--";
            totalAverageP2.innerText = calcAverage(tiradasP2);
            partialAverageP2.innerText = calcRound("P2");
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

        let totalAverageP1 = document.getElementById("totalAverageP1");
        let totalAverageP2 = document.getElementById("totalAverageP2");

        let partialAverageP1 = document.getElementById("partialAverageP1");
        let partialAverageP2 = document.getElementById("partialAverageP2");

        let currentValueP1 = parseInt(counterP1.innerText);
        let currentValueP2 = parseInt(counterP2.innerText);

        if (currentPlayer === "P1") {
          document.getElementById("P1Name").classList.add("font-semibold");
          document.getElementById("P2Name").classList.remove("font-semibold");
          if (clicksP1 === 0) {
            document.getElementById("dart1-P1").innerText = "--";
            document.getElementById("dart2-P1").innerText = "--";
            document.getElementById("dart3-P1").innerText = "--";
          }

          if ((parseInt(counterP1.innerText) - (numeroPulsado * multiplicador)) < 0 || ((parseInt(counterP1.innerText) - (numeroPulsado * multiplicador)) === 0) && multiplicador !== 2) {
            let volverP1 = 0;
            currentDartP1.innerText = numeroPulsado * multiplicador;
            
            while (clicksP1 > 0){
              volverP1 += tiradasP1[tiradasP1.length - 1]
              tiradasP1.pop();
              clicksP1--;
            }
            
            tiradasP1.push(0, 0, 0);
            currentPlayer = "P2";
            counterP1.innerText = parseInt(counterP1.innerText) + volverP1;
            totalAverageP1.innerText = calcAverage(tiradasP1);
            partialAverageP1.innerText = "Overthrow";
          } else if(((parseInt(counterP1.innerText) - (numeroPulsado * multiplicador)) === 0) && multiplicador === 2){
            console.log("Tirooooooooooooooooooooooooooo");
            counterP1.innerText = currentValueP1 - numeroPulsado * multiplicador;
            tiradasP1.push(numeroPulsado * multiplicador);
            currentDartP1.innerText = numeroPulsado * multiplicador;
            totalAverageP1.innerText = calcAverage(tiradasP1);
            partialAverageP1.innerText = calcRound("P1");
            localStorage.setItem("winner", document.getElementById("P2Name").innerText);
            localStorage.setItem("P1Name", document.getElementById("P1Name").innerText);
            localStorage.setItem("P2Name", document.getElementById("P2Name").innerText);
            localStorage.setItem("P1Average", totalAverageP1.innerText);
            localStorage.setItem("P2Average", totalAverageP2.innerText);
            gameOver();
          }
           else {

          if (numeroPulsado !== 25) {
            counterP1.innerText =
              currentValueP1 - numeroPulsado * multiplicador;
            tiradasP1.push(numeroPulsado * multiplicador);
            currentDartP1.innerText = numeroPulsado * multiplicador;
            totalAverageP1.innerText = calcAverage(tiradasP1);
            partialAverageP1.innerText = calcRound("P1");
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
              totalAverageP1.innerText = calcAverage(tiradasP1);
              partialAverageP1.innerText = calcRound("P1");
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
              totalAverageP1.innerText = calcAverage(tiradasP1);
              partialAverageP1.innerText = calcRound("P1");
              multiplicador = 1;
              console.log(tiradasP1);
              clicksP1++;
              if (clicksP1 % 3 === 0) {
                clicksP1 = 0;
                currentPlayer = "P2";
              }
            }
          }
        }
        } else if (currentPlayer === "P2") {
          document.getElementById("P2Name").classList.add("font-semibold");
          document.getElementById("P1Name").classList.remove("font-semibold");

          if (clicksP2 === 0) {
            document.getElementById("dart1-P2").innerText = "--";
            document.getElementById("dart2-P2").innerText = "--";
            document.getElementById("dart3-P2").innerText = "--";
          }

          if ((parseInt(counterP2.innerText) - (numeroPulsado * multiplicador)) < 0 || ((parseInt(counterP2.innerText) - (numeroPulsado * multiplicador)) === 0) && multiplicador !== 2) {
            let volverP2 = 0;
            currentDartP2.innerText = numeroPulsado * multiplicador;
            
            while (clicksP2 > 0){
              volverP2 += tiradasP2[tiradasP2.length - 1]
              tiradasP2.pop();
              clicksP2--;
            }
            
            tiradasP2.push(0, 0, 0);
            currentPlayer = "P1";
            counterP2.innerText = parseInt(counterP2.innerText) + volverP2;
            totalAverageP2.innerText = calcAverage(tiradasP2);
            partialAverageP2.innerText = "Overthrow";
          } else if(((parseInt(counterP2.innerText) - (numeroPulsado * multiplicador)) === 0) && multiplicador === 2){
            console.log("Tirooooooooooooooooooooooooooo gana P2");
            counterP2.innerText = currentValueP2 - numeroPulsado * multiplicador;
            tiradasP2.push(numeroPulsado * multiplicador);
            currentDartP2.innerText = numeroPulsado * multiplicador;
            totalAverageP2.innerText = calcAverage(tiradasP2);
            partialAverageP2.innerText = calcRound("P2");
            localStorage.setItem("winner", document.getElementById("P1Name").innerText);
            localStorage.setItem("P1Name", document.getElementById("P1Name").innerText);
            localStorage.setItem("P2Name", document.getElementById("P2Name").innerText);
            localStorage.setItem("P1Average", totalAverageP1.innerText);
            localStorage.setItem("P2Average", totalAverageP2.innerText);
            gameOver();
          }
           else {

          if (numeroPulsado !== 25) {
            counterP2.innerText =
              currentValueP2 - numeroPulsado * multiplicador;
            clicksP2++;
            tiradasP2.push(numeroPulsado * multiplicador);
            currentDartP2.innerText = numeroPulsado * multiplicador;
            totalAverageP2.innerText = calcAverage(tiradasP2);
            partialAverageP2.innerText = calcRound("P2");
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
              totalAverageP2.innerText = calcAverage(tiradasP2);
              partialAverageP2.innerText = calcRound("P2");
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
              currentDartP2.innerText = numeroPulsado;
              totalAverageP2.innerText = calcAverage(tiradasP2);
              partialAverageP2.innerText = calcRound("P2");
              multiplicador = 1;
              console.log(tiradasP2);
              if (clicksP2 % 3 === 0) {
                clicksP2 = 0;
                currentPlayer = "P1";
              }
            }
          }
        }
      }
        console.log(numeroPulsado);
      }
    });
  });
});
