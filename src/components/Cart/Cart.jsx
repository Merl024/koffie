import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className="Option">Menú</Link>
            </div>
        )
    } else{
        return(
        <div>
            {cart.map(p=> <CartItem key={p.id} {...p} className="col-6"></CartItem>
            )}
            <h1>Total: ${total()}</h1>
            <button onClick={()=> clearCart()} className="Option">Limpiar carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )

    }

}

export default Cart;