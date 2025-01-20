import { useState , useEffect } from "react";

// we are making custom hooks for crrency conversion , Always use JS extension for it 

export default function useCurrencyInfo(currency){
    const [data , setData] = useState(null)
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response)=> setData(response[currency])) // to access that currency data
    } , [currency])
    return data;
}