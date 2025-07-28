import { useState } from 'react';
import './App.css';
import Die from './components/Die';

export type DieType = {
  id: number
  value: number;
  isHeld: boolean
  hold: Function
}

function App() {
  const [dice, setDice] = useState<DieType[]>(generateAllNewDice());
  let gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value);



  function generateAllNewDice(): DieType[] {
    const arr: DieType[] = [];
    for (let i = 0; i < 10; i++) arr.push({ id: i, value: Math.ceil(Math.random() * 6), isHeld: false, hold });

    return arr;
    // return new Array(10)
    //         .fill(0)
    //         .map(() => Math.ceil(Math.random() * 6))

  }
  const rollDice = () => {
    const newArr: DieType[] = []
    for (let die of dice) {
      newArr.push({ ...die, value: die.isHeld ? die.value : Math.ceil(Math.random() * 6) });
    }
    setDice(newArr);

    // setDice(oldDice => oldDice.map(die =>
    //   die.isHeld ?
    //     die :
    //     { ...die, value: Math.ceil(Math.random() * 6) }
    // ))
  }
  function hold(id: number) {
    setDice(prevDice => {
      let newArr = [...prevDice];
      newArr[id] = { ...newArr[id], isHeld: !newArr[id].isHeld };
      return newArr;
    })
  }

  console.log(generateAllNewDice());

  return (
    <main className="bg-[#f5f5f5] h-full rounded-lg flex flex-col justify-evenly items-center">
      <div>
        <h1 className=" text-2xl text-center">Tenzies</h1>
        <p className=" font-light text-center ">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className='grid grid-cols-5 grid-rows-2 gap-5'>

        {dice.map((dieObject, ind) => <Die key={ind} dieData={dieObject} />)}

      </div>
      <button onClick={rollDice}
        className='h-[50px] px-3 border-none rounded-lg bg-[#5035ff] text-white text-lg cursor-pointer   '
      >{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App
