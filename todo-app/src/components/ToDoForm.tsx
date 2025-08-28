import { useDispatch } from "react-redux";
import { addTask } from "../feature/tasks";

export default function ToDoForm() {
  const dispatch = useDispatch()

  function submitAction(formData: FormData) {
    const description = formData.get("description") as string;
    if (description == null) return;
    dispatch(addTask({done:false, description}))
  }

  return (
    <form action={submitAction} className="my-5 mx-auto bg-white pt-10 pb-5 rounded-2xl flex justify-center gap-5 ">
      <input className=" p-2  outline-1 outline-amber-300 rounded-2xl" name="description" type="text" placeholder="Add task" />
      <input className="bg-amber-300 p-2 rounded-2xl font-bold" type="submit" value="ADD TASK" />
    </form>
  );
}
