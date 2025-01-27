import { useContext } from "react";
import userContext from "../context/userContext";


export default function Profile(){
    const {user} = useContext(userContext);
    if(!user) return (
        <div>Please Log in</div>
    )
    return(
        <div>{user}</div>
    )
}