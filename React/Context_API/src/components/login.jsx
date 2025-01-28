// this is the third step in which we basically made 
import { useContext, useState } from "react";
import UserContext from "../context/userContext";

export default function Login(){

    // making the state for password and the user name 
    const [username , setUsername] = useState('');
    const [password , setPassword]  = useState('');
    // for getting excess for the gloibL STATE
    const {setUser} = useContext(UserContext);
    console.log(setUser);
    const handle_submit = (e)=>{
        e.preventDefault()
        setUser([username , password])
    }

    return (
        <div className="login-div">
            <div className="login-heading">Login</div>
            <label htmlFor="username">Name:</label>
            <input 
            type="text" 
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter User Name " 
            />
            <br/>
            <label htmlFor="password">Password:</label>
            <input
            type="password"  
            id="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handle_submit}>Submit</button>
        </div>
    )
}