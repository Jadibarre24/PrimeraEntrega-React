import React from 'react'
import { BsCart4 } from "react-icons/bs";
import { Box, Button, Flex,Text } from "@chakra-ui/react"
import { AiOutlineAccountBook } from 'react-icons/ai';
import ItemCount from '../ItemCount/ItemCount';


const CartWidget = () => {
  return (
    <Box marginTop={3}>
       <BsCart4 color='#420208'  /> 
    </Box>
  )
}

export default CartWidget
