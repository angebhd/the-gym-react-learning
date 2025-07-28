import type { DieType } from "../App";

export default function Die({dieData}: { dieData: DieType }) {
    return (
        <button 
        className={`h-[50px] w-[50px] rounded-lg shadow-xl border-none  text-xl font-bold cursor-pointer
            ${dieData.isHeld ? "bg-[#59E391]" : "bg-white"}
            `}
        onClick={() => dieData.hold(dieData.id)}
        >
            {dieData.value}
        </button>
    )
}
