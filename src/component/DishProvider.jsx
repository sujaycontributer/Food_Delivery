import React, { createContext, useState } from 'react'

export const DishContext = createContext();

function DishProvider({children}) {
    const [cart, setCart] = useState(0);
    const [dishes, setDishes] = useState([]);

  return (
    <DishContext.Provider value={{cart, setCart, dishes, setDishes}}>
      {children}
    </DishContext.Provider>
  )
}

export default DishProvider;
