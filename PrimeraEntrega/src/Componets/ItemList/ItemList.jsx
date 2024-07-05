import React from 'react'
import Item from '../Item/Item'
import { Box ,Flex} from '@chakra-ui/react'
import { wrap } from 'framer-motion'
import '../../sass/ItemList.scss'



const ItemList = ({products}) => {



  return (
    <Flex className='cardItem'>
        {
            products.map((prod)=>(
                <Box key={prod.id}>
                    <Item {...prod}/>
                </Box>
            ))
        } 
    </Flex>
  )
}

export default ItemList
