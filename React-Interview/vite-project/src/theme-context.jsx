import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();


export const useTheme=()=>{ // This is custom Hook
    return useContext(ThemeContext)
}

export const ThemeProvider=({children})=>{
    const [isDarkMode,setIsDarkMode]=useState(false)
    
    const toggleTheme=()=>{
        setIsDarkMode((prevState)=>!prevState);

          }

          const theme=isDarkMode?"dark":"light"

          return <ThemeContext.Provider value={theme,toggleTheme}>{children}</ThemeContext.Provider>
}