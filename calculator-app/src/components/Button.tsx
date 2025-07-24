
export default function Button(props: { value: number | string, index: number, onClick: Function}) {
    return (
        <button className={` row-span-2 font-bold  text-lg border-gray-400 border-1
        ${props.value === 0 ? 'col-span-2' : 'col-span-1'}
        ${(props.index + 1) % 4 === 0 || props.value == "=" ? 'bg-amber-600 text-white hover:bg-amber-700' : ' bg-gray-200 text-black hover:bg-gray-100'}
        `}
        onClick={() => props.onClick()}
        >
            {props.value}
        </button>
    )
}
