import React from "react";
import miImagen from '../Assets/carritoCompras.png'
import { useState } from 'react';


const CartWidget = () => {
    const [contador, setCont] = useState(0)
    function sumarCont(){
      setCont(contador+1)
    }

    return(
        <>
            <img src={miImagen} alt="Carrito de compras" width={55} height={55}/>
            <button onClick={sumarCont}>{contador}</button>
        </>
    )
}

export default CartWidget;