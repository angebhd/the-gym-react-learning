import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import List from './components/List'
import User from './components/User'
import CounterProps from './components/CounterProps';
import { useState } from 'react'
import FilterableProduct from './components/FilterableProduct'
import StateProps from './components/StateProps'

function App() {
  const [count, setCount] = useState(0);
  console.log(typeof count);
  console.log(typeof setCount);
  console.log( setCount);
  return (
    <>
      {/* <h1>Hello world !</h1>
      <Button />
      <User />
      <hr />
      <h4>List</h4>
      <List />
      <hr />
      <Counter />
      <Counter />
      <hr />
      <CounterProps count={count} setCount={setCount} />
      <CounterProps count={count} setCount={setCount} />
      <hr />
      <FilterableProduct /> */}

      <StateProps state={count} setState={setCount} prop={3} />

    </>
  )
}

export default App
