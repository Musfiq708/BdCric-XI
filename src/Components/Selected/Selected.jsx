import React from 'react'
import SelectedPlayer from "./SelectedPlayer";
export default function Selected({ selection, teamRemoveBtn, handleBtnToggle }) {


  return (
    <div>
      <div className='mb-[270px]'>
        {
          selection.map((select, idx) =>
            <SelectedPlayer key={idx}
              select={select}
              teamRemoveBtn={teamRemoveBtn}
            ></SelectedPlayer>
          )
        }
        <button
          onClick={() => handleBtnToggle("available")}
          className="bg-yellow-300 hover:bg-orange-400 text-black text-[16px] font-bold py-3.5 px-5 rounded-[12px]  shadow-[#E7FE29] ring-3 ring-[#131313]  border-6 border-white mt-5">
          Add More Player
        </button>
      </div>
    </div>
  )
}
