import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbSeparator,} from '@chakra-ui/react'
  import {Flex,Heading,Box,} from "@chakra-ui/react"
  import { GiChocolateBar } from "react-icons/gi";
  import ItemList from '../ItemList/ItemList';

import ItemCount from '../ItemCount/ItemCount'

const Navbar = ({tittle}) => {
  return (
    <Flex 
    justifyContent={'space-between'} bgColor={'#ffd700'} w={'100'}>
        <Breadcrumb separator='|' margin={1}>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='./pages/Us54'>Nosotros</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Contacto</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
         <Box margin={3} >
          <GiChocolateBar />
         </Box>
      <Heading color={'#420208'}>
        {tittle}
      </Heading> 
        <CartWidget/>
        <ItemCount/>
    </Flex>
  )
}

export default Navbar
