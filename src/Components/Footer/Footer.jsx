import React from 'react'
import banner1 from '../../assets/logo-footer.png';

export default function Footer() {
    return (
        <div className='pt-[200px] bg-black '>
            <div className='w-10/12 mx-auto   '>
                <div className='flex justify-center mb-[64px]'>
                    <img className='' src={banner1} alt="" />
                </div>
                <div className='flex justify-between pb-[70px]'>
                    <div className=''>
                        <h1 className='text-white text-[18px] font-semibold mb-4'> About Us</h1>
                        <p className='text-[#FFFFFF99] text-[16px] font-normal'>We are a passionate team <br />dedicated to providing the best <br />services to our customers.</p>
                    </div>
                    <div>
                        <h1 className='text-white text-[18px] font-semibold mb-4'>Quicklinks</h1>
                        <a href="
                        ">
                            <ul className="list-disc pl-6 text-white">
                            <li className= ' text-[#FFFFFF99] text-[16px] font-normal'>Home</li>
                            <li className='text-[#FFFFFF99] text-[16px] font-normal py-4'>Services</li>
                            <li className='text-[#FFFFFF99] text-[16px] font-normal'>About</li>
                            <li className='text-[#FFFFFF99] text-[16px] font-normal py-4'>Contact</li>
                        </ul>
                        </a>
                    </div>
                    <div>
                        <h1 className='text-white text-[18px] font-semibold mb-4'> Subscribe</h1>
                        <p className='text-[#FFFFFF99] text-[16px] font-normal mb-4'>Subscribe to our newsletter for the latest updates.</p>
                        <div>
                            <input className='bg-white py-[14px] px-[30px]  rounded-l-xl w-[240px]  text-[16px]' type="email" name="" id="" placeholder='Enter your email :' />

                            <button className='py-[14px] px-[30px] bg-[url(https://static.vecteezy.com/system/resources/previews/020/933/072/non_2x/abstract-blur-gradient-background-vector.jpg)] bg-cover bg-center text-white text-[16px] 
                                font-[700] rounded-r-xl hover:text-green-400'>Subscribe</button>

                        </div>
                    </div>


                </div>

            </div>
            <hr className='text-[#FFFFFF26] ' />
            <h1 className='text-white text-center py-8'>
                @2024 Your Company All Rights Reserved.
            </h1>
        </div>
    )
}
