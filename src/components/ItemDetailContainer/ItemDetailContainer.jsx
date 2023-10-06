import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(()=>{
        let idParse = parseInt(productId)
        getProductById(idParse)
            .then(res => {
                setProduct(res)
            })
            .catch(err =>{
                console.error(err)
            })
    }, [productId])

  return (
    <>
        <ItemDetail className='estilo' {...product}></ItemDetail>
    </>
  )
}