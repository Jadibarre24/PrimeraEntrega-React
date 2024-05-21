import React from 'react'
import { GiChocolateBar } from "react-icons/gi";
import {
  Box,
   Flex,
   Text,
  Heading
} from "@chakra-ui/react"
const ItemListContainer = ({tittle}) => {
  return (
    <Flex justify={'center'} direction={'row'} fontSize={'x-large'} fontStyle={'normal'} bgColor={'gray'}h={57}>
      <Box margin={3} >
        <GiChocolateBar />
      </Box>

      <Heading>
        {tittle}
      </Heading>
    </Flex>
  )
}

export default ItemListContainer
