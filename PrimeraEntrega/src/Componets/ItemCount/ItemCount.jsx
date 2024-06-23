import React, { useState } from 'react'
import { Box,Flex,Text,Heading, Button } from "@chakra-ui/react"

const ItemCount = () => { 
    const [ count, setCount ] = useState (1)
    const stock = 5 
    const  incrementar =() => {
        count < stock && setCount( count + 1)
    }
    const restar =() => {
        count > 1 && setCount( count - 1)
    }
    
  return (
    <Box>
      <Button onClick={incrementar}>+</Button>
      {count}
      <Button onClick={restar}>-</Button>
    </Box>
  )
}

export default ItemCount
