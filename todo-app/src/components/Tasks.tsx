import { useDispatch, useSelector } from "react-redux"
import type { Task } from "../types"
import { changeStatus, removeTask } from "../feature/tasks"

export default function Tasks() {
  const tasks: Task[] = useSelector((state: any) => state.tasks.value)
  const dispatch = useDispatch()

  const changeTaskStatus = (index: number) => {
    console.log("changing status: ", index);
    
    dispatch(changeStatus(index))

  }

  const removeTaskL = (index: number) => {
    dispatch(removeTask(index))

  }

  const TaskElement = ({ task, index }: { task: Task, index: number }) =>
  (<div className={`grid grid-cols-20 w-full p-1 text-lg  ${task.done? 'line-through' : ""}`}>
    <input type="checkbox" checked={task.done} onChange={() => changeTaskStatus(index)} 
    className={`col-span-1 accent-amber-300`}
    />

    <p  className={` col-span-16 ml-5   `}>{task.description}</p>

    <button 
        className={`col-span-1  bg-red-600 rounded-full`}

    onClick={() => removeTaskL(index)}>d</button>
  </div>)

  return (
    <div className="flex flex-col gap-1 bg-gray-50 p-10">
      {
        tasks.map((t, i) => <TaskElement key={`${t.description}+`} task={t} index={i} />)
      }

    </div>
  )
}
