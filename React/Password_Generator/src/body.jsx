import { useState , useCallback ,useEffect , useRef } from "react"



export default function Password_Generator(){
    const [length , setLength] = useState(8);
    const [number , setNumber] = useState(false);
    const [character , setCharacter] = useState(false);
    const [password  , setPassword] = useState('');

    let reference = useRef(null);

    let generate_password = useCallback(()=>{
        let pass = "";
        let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz";
        if(number) string+='0123456789';
        if(character) string+='@#$%^&*()_+[]{}|;:!`~';
        // logic for handling the password generation 
        for(let i = 0 ; i <length ; i ++){
            // chosing random things 
            let index_char = Math.floor(Math.random() * string.length ) ; 
            pass+=string[index_char];
        }
        setPassword(pass);
    },
    [length , number , character , setPassword]
);

    let copy_to_clipboard = () => {
        
        reference.current?.select(); // to select the text 
        
        window.navigator.clipboard.writeText(password);
        alert('Password has been copied!!')
    }
    useEffect(()=> generate_password() , [length , number , character , generate_password])

    return(<div className="password_body bg-gray-800 mx-auto w-[60%] my-10 px-12 rounded-lg py-10">
        <div className="input-copybtn flex">
        <input type="text"          
            className="bg-white w-full rounded-l-md text-2xl py-2 px-4"
            placeholder="Password Generator"
            readOnly
            value={password}
            ref={reference}
            
        />
        <button className="bg-blue-600 text-white font-bold px-3 text-xl rounded-r-md" onClick={copy_to_clipboard}>Copy</button>
        </div>
        <div className="all-inputs flex mt-5 text-xl">
        <input type="range" 
               className="length-of-password "
               id="length-of-pass"

               min={8}
               max={32}
               value={length}
               onChange={(e)=>setLength(e.target.value)}
        />
        <label htmlFor="length-of-pass" className="text-orange-500 inline-block ml-3 ">Length : {length}</label>
        <input 
        type="checkbox" 
        id="number-allowed"
        className="inline-block ml-7"
        defaultValue={number}
        onChange={()=> setNumber((prev) => !prev)}
        />
        <label htmlFor="number-allowed" className="text-orange-500 inline-block ml-2 ">Number</label>

        <input 
        type="checkbox" 
        id="char-allowed"
        className="inline-block ml-7"
        defaultValue={character}
        onChange={()=> setCharacter((prev) => !prev)}
        />
        <label htmlFor="char-allowed" className="text-orange-500 inline-block ml-2 ">Character</label>
        </div>
        
    </div>)
}