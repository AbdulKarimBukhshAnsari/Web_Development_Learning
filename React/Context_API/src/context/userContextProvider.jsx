import React, { useState } from "react";
import userContext from "./userContext";

// this is basically the second step in which we usually return the data the Wrap data between userContext.provider is basically the component 

const UserContextProvider = ({children}) =>{
    const [user , setUser] = useState('Login ')
    return(
        <userContext.Provider value = {{user , setUser}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider