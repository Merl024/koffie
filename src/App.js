import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='¡Bienvenidos a Koffie!' />
      <ItemCount initial={1} stock={25} onAdd={(quantity)=>console.log('cantidad agregada', quantity)} />
    </>
  );
}
export default App;
