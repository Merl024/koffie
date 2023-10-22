import React, { useState, useContext } from 'react'
import { db } from '../../services/firebase'
import { collection, serverTimestamp, addDoc } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function Checkout() {
    const [ user, setUser ] = useState({})
    const [ validEmail, setValidEmail ] = useState('')
    const [ orderId, setOrderId ] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)
    const datosUser = (e) => {
        setUser({
            ...user, 
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e)=>{
        e.preventDefault()
            let order = {
                user,
                item: cart,
                total: total(),
                date: serverTimestamp()
            }
        const venta = collection(db, 'orders')
        addDoc(venta, order)
        .then((res)=> {
            setOrderId(res.id)
            clearCart()
        })
        .catch((err)=> console.log(err))
        }

  return (
    <>
    {orderId !== '' ?
    <div className='checkout'>
        <h1>¡Yaay! Tu orden fue registrada con éxito</h1>
        <h4>Tu número de pedido es:</h4>
        <h3>{orderId}</h3>
        <Link to='/' className="btnChekout Option"> - Regresar al menú - </Link>
    </div>
    : 
    <div className='m-3'>
        <h1 className='titulo'> Terminar compra</h1>
        <h5 className='desc'>Por favor, complete los siguientes espacios con sus datos</h5>
        <form onSubmit={finalizarCompra} className='formCheckout'>
            <div className='mb-2'>
                <label className='form-label labelText'>Nombre y apellido</label>
                <input className='form-control' onChange={datosUser} type='text' placeholder='Nombre y apellido' name='name'/>
            </div>
            <div className='mb-2'>
                <label className='form-label labelText'>Número de teléfono</label>
                <input className='form-control' onChange={datosUser} type='number' placeholder='+5037904873' name='cel'/>
            </div>
            <div className='mb-2'>
                <label className='form-label labelText'>Correo electrónico</label>
                <input className='form-control' onChange={datosUser} type='email' placeholder='ejemplo@gmail.com' name='mail'/>
            </div>
            <div className='mb-2'>
                <label className='form-label labelText'>Confirme su email</label>
                <input className='form-control' type='email' placeholder='ejemplo@gmail.com' name='mail' onChange={((e)=> setValidEmail(e.target.value))}/>
            </div>
            <button className='btn btn-dark' type='submit' disabled={validEmail !== user.mail}>Generar orden</button>
        </form>
    </div>      
    }
    </>
  )
}
