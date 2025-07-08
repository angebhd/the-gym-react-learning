
export default function CounterProps({count, setCount} : {count:number, setCount:Function}) {
  return (
    <div>
       <div>
        <p>Counter (Props) : <span>{count}</span></p>
        <button onClick={() => setCount(count +1 )}>Increment</button>
        <button onClick={() => setCount(count -1 )}>Decrement</button>
    </div>
    </div>
  )
}
