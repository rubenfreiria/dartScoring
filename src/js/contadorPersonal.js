/* Funcion que recibe la cantidad e puntos para empezar la partida y el nombre del jugador y devuelve el html con los datos personalizados*/
export function contadorPersonal(game = 501, nombre = "Guest", id, color) {

    return `
        <div class="grid grid-cols-3 mt-4 border-2 border-black max-w-xm mx-2">

        <div class="flex flex-col justify-center align-center bg-${color} border border-black"> 
        <div class="flex justify-center align-top p-2 py-4 border-b border-black">
            <p id="counterP${id}" class="flex justify-center align-center text-4xl font-semibold">${game}</p>
        </div>
        <div class="flex justify-center align-center border-t border-black">
            <p id="P${id}Name" class="flex justify-center align-center text-base">${nombre}</p>
        </div>
        </div>
        
        
        <div class="bg-gray-200 flex flex-col justify-center align-center border border-black">
        <div class="flex justify-center align-center bg-${color} border-b border-black">
            <div class="flex justify-center align-center px-2 py-3 min-w-[39px] border-r border-black">
            <p id="dart1-P${id}" class="text-xl">--</p>
            </div>
            <div class="flex justify-center align-center px-2 py-3 min-w-[39px] border-x border-black">
            <p id="dart2-P${id}" class="text-xl">--</p>
            </div>
            <div class="flex justify-center align-center px-2 py-3 min-w-[39px] border-l border-black">
            <p id="dart3-P${id}" class="text-xl">--</p>
            </div>
        </div>

        <div class="flex justify-center align-center p-3 bg-${color} border-t border-black">
            <p id="partialAverageP${id}" class="text-xl">-</p>
        </div>
        </div>


        <div class="bg-${color} flex flex-col justify-center items-center border border-l-2 border-black">
        <div class="flex justify-center align-center flex-col">
            <p id="mediaTextP${id}" class="flex justify-center items-center text-xl">MEDIA</p>
            <p id="totalAverageP${id}" class="flex justify-center items-center text-2xl">-</p>
        </div>
        </div>
    </div>
    `;
}

