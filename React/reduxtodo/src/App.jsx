import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/form'
import Todo from './components/todo'
import './index.css'

function App() {


  return (
    <div className='main h-[100vh] py-10'  style={{
      backgroundImage: "url('https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",



      
    }}>
      <h1 className="main-heading text-white w-[20%] mx-auto text-4xl mb-6">Todo Application </h1>
      <Form/>
      <Todo/>
    </div>
  
  )
}

export default App
