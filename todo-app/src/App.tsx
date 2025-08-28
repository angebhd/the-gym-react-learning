import './App.css'
import ToDoForm from './components/ToDoForm'
import Tasks from './components/Tasks'

function App() {

  return (
    <>
      <h1 className=' text-center text-3xl uppercase my-10'>Todo App</h1>
      <ToDoForm />
      <Tasks />
    </>
  )
}

export default App
