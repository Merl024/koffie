import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
   
    const addItem = (item, quantity) => {
        if(!IsInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else{
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (productId) => {
        const cartUpdated = cart.filter(prod => prod.id !== productId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const IsInCart = (productId) => {
        return cart.some(prod => prod.id === productId)
    }

    const totalQuantity = ()=>{
        return cart.reduce((total, item)=> total += item.quantity, 0)
    }

    const total = ()=>{
        return cart.reduce((total, item)=> total += item.quantity * item.precio, 0)
    }



    return (
        <CartContext.Provider value = {{ cart, addItem, removeItem, clearCart, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )

}