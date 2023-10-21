import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className="Option">Menú</Link>
            </div>
        )
    }

    return(
        <>
            {/* {cart.map(p=> <CartItem key={p.id} {...p}/>)} */}
            <h1>Total: ${total}</h1>
            <button onClick={()=> clearCart()} className="button">Limpiar carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </>
    )
}

export default Cart;