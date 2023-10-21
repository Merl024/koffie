import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';



const CartItem = ({id, nombre, imagen, precio, tamanio, categoria}) => {
  return (
    <>
    <Card className='card col-6'>
        <Card.Body>
            <Card.Title className='tituloCard'>{id}. {nombre}</Card.Title>
            <picture ><img src={imagen} alt={nombre}  className='ItemImg'/> </picture>    
            <Card.Text>
                <p className='Info'> Categoria: {categoria}</p>
                <p className='Info'> Precio: {precio}</p>
                <p className='Info'> Tamaño: {tamanio}</p>
            </Card.Text>
        </Card.Body>
    </Card>

    </>
)
}
export default CartItem;