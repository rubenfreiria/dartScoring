document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario
  
    var main = document.getElementById("game");
    var form = document.getElementById("myForm");
  
    main.classList.remove("hidden"); // Muestra el contenido principal
    form.classList.add("hidden"); // Oculta el formulario
  
    // Aquí puedes agregar cualquier lógica adicional que desees realizar después de enviar el formulario
  
    // Ejemplo: Obtener los valores de los campos del formulario
    var points = document.getElementById("points").value;
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
  
    // Ejemplo: Mostrar los valores en la consola
    console.log("Número de puntos:", points);
    console.log("Nombre del jugador 1:", player1);
    console.log("Nombre del jugador 2:", player2);
  
    // Puedes realizar cualquier otra lógica o llamadas a funciones aquí
  });
  