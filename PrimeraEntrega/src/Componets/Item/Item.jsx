import React from 'react'
import { Box,Button,Center,Flex,Link } from '@chakra-ui/react'


const Item = ({nombre,precio,img,id}) => {
  return (
    <Flex w={130}direction={'column'} alignContent={'Center'}alignItems={'center'} border={'1px'} borderRadius={'6px'}padding={4} margin={2} marginTop={10} bg={'#ffd700'}>
      <img src= {img} className='imgCard'/>
      <h2>{nombre}</h2>
      <h2>{precio}</h2>
      <Button>
        <Link to= {`/producto/${id}`} className='cardButton'> Detalles </Link>
      </Button>
    </Flex>
  )
}

export default Item
