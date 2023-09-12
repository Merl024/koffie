import React, { useState } from 'react'
import Item from '../Item/item'
import '../../App.css';

export const ItemListContainer = (prop) => {
    const [user, setUser] = useState({ })
    const users = [
        {
            id: 1,
            nombre: 'Sebastian',
            ocupacion: 'Ciberseguridad',
            edad: '35 años'
        }, 
        {
            id: 2,
            nombre: 'Marta'
        }
    ]

  return (
    <>
    <h2 className='App'>{prop.greeting}</h2>
    <p className='text'>¿Ya tienes cuenta registrada?</p>
    <button className='mt' onClick={() => {setUser(users.find(user => user.id === 1))}}>Log in</button>
    <section><Item user={user}/></section>
    </>
  )
}
