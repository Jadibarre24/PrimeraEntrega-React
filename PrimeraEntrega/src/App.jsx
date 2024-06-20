
import './App.css'
import * as React from 'react'
import { Box } from "@chakra-ui/react"
import Navbar from './Componets/Navbar/Navbar'
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider >
      <Box bg={'black'}>
        <Navbar/>
        <ItemListContainer tittle='Dulce Compañia'/>
      </Box>
    </ChakraProvider>
  )
}




export default App
