export function pointsSelector() {
  return `
    <div class="fixed bottom-[72px] left-0 w-screen flex justify-center">
    <div class="grid grid-cols-7 mt-8 w-80">
      <div class="flex flex-col w-80 justify-center">
        <div class="flex flex-row w-80 justify-center">
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border-b border-r border-gray-300 text-xl hover:bg-green-900">1</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border-b border-x border-gray-300 text-xl hover:bg-green-900">2</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border-b border-x border-gray-300 text-xl hover:bg-green-900">3</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border-b border-x border-gray-300 text-xl hover:bg-green-900">4</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border-b border-x border-gray-300 text-xl hover:bg-green-900">5</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border-b border-x border-gray-300 text-xl hover:bg-green-900">6</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border-b border-l border-gray-300 text-xl hover:bg-green-900">7</div>
        </div>
        <div class="flex flex-row justify-center">
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border-y border-r border-gray-300 text-xl hover:bg-green-900">8</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900">9</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900">10</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900">11</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900">12</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900">13</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border-y border-l border-gray-300 text-xl hover:bg-green-900">14</div>
        </div>
        <div class="flex flex-row justify-center">
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border-y border-r border-gray-300 text-xl hover:bg-green-900">15</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900">16</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900">17</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900">18</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900">19</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border border-gray-300 text-xl hover:bg-green-900">20</div>
          <div class="bg-green-700 flex justify-center items-center p-2 w-11 border-y border-l border-gray-300 text-xl hover:bg-green-900">25</div>
        </div>
      </div>
    </div>
  </div>
  <div class="fixed bottom-7 left-0 w-screen flex justify-center">
    <div class="flex flex-row justify-center">
      <div class="bg-green-700 flex justify-center items-center p-2 w-11 border-t-2 border-r border-gray-300 text-xl hover:bg-green-900">0</div>
      <div class="bg-green-700 flex justify-center items-center p-2 w-[88px] border-t-2 border-x border-gray-300 text-xl hover:bg-green-900">DOUBLE</div>
      <div class="bg-green-700 flex justify-center items-center p-2 w-[88px] border-t-2 border-x border-gray-300 text-xl hover:bg-green-900">TRIPLE</div>
      <div class="bg-green-700 flex justify-center items-center p-2 w-[88px] border-t-2 border-l border-gray-300 text-xl hover:bg-green-900">BACK</div>
    </div>
  </div>
    `;
}
