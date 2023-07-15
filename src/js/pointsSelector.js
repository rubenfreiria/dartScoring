export function pointsSelector() {
  return `
          <div class="fixed bottom-[72px] left-0 w-screen flex justify-center">
          <div class="grid grid-cols-7 mt-8 w-80">
            <div class="flex flex-col w-80 justify-center">
              <div class="flex flex-row w-80 justify-center">
                <div id="point-1" class="bg-green-700 flex justify-center items-center p-2 w-11 border-b border-r border-gray-300 text-xl hover:bg-green-900" value="1">1</div>
                <div id="point-2" class="bg-green-700 flex justify-center items-center p-2 w-11 border-b border-x border-gray-300 text-xl hover:bg-green-900" value="2">2</div>
                <div id="point-3" class="bg-green-700 flex justify-center items-center p-2 w-11 border-b border-x border-gray-300 text-xl hover:bg-green-900" value="3">3</div>
                <div id="point-4" class="bg-green-700 flex justify-center items-center p-2 w-11 border-b border-x border-gray-300 text-xl hover:bg-green-900" value="4">4</div>
                <div id="point-5" class="bg-green-700 flex justify-center items-center p-2 w-11 border-b border-x border-gray-300 text-xl hover:bg-green-900" value="5">5</div>
                <div id="point-6" class="bg-green-700 flex justify-center items-center p-2 w-11 border-b border-x border-gray-300 text-xl hover:bg-green-900" value="6">6</div>
                <div id="point-7" class="bg-green-700 flex justify-center items-center p-2 w-11 border-b border-l border-gray-300 text-xl hover:bg-green-900" value="7">7</div>
              </div>
              <div class="flex flex-row justify-center">
                <div id="point-8" class="bg-green-700 flex justify-center items-center p-2 w-11 border-y border-r border-gray-300 text-xl hover:bg-green-900" value="8">8</div>
                <div id="point-9" class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900" value="9">9</div>
                <div id="point-10" class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900" value="10">10</div>
                <div id="point-11" class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900" value="11">11</div>
                <div id="point-12" class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900" value="12">12</div>
                <div id="point-13" class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900" value="13">13</div>
                <div id="point-14" class="bg-green-700 flex justify-center items-center p-2 w-11 border-y border-l border-gray-300 text-xl hover:bg-green-900" value="14">14</div>
              </div>
              <div class="flex flex-row justify-center">
                <div id="point-15" class="bg-green-700 flex justify-center items-center p-2 w-11 border-y border-r border-gray-300 text-xl hover:bg-green-900" value="15">15</div>
                <div id="point-16" class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900" value="16">16</div>
                <div id="point-17" class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900" value="17">17</div>
                <div id="point-18" class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900" value="18">18</div>
                <div id="point-19" class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900" value="19">19</div>
                <div id="point-20" class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900" value="20">20</div>
                <div id="point-25" class="bg-green-700 flex justify-center items-center p-2 w-11 border-y border-l border-gray-300 text-xl hover:bg-green-900" value="25">25</div>
              </div>
            </div>
          </div>
        </div>
        <div class="fixed bottom-7 left-0 w-screen flex justify-center">
          <div class="flex flex-row justify-center">
            <div id="point-0" class="bg-green-700 flex justify-center items-center p-2 w-11 border-t-2 border-r border-gray-300 text-xl hover:bg-green-900" value="0">0</div>
            <div id="point-double" class="bg-green-700 flex justify-center items-center p-2 w-[88px] border-t-2 border-x border-gray-300 text-xl hover:bg-green-900">DOUBLE</div>
            <div id="point-triple" class="bg-green-700 flex justify-center items-center p-2 w-[88px] border-t-2 border-x border-gray-300 text-xl hover:bg-green-900">TRIPLE</div>
            <div id="point-back" class="bg-green-700 flex justify-center items-center p-2 w-[88px] border-t-2 border-l border-gray-300 text-xl hover:bg-green-900">BACK</div>
          </div>
        </div>
    `;
}
