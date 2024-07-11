
import { Box,Button } from "@chakra-ui/react"
import { useState } from "react"


const ItemCount = ({stock, valorInicial, onAdd }) => { 
   
  const [count, setCount ] = useState (valorInicial)
    
    const  incrementar =() => {
        count < stock && setCount( count + 1)
    }
    const restar =() => {
        count > valorInicial && setCount( count - 1)
    }

  return (
    <Box>
      <Button onClick={incrementar}>+</Button>
      {count}
      <Button onClick={restar}>-</Button>
      <Button onClick={()=> onAdd(count)}> Agregar al carrito</Button>   
    </Box>
  )
}

export default ItemCount
