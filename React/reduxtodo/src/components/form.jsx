import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../features/todoSlice' 


export default function Form() {
    const [task , setTask] = useState("First Task")
    const dispatch = useDispatch();
    console.log('hllo ')
    const addTask = function(e){
        e.preventDefault();
        dispatch(addTodo({text : task}))
        setTask('');
        return ;
    }


    return (
        <>
         <form onSubmit={addTask} className="w-[80vw] mx-auto">
            <div className="input-areas flex gap-2">
                <input 
                type="text"  
                className="w-[80%] bg-gray-200 py-2.5 rounded-sm font-bold px-1.5 "
                value={task}
                onChange={(e)=>setTask(e.target.value)}        
                />
                <input type="submit" value="Add Task" className="w-[20%] bg-amber-200 font-bold cursor-pointer hover:bg-amber-300 "/>
            </div>
         </form>
        </>



    )



}