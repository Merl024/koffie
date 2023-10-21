import '../../App.css';
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategoria } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

export const ItemListContainer = (prop) => {
  const [products, setProducts] = useState([])

  const { productCat } = useParams()

  useEffect(()=>{
    const asyncFunc = productCat ? getProductsByCategoria : getProducts

    asyncFunc(productCat)
      .then(res =>{
        setProducts(res)
      })
      .catch(err =>{
        console.error(err)
      })
  }, [productCat])

  return (
    <>
    <Container>
      <h2 className='App'>{prop.greeting}</h2>
      <ItemList products={products}/>
    </Container>
    </>
  )
}
