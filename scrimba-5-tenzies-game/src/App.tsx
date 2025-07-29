import { useEffect, useRef, useState } from 'react';
import './App.css';
import Die from './components/Die';
import ReactConfetti from 'react-confetti';

export type DieType = {
  id: number
  value: number;
  isHeld: boolean
  hold: Function
}

export default function App() {
  const [dice, setDice] = useState<DieType[]>(() => generateAllNewDice()); // Lazy state initialization
  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function generateAllNewDice(): DieType[] {
    const arr: DieType[] = [];
    for (let i = 0; i < 10; i++) arr.push({ id: i, value: Math.ceil(Math.random() * 6), isHeld: false, hold });
    return arr;
  }
  const rollDice = () => {
    if (!gameWon) {

      const newArr: DieType[] = []
      for (let die of dice) {
        newArr.push({ ...die, value: die.isHeld ? die.value : Math.ceil(Math.random() * 6) });
      }
      setDice(newArr);
    } else {
      setDice(generateAllNewDice());
    }


  }
  function hold(id: number) {
    setDice(prevDice => {
      let newArr = [...prevDice];
      newArr[id] = { ...newArr[id], isHeld: !newArr[id].isHeld };
      return newArr;
    })
  }

  useEffect(() => {
    if (gameWon) {
      buttonRef.current?.focus()
    }
  }, [gameWon])

  return (
    <main className="bg-[#f5f5f5] h-full rounded-lg flex flex-col justify-evenly items-center">
      {gameWon && <ReactConfetti />}
      {/* for screen reader  */}
      <div aria-live="polite" className="sr-only">
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>
      <div>
        <h1 className=" text-2xl text-center">Tenzies</h1>
        <p className=" font-light text-center ">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className='grid grid-cols-5 grid-rows-2 gap-5'>

        {dice.map((dieObject, ind) => <Die key={ind} dieData={dieObject} />)}

      </div>
      <button onClick={rollDice} ref={buttonRef}
        className='h-[50px] px-3 border-none rounded-lg bg-[#5035ff] text-white text-lg cursor-pointer   '
      >{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}

