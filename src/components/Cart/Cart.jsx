import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart,totalQuantity, total } = useContext(CartContext)
    if(totalQuantity() === 0){
        return(
            <div className="noCart">
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className="Option">- Menú -</Link>
            </div>
        )
    } else{
        return(
        <>
            <div className=" col-12 cart">
                {cart.map(p=> <CartItem key={p.id} {...p} className="cole-6 cart"></CartItem>)}
            </div>
            <h1>Total: ${total()} dólares</h1>
            <button onClick={()=> clearCart()} className="Option">Limpiar carrito</button>
            <Link to='/checkout' className="Option">Finalizar compra</Link>
        </>
    )

    }

}

export default Cart;