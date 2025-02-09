// importing the modules 
import { createSlice , nanoid } from "@reduxjs/toolkit";

// defining the initial state 

const initialState = {
    todos : [
        {
            id : 1 ,
            text: 'Hello World!'
        }
    ]
};

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    // the functions in reducer will give you two things , one is state which is basically the variable which is current , second one is action which will you send 
    reducers :{
        addTodo: (state , action) => {
            const todo = {
                id : nanoid(),
                text : action.payload.text,
            }
            state.todos.push(todo);
        },
        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        }
    }
})



