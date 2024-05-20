import React from 'react'
import { BsCart4 } from "react-icons/bs";
import { Box, Flex,Text, } from "@chakra-ui/react"


const CartWidget = () => {
  return (
    <Box marginRight={'10'} marginTop={'2'} >
        <BsCart4  /> 
    </Box>
  )
}

export default CartWidget
