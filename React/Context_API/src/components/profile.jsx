import { useContext } from "react";
import UserContext from "../context/userContext";


export default function Profile(){
    const {user} = useContext(UserContext);
    if(!user) return (
        <div>Please Log in</div>
    )
    return(
        <div>{user[0]}</div>
    )
}