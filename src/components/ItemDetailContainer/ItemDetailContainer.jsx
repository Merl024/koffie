import React from 'react'
import { useState, useEffect } from 'react'
// import { getProductById } from '../../asyncMock'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { productId } = useParams()

    
    useEffect(() => {
        const collectionProd = collection(db, 'menu')
        const refDoc = doc(collectionProd, productId)
        getDoc(refDoc)
        .then((res)=> setProduct({id:res.id, ...res.data()}))
        .catch((err)=> console.log(err))
    }, [productId])
    
    // useEffect(()=>{
    //     let idParse = parseInt(productId)
    //     getProductById(idParse)
    //         .then(res => {
    //             setProduct(res)
    //         })
    //         .catch(err =>{
    //             console.error(err)
    //         })
    // }, [productId])

    return (
    <>
        <ItemDetail className='estilo' {...product}/>
    </>
  )
}