
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Keys from './components/Keys'

type arithmeticOperator = '+' | '-' | 'x' | '/';

function App() {
  const [result, setResult] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<number | string>(0);
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [secondNumber, setSecondNumber] = useState<number | null>(null);

  const operator = useRef<arithmeticOperator | "">('');

  function calculate(a: number, b: number, operation: arithmeticOperator): number {
    switch (operation) {
      case "+":
        return a + b;
        break;
      case "-":
        return a - b;
        break;
      case "x":
        return a * b;
        break;
      case "/":
        return a / b;
        break;
      default:
        return 0
    }

  }

  function updateOneNumber(number: number, newDigit: number | "."): number {
    return Number(number.toString() + newDigit.toString());
  }
  function chooseNumberToupdate(currentValue: number) {
    if (firstNumber === null) {
      setFirstNumber(currentValue)
      setResult(currentValue)
    } else if (operator.current === "") {
      const tempNumber = updateOneNumber(firstNumber, currentValue)
      setFirstNumber(tempNumber);
      setResult(tempNumber)
    } else {
      if (secondNumber === null) {
        setSecondNumber(currentValue);
        setResult(currentValue)
      } else {
        const tempNumber = updateOneNumber(secondNumber, currentValue)
        setSecondNumber(tempNumber);
        setResult(tempNumber)
      }
    }
  }
  function reinitializeAllValues() {
    console.log("A/C = renitialize")
    setFirstNumber(null);
    setSecondNumber(null);
    operator.current = '';
    setResult(0);
  }

  useEffect(() => {
    console.log(currentValue)
    if (typeof currentValue === 'number') {
      chooseNumberToupdate(currentValue);
    } else {
      if (currentValue === "A/C") {
        reinitializeAllValues()
      }
      if (operator.current === "") {
        if (currentValue === "A/C") {
          // console.log("A/C = renitialize")
          // setFirstNumber(null);
          // setSecondNumber(null);
          // setResult(0);
        } else {
          operator.current = currentValue;
        }
      } else {
        if (secondNumber !== null && firstNumber !== null) {
          const res = calculate(firstNumber, secondNumber, operator.current)
          setResult(res)
          setFirstNumber(res)
          operator.current = currentValue
        }

      }

    }

  }, [currentValue])

  return (
    <>
      <div className='bg-amber-300 max-w-md min-w-80 max-h-full grid grid-cols-4 grid-rows-11'>
        <Header result={result} />
        <Keys setCurrentValue={setCurrentValue} />
      </div>
    </>
  )
}

export default App
