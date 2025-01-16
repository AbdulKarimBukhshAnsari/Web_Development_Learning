import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'



function BodyOfCounter(){
  let [counter , setCounter ] = useState(0);

  const increasecount = () => {
    setCounter(counter + 1) ;// this will increase the counter , use State helps us to Increase the Consistency in theUI
  }
  const decreasecount = () => {
    if(counter > 0){
      setCounter(counter-1);
    }
  }
  const resetcount = () => setCounter(0)

  // we don't have to take the reference of each individual just I am updating the variable by using the use State it will handle the UI


  // here we will find the three place in which counter is used we need useState in so we can manage the things 
  return(
    <>
    <h1>Counter UseState</h1>
    <div className="counterIncremenet" onClick={increasecount}>
      Increase Count : {counter}
    </div>
    <div className="counterDecrement" onClick={decreasecount}>
      Decrease Count : {counter}
    </div>
    <div className="resetCount" onClick={resetcount}>
      Reset Count : {counter}
    </div>
    </>
    
  )
}





createRoot(document.getElementById('root')).render(
  <BodyOfCounter/>
)
