import React, { useEffect, useState } from 'react'
import { GiChocolateBar } from "react-icons/gi";
import { Box,Flex,Text,Heading } from "@chakra-ui/react"
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import ItemList from '../ItemList/ItemList';
import {  useLocation, useParams } from 'react-router-dom';

const ItemListContainer = ({tittle}) => {
  const location =useLocation()
  const params =useParams()
  console.log(location)
  console.log(params)

  const [products, setPrpducts ] = useState([])
  const {categoryId}= useParams()
  

    useEffect(() =>{
    getProducts()
    setPrpducts(getProductsByCategory(categoryId))
  //   .then((res) => setPrpducts(res))
  //   .catch ((error)=> console.log(error))
  },[])
  

  return (
    <Flex justify={'center'} direction={'column'} align= {'center'}fontSize={'x'} fontStyle={'normal'} bgColor={'pink'} textColor={'#420208'}>
      <ItemList products = {products}/>
    </Flex>

  )
}

export default ItemListContainer
