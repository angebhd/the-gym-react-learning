
export default function StateProps( {state, setState, prop} : {state:number, setState:Function, prop:number} ) {
    prop = 35;
  return (
    <>
    <div>
        <p>Counter (State) : <span>{state}</span></p>
        <button onClick={() => setState(state +1 )}>Increment</button>
    </div>
    <div>
        <p>Prop : <span>{prop}</span></p>
    </div>
    </>
  )
}

// export default function StateProps( prop : {state:number, setState:Function, prop:number} ) {
//     prop.prop = 35;
//   return (
//     <>
//     <div>
//         <p>Counter (State) : <span>{prop.state}</span></p>
//         <button onClick={() => prop.setState(prop.state +1 )}>Increment</button>
//     </div>
//     <div>
//         <p>Prop : <span>{prop.prop}</span></p>
//     </div>
//     </>
//   )
// }
