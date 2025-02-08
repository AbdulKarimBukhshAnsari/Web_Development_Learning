import { useEffect, useState } from 'react'
import { TodoContext , ContextProvider , useTodo } from './context'
import './index.css'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';



function App() {
  const [todos , setTodos] = useState([]);

  // the functionality of the addition of the task 
  const addTodo = (todo) => {
    setTodos((prev)=>[{id: Date.now() , todo:todo , completed : false}, ...prev]);
  }

  const modifyTodo = (id,todo) => {
    setTodos((prev)=>prev.map((eachTodo)=>eachTodo.id === id ?  {...eachTodo , todo} : eachTodo));
  }

  // we used the filter function 
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id!==id));
  }

  const  toggleComplete = (id) => {
    setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? {...eachTodo , completed : !eachTodo.completed} : eachTodo));
  }

  useEffect(()=>{
    const temp_todos = JSON.parse(localStorage.getItem('todos'));
    if(temp_todos && temp_todos.length > 0) setTodos(temp_todos);
  },[]);

  useEffect(()=>{
    localStorage.setItem('todos' , JSON.stringify(todos));
  },[todos]);

  return (
    <ContextProvider value = {{todos , addTodo , modifyTodo , removeTodo , toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm/> 
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div className="w-full" key={todo.id}>
                  <TodoItem todo ={todo} />
                </div>
              ) )}
          </div>
      </div>
   </div>
    </ContextProvider>
  )
}

export default App
