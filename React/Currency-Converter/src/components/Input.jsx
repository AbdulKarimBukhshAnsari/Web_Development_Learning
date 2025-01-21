import React, {useId} from 'react'

function InputBox({
    label,
    amount , // the selected amount 
    setAmount , // select amount 
    setCurreny ,
    currency = 'usd', 
    currencyOptions  = [],  
    amountDisable = false , 
    currencyDiable = false, 
    className = "", 
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    min={0}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e) => setAmount && setAmount(Number(e.target.value))}  // the function will run if the function will be available
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currency}
                    onChange={(e)=>setCurreny && setCurreny(e.target.value)}
                    disabled = {currencyDiable}
                    
                > 
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;