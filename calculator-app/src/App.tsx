
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Keys from './components/Keys'

function App() {
  const [result, setResult] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<number | string>(0);
  const operator = useRef<string>('');
  console.log("result", result)
  console.log("current value", currentValue)
  useEffect(() => {
    console.log("rrr", currentValue, operator.current)

    if (currentValue == "A/C") {
      setResult(0);
      operator.current = "";
      setCurrentValue(0);
    }
    if (typeof currentValue === 'string') {
      operator.current = currentValue;
    } else {
      console.log("rrr", currentValue, operator.current)
      if (operator.current === "") {
        setResult(currentValue);
      } else {
        switch (operator.current) {
          case "+":
            setResult(result + currentValue);
            operator.current = "";
            break;
          case "-":
            setResult(result - currentValue);
            operator.current = "";
            break;
          case "x":
            setResult(result * currentValue);
            operator.current = "";
            break;
          case "/":
            setResult(result / currentValue);
            operator.current = "";
            break;
          case "+/-":
            setResult(result * -1);
            operator.current = "";
            break;
          case "%":
            setResult(result / 100);
            operator.current = "";
            break;
          case "A/C":
            setResult(0);
            operator.current = "";
            break;
          default:
            break;
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
