import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <p>Counter : <span>{count}</span></p>
        <button onClick={() => setCount(count +1 )}>Increment</button>
        <button onClick={() => setCount(count -1 )}>Decrement</button>
    </div>
  )
}
