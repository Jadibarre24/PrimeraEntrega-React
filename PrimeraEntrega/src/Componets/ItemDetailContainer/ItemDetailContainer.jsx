import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getproductsById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Flex } from '@chakra-ui/react'

const ItemDetailContainer = () => {
    const [producto, setProducto]=useState ({})
    const [loaging, setLoading] = useState (true)
    const {productoId} = useParams()

    const navigate = useNavigate()
    
    useEffect(()=>{
        getproductsById(productoId)
        .then((data) => {
          if(!data){
            navigate('/*')
          }else{
            setProducto(data)
          }

        })
        .catch ((error) => console.log(error))
        .finally (()=> setLoading(false))
    },{})

    return (
    <Flex>
      {
        loaging ?
        <MoonLoader />:
        <ItemDetail {...producto}/>    
    }
    </Flex>
  )
}

export default ItemDetailContainer
