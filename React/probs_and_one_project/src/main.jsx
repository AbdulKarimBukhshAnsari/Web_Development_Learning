import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // import karna compulsory he brother 
import Button from './button'
import { useState } from 'react'
// checking something

function Button_Formation(){
  const [bgcolor , setbgColor] = useState('green')

  let btn_array = ['red' , 'yellow' , 'green' , 'purple' , 'orange' , 'lightgray' ,'olive' ];
  return(
    <div className='w-[100%] h-screen  '  style={{backgroundColor: bgcolor}}>
    <div className='flex gap-5 bg-white absolute bottom-4 flex-wrap px-auto w-full justify-center py-3'>
    {
      btn_array.map((btn)=> <Button color={btn} bgcolor = {bgcolor} setbgColor = {setbgColor}/>)
    }
    </div>
    </div>
  )
}




createRoot(document.getElementById('root')).render(
  <Button_Formation/>
)
