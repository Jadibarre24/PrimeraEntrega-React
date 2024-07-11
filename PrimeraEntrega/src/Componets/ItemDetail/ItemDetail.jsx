import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Box } from '@chakra-ui/react'
import { ToastContainer, Toast } from 'react-toastify';


const ItemDetail = ({nombre,stock}) => {
  
    const onAdd = (quality) => {
      Toast(`agregaste${quality} unidades`)
    }
    console.log(ItemDetail)
  
    return (
    <Box>
        nombre:{nombre }
        <ItemCount stock={stock} valorInicial={1}/>
        <ToastContainer/>
    </Box>
  )
}

export default ItemDetail
