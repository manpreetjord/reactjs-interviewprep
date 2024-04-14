import React, { createContext } from 'react'

const UseContextHook = () => {

    //How to create a context

    const ThemeContext=createContext("light");

  return (
    <ThemeContext.Provider value="light">
    <div>UseContextHook
        <h4>What is useContext in React?</h4>
        <p>It is used to consume values (like data and Functions )from a context created by createContext()</p>
        It allows functional components to access context values without prop drilling
        <br />In scenarios where passing props through multiple levels of components impractical</div>
        </ThemeContext.Provider>
  )
}

export default UseContextHook