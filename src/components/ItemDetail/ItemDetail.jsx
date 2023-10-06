import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail = ({id, nombre, imagen, categoria, precio, tamanio}) => {
  return (
    <>
    <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>{id}. {nombre}</h2>
        </header>
        <picture>
            <img src={imagen} alt={nombre} className='ItemImg' />
        </picture>    
        <section>
            <p className='Info'> Categoria: {categoria}</p>
            <p className='Info'> Precio: {precio}</p>
            <p className='Info'> Tamaño: {tamanio}</p>
        </section>
        <footer className='ItemFooter'>
            <ItemCount initial={1} stock={25} onAdd={(quantity)=>console.log('cantidad agregada', quantity)}/>
        </footer>
    </article>
    </>  
  )
}
