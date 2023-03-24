import React, { createContext, useState } from 'react'

export const GlobalCartContext = createContext(null);

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = prod => {
        let found = cart.find((item) => item.uid === prod.uid);
        
        if(found){
            found.quantity++;
            setCart((prevProds) => [...prevProds]);
        }else{
            setCart((prevProds) => [...prevProds, {...prod, quantity: 1 }])
        }
    }

    const removeCart = name => {
        setCart(cart.filter((item) => item.name !== name));
      };
    

    return (
        <GlobalCartContext.Provider value={{ cart, addToCart, removeCart }}>
            {children}
        </GlobalCartContext.Provider>
    )
}

export default CartContext