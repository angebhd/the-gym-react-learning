
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Keys from './components/Keys'

type arithmeticOperator = '+' | '-' | 'x' | '/';

export default function App2() {
  const [result, setResult] = useState<string>('');
  const [currentValue, setCurrentValue] = useState<number | string>(0);
  const [firstNumber, setFirstNumber] = useState<string | null>(null);
  const [secondNumber, setSecondNumber] = useState<string | null>(null);

  const operator = useRef<arithmeticOperator | "">('');

  function calculate(a: string, b: string, operation: arithmeticOperator): string {
    switch (operation) {
      case "+":
        return (Number(a) + Number(b)).toString();
        break;
      case "-":
        return (Number(a) - Number(b)).toString();
        break;
      case "x":
        return (Number(a) * Number(b)).toString();
        break;
      case "/":
        return (Number(a) / Number(b)).toString();
        break;
      default:
        return ''
    }

  }

  function updateOneNumber(number: string, newDigit: number | "."): string {
    return number + newDigit.toString();
  }
  function chooseNumberToupdate(currentValue: number) {
    if (firstNumber === null) {
      setFirstNumber(currentValue.toString())
      setResult(currentValue.toString())
    } else if (operator.current === "") {
      const tempNumber = updateOneNumber(firstNumber, currentValue)
      setFirstNumber(tempNumber);
      setResult(tempNumber)
    } else {
      if (secondNumber === null) {
        setSecondNumber(currentValue.toString());
        setResult(currentValue.toString())
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
    setResult('');
  }

  function changeNumberSign() {
    if (operator.current === "") {
      setFirstNumber((prevValue) => {
        if (prevValue === null) return null;
        return (Number(prevValue) * -1).toString();
      });
      /// update what it is shown
      setResult((prevValue) => {
        if (prevValue === null) return '';
        return (Number(prevValue) * -1).toString();
      })
    } else {
      setSecondNumber((prevValue) => {
        if (prevValue === null) return null;
        return (Number(prevValue) * -1).toString();
      })
      setResult((prevValue) => {
        if (prevValue === null) return '';
        return (Number(prevValue) * -1).toString();
      })
    }
  }

  function getPercentage() {
    if (operator.current === "") {
      setFirstNumber((prevValue) => {
        if (prevValue === null) return null;
        return (Number(prevValue) / 100).toString();
      });
      /// update what it is shown
      setResult((prevValue) => {
        if (prevValue === null) return '';
        return (Number(prevValue) / 100).toString();
      })
    } else {
      setSecondNumber((prevValue) => {
        if (prevValue === null) return null;
        return (Number(prevValue) / 100).toString();
      })
      setResult((prevValue) => {
        if (prevValue === null) return '';
        return (Number(prevValue) / 100).toString();
      })
    }
  }
  function addDecimalPoint() {
    if (firstNumber === null) {
      setFirstNumber('0.');
      setResult("0.");
      return;
    }
    if (operator.current === "") {
      if (firstNumber.includes('.')) return;
      setFirstNumber(prev => prev + '.');
      setResult(prev => prev + '.');
      return;
    } else {
      if (secondNumber === null) {
        setSecondNumber('0.');
        setResult("0.");
        return;
      } else {
        if (secondNumber.includes('.')) return;
        setSecondNumber(prev => prev + '.');
        setResult(prev => prev + '.');
        return;
      }
    }


  }

  function performOperations() {
    if (currentValue === "A/C") {
      reinitializeAllValues()
      return;
    }
    if (currentValue === '+/-') {
      changeNumberSign();
      return;
    }
    if (currentValue === '%') {
      getPercentage();
      return;
    }
    if (currentValue === '.') {
      addDecimalPoint();
      return;
    }

    if (operator.current === "") {
      if (currentValue === "=") {
        return;
      } else {
        operator.current = currentValue as arithmeticOperator;
      }
    } else {
      if (secondNumber !== null && firstNumber !== null) {
        const res = calculate(firstNumber, secondNumber, operator.current)
        setResult(res);
        setFirstNumber(res);
        setSecondNumber(null);
        if (currentValue === '=') {
          console.log('re-init ', currentValue)
          operator.current = "";
        } else {
          console.log('New sign ', currentValue)
          operator.current = currentValue as arithmeticOperator
        }
      }
    }

  }
  useEffect(() => {
    console.log(currentValue)
    if (typeof currentValue === 'number') {
      chooseNumberToupdate(currentValue);
    } else {
      performOperations();
    }
  }, [currentValue])

  return (
    <>
      <div className='bg-amber-300 max-w-md min-w-80 max-h-full grid grid-cols-4 grid-rows-11'>
        <Header result={result == "" ? 0 : result} />
        <Keys setCurrentValue={setCurrentValue} />
      </div>
    </>
  )
}