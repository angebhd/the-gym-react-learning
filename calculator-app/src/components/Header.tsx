
export default function Header(props : {result: number | string}) {
    return (
        <div className="bg-gray-500 text-2xl text-white text-right p-2 col-span-4 row-span-1">
            {props.result}
        </div>
    )
}
