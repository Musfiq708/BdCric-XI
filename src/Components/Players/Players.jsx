import Available from "../Available/Available";
import Selected from "../Selected/Selected";

export default function Players({handleBtnToggle , btnToggle}) {
    return (
        <div className="w-10/12 mx-auto">
            <div className="flex  justify-between mb-[38px]">
                <h1 className="font-bold text-[28px] ">Available Players</h1>
                <div className="">
                    <button
                    onClick={()=>handleBtnToggle("available")}
                    className={`${btnToggle.available ? "text-[16px] font-bold py-[14px] px-[30px] bg-[#E7FE29] border border-[#1313131A] rounded-l-[12px] hover:bg-amber-200 hover:border-red-500" : "text-[16px] font-normal py-[14px] px-[30px] bg-white border border-[#1313131A] rounded-l-[12px] text-[#13131399] hover:bg-emerald-100 hover:border-emerald-400"}`}>Available</button>
                    <button
                    onClick={()=>handleBtnToggle("selected")}
                    className={`${btnToggle.available ?  "text-[16px] font-normal py-[14px] px-[30px] bg-white border border-[#1313131A] rounded-r-[12px] text-[#13131399] hover:bg-emerald-100 hover:border-emerald-400" :"text-[16px] font-bold py-[14px] px-[30px] bg-[#E7FE29] border border-[#1313131A] rounded-r-[12px] hover:bg-amber-200 hover:border-red-500" }`}>Selected (0)</button>
                </div>
            </div>
            {
               btnToggle.available ? <Available></Available> : <Selected></Selected>
            }
        </div>
        
    )
}
// "text-[16px] font-bold py-[14px] px-[30px] bg-[#E7FE29] border border-[#1313131A] rounded-l-[12px] hover:bg-amber-200 hover:border-red-500"

// "text-[16px] font-normal py-[14px] px-[30px] bg-white border border-[#1313131A] rounded-r-[12px] text-[#13131399] hover:bg-emerald-100 hover:border-emerald-400"
{/* <Available></Available>
            <Selected></Selected> */}