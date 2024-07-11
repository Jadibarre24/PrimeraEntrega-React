import React, { useState } from 'react'
import { 
  Flex,
  Heading,
  Box,
 } from "@chakra-ui/react"
 import { Button, ButtonGroup } from '@chakra-ui/react'
import { color } from 'framer-motion'

const buttonDetalles = ({color,onClickCallback}) => {
   
  const [background,setBackground]=useState(color)

  
  const hadleClick =() =>{
    onClickCallback && onClickCallback ()
    setBackground ('gray')
  }
  return (
    <Box>
      <Button color={'pink'} 
      style={{background}}
      onClick = {handleClick}
      >
      </Button>
    </Box>
  )
}

export default buttonDetalles
