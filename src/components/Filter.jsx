import React from 'react'
import { filterData } from '../utils/helper'

// YHA PRR DATA PROPS KE DVARA APP.JS KE ANDR SE AA RHA HAI
const Filter = (props) => {
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title)
  }

  return (
    <div className='container flex justify-center gap-5 items-center my-8'>
      {filterData.map((obj, index) => (
        <div class="flex justify-center items-center gap-12 h-full" key={index}>
          <div class="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]">
            <button
              class={`group p-[4px] rounded-[12px] from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]
                ${category === obj.title ? 'bg-gradient-to-tr text-black border border-black' : 'bg-gradient-to-b'}`}
              onClick={() => filterHandler(obj.title)}>
              <div
                class="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-2 py-2">
                <div class="flex gap-2 items-center">
                  <span class="font-semibold">{obj.title}</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Filter