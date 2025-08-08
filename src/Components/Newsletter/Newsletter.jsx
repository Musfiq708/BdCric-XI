import React from 'react'
import banner1 from '../../assets/bg-shadow.png';
export default function Newsletter() {
    return (
        <div>
            <div className="relative flex items-center justify-center   mx-auto p-[24px] border-2 border-white w-10/12 rounded-[24px] top-50">
                <div className="relative rounded-[24px] overflow-hidden  py-[88px] w-full
                ">

                    <img
                        src={banner1}
                        alt=""
                        className=" object-cover absolute inset-0 z-1 h-full w-full"
                    />

                    <div className="absolute inset-0 bg-white bg-opacity-80"></div>

                    <div className="relative z-10 text-center ">
                        <h1 className='text-[32px] font-bold'>Subscribe to our Newsletter</h1>
                        <h1 className='text-[#131313B2] text-[20px] font-medium mt-[16px] mb-6'>Get the latest updates and news right in your inbox!</h1>
                        <div>
                            <input className='py-[18px] px-[30px] border border-[#13131326] rounded-xl w-[400px] mr-4' type="email" name="" id="" placeholder='Enter your email :'/>
                            
                                <button className='py-[18px] px-[30px] bg-[url(https://static.vecteezy.com/system/resources/previews/020/933/072/non_2x/abstract-blur-gradient-background-vector.jpg)] bg-cover bg-center text-white text-[16px] 
                                font-[700] rounded-xl hover:text-green-400'>Subscribe</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
