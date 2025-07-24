import type { Dispatch, SetStateAction } from "react";
import Button from "./Button";

export default function Keys(props : {setCurrentValue: Dispatch<SetStateAction<number|string>>}) {
    const KEYS : (string|number)[] = ["A/C", "+/-", "%", "/", 7, 8,9, "x", 4,5,6, "-", 1,2,3, "+", 0, ".", "=" ]
    return (
        <div className="bg-green-600 col-span-4 row-span-10 grid grid-cols-4 grid-rows-10">
           {KEYS.map((key, index) => <Button onClick={()=> props.setCurrentValue(key)} value={key} key={index} index={index} />)}

        </div>
    )
}
