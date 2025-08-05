import banner1 from '../../assets/bg-shadow.png';
import banner2 from '../../assets/banner-main.png';
export default function Banner({freeCreditBtn}) {
    
    return (
        <div className="flex items-center justify-center   mx-auto mb-[90px]">
            <div className="relative rounded-2xl overflow-hidden w-10/12 py-[64px]">

                <img
                    src={banner1}
                    alt=""
                    className=" object-cover absolute inset-0 z-1 h-full"
                />

                <div className="absolute inset-0 bg-black bg-opacity-80"></div>

                <div className="relative z-10 text-center ">

                    <div className="flex justify-center ">
                        <img
                            src={banner2}
                            alt=""
                            className="mb-6"
                        />
                    </div>

                    <h1 className="text-[40px]  font-bold  text-white mb-4 ">
                        Assemble Your Ultimate  Cricket Team
                    </h1>

                    <p className=" text-2xl font-medium text-[#FFFFFFB2] mb-1">
                        Beyond Boundaries Beyond Limits
                    </p>

                    <button
                    onClick={freeCreditBtn}
                    className="bg-yellow-300 hover:bg-orange-400 text-black text-[16px] font-bold py-3.5 px-5 rounded-[12px]  shadow-[#E7FE29] ring-1 ring-[#E7FE29] border border-6 mt-5">
                        Claim Free Credit
                    </button>

                </div>
            </div>
        </div>


    )
}