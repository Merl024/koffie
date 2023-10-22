import React from "react";
import miImagen from '../Assets/carritoCompras.png'
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {  

    const { totalQuantity } = useContext(CartContext)

    return(
        <>
            <Link to='/cart'>
                <img src={miImagen} alt="Carrito de compras" width={55} height={55}/>
                <span className="CartWidget">{totalQuantity()}</span>
            </Link>
        </>
    )
}

export default CartWidget;