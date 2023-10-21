import React from "react";
import miImagen from '../Assets/carritoCompras.png'
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {  

    const { totalQuantity } = useContext(CartContext)

    return(
        <>
            <Link to='/cart' className="CartWidget" >
                <img src={miImagen} alt="Carrito de compras" width={55} height={55}/>
                <p className="cart">{totalQuantity}</p>
            </Link>
        </>
    )
}

export default CartWidget;

// #NOTA: Debes crear la funcion 'totalQuantity' en el CartContext, cuando esta esté creada puedes descomentar la linea anterior y  volver a poner el style,
// #al ya tener la funcion correspondiente en el context deberia funcionar bien.