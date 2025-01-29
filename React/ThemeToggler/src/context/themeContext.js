import { createContext, useContext } from "react";


//  Creating the context and passing the default values 
export const ThemeContext = createContext({
    themeMode : 'light',
    lightTheme : () => {},
    darkTheme : () => {}
})


// making the context provider
export const ThemeProvider = ThemeContext.Provider;

// Making hooks to get the value from the context 

export const useTheme = ()=> useContext(ThemeContext);