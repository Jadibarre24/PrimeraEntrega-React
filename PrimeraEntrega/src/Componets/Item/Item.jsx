import React from 'react'
import { Box,Center,Flex } from '@chakra-ui/react'


const Item = ({nombre,precio,img,}) => {
  return (
    <Flex w={300}direction={'column'} alignContent={'Center'}alignItems={'center'} border={'1px'} borderRadius={'6px'}padding={4} margin={2} bg={'#ffd700'}>
      <img src= {img} width={200} height={200} />
      <h2>{nombre}</h2>
      <h2>{precio}</h2>
    </Flex>
  )
}

export default Item
