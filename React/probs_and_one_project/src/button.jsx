export default function Button({color , bgcolor , setbgColor}){
    return (
        <button className="rounded-xl py-2 px-5 font-bold " style={{backgroundColor  : color}} onClick={()=> setbgColor(color)}>{color}</button>
    )
}