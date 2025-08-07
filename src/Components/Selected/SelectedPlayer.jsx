import React from 'react'
import { GoTrash } from "react-icons/go";
export default function SelectedPlayer({ select, teamRemoveBtn }) {
    const { profileImg, name, role, id, price } = select;
    return (
        <div>
            <div className='border border-[#1313131A] rounded-2xl p-6 items-center
     mb-6 flex justify-between'>


                <div className='flex items-center gap-6'>
                    <div className=' w-[80px] '>
                        <img className='h-[80px] object-cover rounded-2xl bg-gray-300' src={profileImg} alt="" />
                    </div>
                    <div>
                        <h1 className='mb-3 text-2xl font-semibold'>{name}</h1>
                        <h1 className='text-[16px] font-normal text-[#13131399]'>{role}</h1>
                    </div>
                </div>
                <div>
                    <GoTrash
                        onClick={() => teamRemoveBtn(id, name, price)}
                        className='text-red-500 hover:text-green-500' />
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}
