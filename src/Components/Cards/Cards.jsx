import React from 'react'
import { FaFlag } from "react-icons/fa";
export default function Cards({ cards ,choosePlayerBtn}) {
    const { id, name, coverImg, profileImg ,rating ,role ,roleStyle,price} = cards;
    
    return (
        
        <div>
            <div className='p-6 border border-[#1313131A] rounded-[24px]'>
                <img className='rounded-[24px] w-full h-[240px] object-cover' src={coverImg} alt="" />
                <div className='flex items-center gap-4 mt-6 mb-[18px]'>
                    <img className='w-15 h-15 rounded-full object-cover' src={profileImg} alt="" />
                    <h1 className='text-[20px] font-semibold'>{name}</h1>
                </div>
                <div className='flex justify-between mb-4'>
                    <div className='flex items-center gap-3'>
                        
                        < FaFlag  />
                        <h1 className='text-[16px] font-normal text-gray-500'>Bangladesh</h1>
                    </div>
                    <div className='py-[9px] px-[16px] bg-[#1313130D] rounded-[8px]'>
                        <p>{role}</p>
                    </div>
                </div>
                <hr className='text-[#1313131A]'/>
                <h1 className='mt-4 mb-4 text-[16px] font-semibold'>Rating : <span className='font-extrabold'>{rating}</span></h1>
                <div className='flex justify-between mb-3'>
                    <h1 className='text-[16px] font-semibold '>{role}</h1>
                    <h1 className='text-[16px] font-normal text-[#131313B2]'>{roleStyle}</h1>
                </div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[16px] font-semibold'>Price:  {price}</h1>
                    <button 
                    onClick={() => choosePlayerBtn(cards)}
                    className='font-normal text-[14px] py-[9px] px-[16px] border border-[#1313131A] rounded-[8px] hover:bg-emerald-100 hover:border-emerald-400'>Choose Player</button>
                </div>
            </div>
        </div>
    )
}
