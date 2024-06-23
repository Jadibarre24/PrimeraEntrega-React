import React, { useEffect, useState } from 'react'
import { GiChocolateBar } from "react-icons/gi";
import { Box,Flex,Text,Heading } from "@chakra-ui/react"
import { getProducts } from '../../data/asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({tittle}) => {
  const [products, setPrpducts ] = useState([])

  useEffect(() =>{
    getProducts()
    .then((res) => setPrpducts(res))
    .catch ((error)=> console.log(error))
  },[])
  

  return (
    <Flex justify={'center'} direction={'row'} fontSize={'x-large'} fontStyle={'normal'} bgColor={'pink'} textColor={'#420208'}>
      <Box margin={3} >
        <GiChocolateBar />
      </Box>

      <Heading>
        {tittle}
      </Heading>
    <Flex>
      <ItemList products = {products}/>
    </Flex>
    </Flex>

  )
}

export default ItemListContainer
