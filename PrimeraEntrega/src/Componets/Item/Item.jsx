import React from 'react'
import { Box,Button,Center,Flex } from '@chakra-ui/react'


const Item = ({nombre,precio,img,}) => {
  return (
    <Flex w={130}direction={'column'} alignContent={'Center'}alignItems={'center'} border={'1px'} borderRadius={'6px'}padding={4} margin={2} marginTop={10} bg={'#ffd700'}>
      <img src= {img} className='imgCard'/>
      <h2>{nombre}</h2>
      <h2>{precio}</h2>
      <button className='cardButton'> Detalles </button>
    </Flex>
  )
}

export default Item
