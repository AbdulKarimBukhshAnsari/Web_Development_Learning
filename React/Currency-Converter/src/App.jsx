import { useState } from 'react'
import './index.css'
import { InputBox } from './components'  // index.js will be called by it self 
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount , setAmount] = useState(0);
  const [from , setFrom] = useState('usd');
  const [to , setTo] = useState('pkr');
  const [convertedAmount , setConvertedAmount] = useState(0);
  const currency_details = useCurrencyInfo(from);
  // for extracting all the currency 
  const options = Object.keys(currency_details); // it will extract the keys 

  const swap = () => {
    const tempFrom = from ; 
    const tempTo = to ; 
    const tempAmount = amount ; 
    const tempConvertedAmount = convertedAmount;
    setFrom(tempTo);
    setTo(tempFrom);
    setAmount(tempConvertedAmount);
    setConvertedAmount(tempAmount) 
  }

  const convert = ()=> setConvertedAmount(amount*currency_details[to]) ; 

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/digital-glowing-currency-sign-background-with-text-space_1017-52412.jpg')`,
            
            backgroundPosition: 'center', // Centers the image within the div
            backgroundRepeat: 'no-repeat', // Prevents repeating the image
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                        label = {"From"}
                        amount = {amount} // the selected amount 
                        setAmount = {setAmount} // select amount 
                        setCurreny = {setFrom}
                        currency = {from}
                        currencyOptions = {options}  
                        amountDisable = {false}
                        currencyDiable = {false}    
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                        label = {"To"}
                        amount = {convertedAmount} // the selected amount 
                        setAmount = {setConvertedAmount} // select amount 
                        setCurreny = {setTo}
                        currency = {to}
                        currencyOptions = {options}  
                        amountDisable = {true}
                        currencyDiable = {false}   
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);




}

export default App
