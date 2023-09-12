import React from "react";
import miImagen from '../Assets/carritoCompras.png'

const CartWidget = () => {
    return(
        <>
            <img src={miImagen} alt="Carrito de compras" width={55} height={55}/>
        </>
    )
}

export default CartWidget;