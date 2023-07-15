/* Funcion que recibe la cantidad e puntos para empezar la partida y el nombre del jugador y devuelve el html con los datos personalizados*/
export function contadorPersonal(game = 501, nombre = "Guest") {
    return `
        <div class="grid grid-cols-3 mt-4 border-2 border-black max-w-xm mx-2">

        <div class="flex flex-col justify-center align-center bg-red-700 border border-black"> 
        <div class="flex justify-center align-top p-2 py-4 border-b border-black">
            <p class="flex justify-center align-center text-4xl font-semibold">${game}</p>
        </div>
        <div class="flex justify-center align-center border-t border-black">
            <p class="flex justify-center align-center text-xl">${nombre}</p>
        </div>
        </div>
        
        
        <div class="bg-gray-200 flex flex-col justify-center align-center border border-black">
        <div class="flex justify-center align-center bg-blue-600 border-b border-black">
            <div class="flex justify-center align-center px-2 py-3 min-w-[39px] border-r border-black">
            <p id="dart1-${nombre}" class="text-xl">--</p>
            </div>
            <div class="flex justify-center align-center px-2 py-3 min-w-[39px] border-x border-black">
            <p id="dart2-${nombre}" class="text-xl">--</p>
            </div>
            <div class="flex justify-center align-center px-2 py-3 min-w-[39px] border-l border-black">
            <p id="dart3-${nombre}" class="text-xl">--</p>
            </div>
        </div>

        <div class="flex justify-center align-center p-3 bg-blue-600 border-t border-black">
            <p class="text-xl">-</p>
        </div>
        </div>


        <div class="bg-yellow-500 flex flex-col justify-center items-center border border-l-2 border-black">
        <div class="flex justify-center align-center flex-col">
            <p class="flex justify-center items-center text-xl">MEDIA</p>
            <p class="flex justify-center items-center text-2xl">-</p>
        </div>
        </div>
    </div>
    `;
}

