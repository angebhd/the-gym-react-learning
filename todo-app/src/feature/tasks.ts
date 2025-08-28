import { createSlice } from "@reduxjs/toolkit";
import type { Task } from "../types";

const initialStateValue: { value: Task[] } = { value: [] }
export const tasks = createSlice({
    initialState: initialStateValue,
    name: "tasks",
    reducers: {
        addTask: (state, action) => {
            state.value.push(action.payload)
        },

        removeTask: (state, action) => {
            const newState = state.value.filter((_, ind) => ind != action.payload)
            state.value = newState
        },


        changeStatus(state, action) {
            const newState = state.value.map((t, ind) => ind == action.payload ? { ...t, done: !t.done } : t)
            state.value = newState

        }
    }
})
export const { addTask, removeTask, changeStatus } = tasks.actions;
export default tasks.reducer;