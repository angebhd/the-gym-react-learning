
import { useState } from 'react'
import './App.css'

import { languages } from './data/languages'
import clsx from 'clsx';


function App() {
  const [currentWord, setCurrentWord] = useState<string>("REACT");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

  function addGuessedLetter(letter: string) {
    console.log(guessedLetters)
    console.log(letter);
    setGuessedLetters(prevLetters =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    )
  }

  return (
    <main className='max-w-[500px]' >
      <header className='text-center '>
        <h1 className='text-xl font-medium text-[#F9F4DA] '>Assembly: Endgame</h1>
        <p className='text-xs text-[#8E8E8E]  '>Guess the word within 8 attempts to keep the
          programming world safe from Assembly!</p>
      </header>
      <section className=" bg-[#10A95B] text-[#F9F4DA] flex flex-col items-center rounded-xs mt-8 mb-8  ">
        <h2 className='text-xl m-1   '>You win!</h2>
        <p className='m-1  '>Well done! 🎉</p>
      </section>

      <section className='flex flex-wrap gap-1.5 justify-center mb-8'>
        {languages.map(language => <span
          // className={`text-[${language.color}] bg-[${language.backgroundColor}]`}
          key={language.name}
          className='rounded-xs p-1'
          style={{ color: language.color, backgroundColor: language.backgroundColor }}
        >
          {language.name}
        </span>)}
      </section>
      <section className="flex justify-center gap-1 mb-8 ">
        {currentWord.split("").map((letter, index) => (
          <span
            className='h-10 w-10 bg-[#323232] flex justify-center items-center text-xl border-b border-[#F9F4DA] '
            key={index}>{letter.toUpperCase()}</span>))}
      </section>

      <section className=" flex flex-wrap gap-2 justify-center mb-8  ">
        {alphabet.map(letter => {
          const isGuessed = guessedLetters.includes(letter);
          const isCorrect = isGuessed && currentWord.includes(letter);
          const isWrong = isGuessed && !currentWord.includes(letter);
          console.log(isGuessed, isCorrect, isWrong, letter);
          console.log(
            clsx({
              isCorrect: isCorrect,
              isWrong: isWrong
            })
          )
          return (<button
            className={`h-8 w-8 bg-[#FCBA29] border border-[#D7D7D7] cursor-pointer rounded-xs text-black 
              ${clsx({
              isCorrect: isCorrect,
              isWrong: isWrong
            })}
              `}

            onClick={() => addGuessedLetter(letter)}
          >{letter}</button>)
        })
        }

      </section>
      <button className="bg-[#11B5E5] border border-[#D7D7D7] rounded-lg w-[225px] px-1 py-2 block cursor-pointer mx-auto text-black  ">New Game</button>

    </main>
  )
}

export default App
