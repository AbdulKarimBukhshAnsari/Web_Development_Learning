import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// using the JSX 
function First_question(){
  return <>
    <h1>Hello JSX</h1>
    <p>Welcome To React!</p>
  
  </>
}

// To check the event handling in JSX
function Button_clicked(){
  // instead of calling the function in the o click just give the reference otherwise it will call the function which is not our target our target to invoke the function when the button wil be clicked 
  return <>
  <button id='login' onClick={handle_click}>  
    Log in 
  </button>
  </>
}


createRoot(document.getElementById('root')).render(
  <>
    <First_question/>
    <Button_clicked/>
  </>
)

function handle_click(){
  console.log('Hello World!');
}