import './style.css'
import { setupConverter } from './converter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="min-h-screen w-full bg-violet-700 flex justify-center items-center px-5 md:px-0">
       <div class="bg-white rounded-lg min-h-fit w-full md:w-[500px] py-10 px-8">
          <h1 class="text-center font-semibold text-4xl mb-10"> Currency Converter </h1>
          <form>

              <div class="mb-8">
                  <label for="amount" class="text-2xl block mb-3">Enter Amount</label>
                  <input type="text" id="amount" class="block w-full py-5 px-4 rounded-lg border border-neutral-500 text-2xl" />
              </div>
              
              <div class="mb-8 grid grid-cols-3 gap-3 items-center">
                  <div>
                       <label for="from" class="text-2xl block mb-3">From</label>
                       <select class="block w-full py-5 px-4 rounded-lg border border-neutral-500 bg-white" id="from">
                          <option></option>
                       </select>
                  </div>

                  <div class="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-12 h-12" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
                      </svg>
                  </div>

                  <div>
                       <label for="to" class="text-2xl block mb-3">To</label>
                       <select class="block w-full py-5 px-4 rounded-lg border border-neutral-500 bg-white" id="to">
                          <option></option>
                       </select>
                  </div>
              </div>

              <div class="mb-8">
                <p class="text-2xl">1 USD = 118.16 NPR </p>
              </div>

              <button type="button" class="block w-full py-5 px-4 text-2xl bg-violet-700 hover:bg-violet-800 text-white rounded-lg"> Get Exchange Rate </button>
          </form>
       </div>
  </div>
`

setupConverter(document.querySelector<HTMLButtonElement>('#counter')!)
