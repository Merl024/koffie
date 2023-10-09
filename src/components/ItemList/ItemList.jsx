import "./ItemList.css"
import React from 'react'
import Item from "../Item/Items"

const ItemList = ({products}) => {
  return (
    <div className='groups col-12'>
        {products.map(prod => <Item key={prod.id} {...prod}/>) }
    </div>
  )
}

export default ItemList;