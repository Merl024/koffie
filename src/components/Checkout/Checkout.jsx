// import React from 'react'
// import CheckoutForm from '../CheckoutFrom/CheckoutForm'
// import { useState } from 'react'
// import { useContext } from 'react'
// import { CartContext } from '../../context/CartContext'

// const Checkout = () => {
//     const [loading, setLoading] = useState(false)
//     const [orderId, setOrderId] = useState('')

//     const { cart, total, clearCart} = useContext(CartContext)

//     const crearOrden = async ({nombre, cel, email}) => {
//         setLoading(true)

//         try{
//             const objOrden = {
//                 cliente: {
//                     nombre, cel, email
//                 },
//                 items: cart,
//                 total: total,
//                 date: Timestamp.fromDate(new Date())
//             }

            
//         }
//     }

// }