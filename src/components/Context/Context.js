import React, { createContext } from 'react'
import { useState } from 'react';




export const MyContext=createContext();



const Context = ({children}) => {
    const [cart, setcart] = useState([]);

  return (
    <MyContext.Provider value={{cart,setcart}}>
        {children}
    </MyContext.Provider>
  )
}

export default Context
