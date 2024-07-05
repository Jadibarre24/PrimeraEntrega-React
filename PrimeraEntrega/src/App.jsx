
import './App.css'
import * as React from 'react'
import { Box,Button, } from "@chakra-ui/react"
import Navbar from './Componets/Navbar/Navbar'
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer'
import ItemCount from './Componets/ItemCount/ItemCount'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider >
      <BrowserRouter>
          <Navbar tittle='Dulce Compañia'/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/clase/:categoryId' element={<ItemListContainer/>}/>
      </Routes>
      </BrowserRouter>
    </ChakraProvider>
      
  )
}




export default App
