import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='¡Bienvenidos a Koffie!' />
    </>
  );
}
export default App;
