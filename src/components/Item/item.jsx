import React from 'react'

const Item = ({id, nombre, imagen, categoria}) => {
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
            </section>
            <footer className='ItemFooter'>
                <link to={`/product/${id}`}> Ver detalles</link>
            </footer>
        </article>
    </>  
)
}
export default Item;