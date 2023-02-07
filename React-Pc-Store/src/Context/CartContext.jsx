import { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const agregarAlCarrito = (product) => {
        setCartList([...cartList, product])
    }

    const vaciarCarrito = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value = {{cartList , agregarAlCarrito, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}