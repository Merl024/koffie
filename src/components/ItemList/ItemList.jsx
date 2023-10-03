import "./ItemList.css"
import React from 'react'
import Item from "../Item/Item";

const ItemList = ({products}) => {
  return (
    <div className='groups'>
        {products.map(prod => <Item key={prod.id} {...prod}/>) }
    </div>
  )
}

export default ItemList;