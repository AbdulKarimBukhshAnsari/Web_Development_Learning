import { createContext } from "react";


// this line will make the context and here the few default values
export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "This is the first Task",
            completed : false,
        }
    ],
    addTodo : (todo) => {},
    modifyTodo : (id , todo) => {},
    removeTodo : (id) => {},
    toggleComplete : (id) => {},
});

export const ContextProvider = TodoContext.Provider;

export const useTodo = 