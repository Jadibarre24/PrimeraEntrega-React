import React, { useEffect, useState } from 'react'
import { GiChocolateBar } from "react-icons/gi";
import { Box,Flex,Text,Heading } from "@chakra-ui/react"
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import ItemList from '../ItemList/ItemList';
import {  useLocation, useParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';

const ItemListContainer = ({tittle}) => {
 /*  const location =useLocation()
  const params =useParams()
  console.log(location)
  console.log(params) */

  const [products, setProducts ] = useState([])

  const [loaging,setLoading] = useState(true)
  
  const {categoryId}= useParams()

  

  useEffect(() =>{
  /* getProducts()
  setProducts(getProductsByCategory(categoryId)) */
    setLoading(true)
  const dataProducts =categoryId ? getProductsByCategory(categoryId) : getProducts()
  
  dataProducts
    .then((data) => setProducts(data))
    .catch ((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[categoryId])
  

  return (
    <Flex justify={'center'} direction={'column'} align= {'center'}fontSize={'x'} fontStyle={'normal'} bgColor={'pink'} textColor={'#420208'}>
      {
        loaging ?
        <MoonLoader />:
        <ItemList products = {products}/>
      }
    </Flex>

  )
}

export default ItemListContainer
