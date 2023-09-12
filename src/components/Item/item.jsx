import React from 'react'
const Item = ({user}) => {
  return (
    <>
    <div className='user'>
        <h4>{user.id}</h4>
        <h1>{user.nombre}</h1>
        <div>
            - {user.ocupacion}
            <br/>
            - {user.edad}
        </div>
    </div>
    </>  
)
}
export default Item;