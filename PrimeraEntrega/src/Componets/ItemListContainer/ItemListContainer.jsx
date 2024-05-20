import React from 'react'
import { Box, Flex,Text, } from "@chakra-ui/react"
const ItemListContainer = ({tittle}) => {
  return (
    <Flex justify={'center'}  fontSize={'x-large'} fontStyle={'normal'} bgColor={'gray'}h={50}>
      <headig>{tittle}</headig>
    </Flex>
  )
}

export default ItemListContainer
