import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const Item = ({id, nombre, imagen, categoria}) => {
  return (
    <>
        <Col>
        <Card className='card'>
        <Card.Body>
            <Card.Title className='tituloCard'>{id}. {nombre}</Card.Title>
            <picture className='ItemImg'><img src={imagen} alt={nombre}  /> </picture>    
            <Card.Text><p className='Info'> Categoria: {categoria}</p> </Card.Text>
            <Link to={`/product/${id}`}> Ver detalles</Link>
        </Card.Body>
        </Card>
        </Col>
    </>  
)
}
export default Item;