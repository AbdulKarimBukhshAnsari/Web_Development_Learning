import { useDispatch , useSelector } from "react-redux";
import {removeTodo } from "../features/todoSlice";

export default function Todo(){
    const dispatch = useDispatch()
    const deleteTask = (id) => dispatch(removeTodo({id:id}));
    const todos = useSelector(state => state.todos)

    return(
        <ul className="w-[80vw] mx-auto">
            {todos.map((todo) => (
                <li key={todo.id} className="w-full text-black  flex py-2 px-2 ">
                <div className="task w-[80%] rounded-l-lg  bg-blue-300 py-2 px-2">{todo.text}</div>
                <button className="delete-button w-[20%] rounded-r-lg bg-red-500 text-black" onClick={() => deleteTask(todo.id)}>X</button>
            </li>
            ))}
            
        </ul>
        
    )
}