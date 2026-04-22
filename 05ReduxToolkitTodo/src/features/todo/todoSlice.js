import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id : 22, todoText : "hello"}]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                todoText : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo : (state, action) => {
            state.todos.forEach((todo)=>{
                if(todo.id === action.payload.id){
                    todo.todoText = action.payload.text
                }
            })
        }
    }

});

export const {addTodo, removeTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer;