import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({id, nombre, imagen, categoria}) => {
  return (
    <>
        <div>
        <Card className='card col-12'>
        <Card.Body>
            <Card.Title className='tituloCard'>{id}. {nombre}</Card.Title>
            <picture ><img src={imagen} alt={nombre}  className='ItemImg'/> </picture>    
            <Card.Text><p className='Info'> Categoria: {categoria}</p> </Card.Text>
            <Link to={`/product/${id}`}> Ver detalles</Link>
        </Card.Body>
        </Card>
        </div>
    </>  
)
}
export default Item;