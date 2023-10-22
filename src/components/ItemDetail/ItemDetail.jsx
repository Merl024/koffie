import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


export const ItemDetail = ({id, nombre, imagen, categoria, precio, tamanio}) => {
  
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio, imagen, categoria, tamanio
        }
    
        addItem(item, quantity)
    }


    return (
    <>
    <Card className='card col-6 p-center'>
        <Card.Body>
        <Card.Title className='tituloCard'>{id}. {nombre}</Card.Title>
        <picture> <img src={imagen} alt={nombre} className='ItemImg' /> </picture>    
        <Card.Text>
            <p className='Info'> Categoria: {categoria}</p>
            <p className='Info'> Precio: {precio}</p>
            <p className='Info'> Tamaño: {tamanio}</p>
        </Card.Text>
        <footer className='ItemFooter'>
            {
                quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'> Agregar al carrito</Link>
                ) : (
                    <ItemCount initial={1} stock={35} onAdd={handleOnAdd}/>
                )
            }

        </footer>
        </Card.Body>
    </Card>
    </>  
  )
}
