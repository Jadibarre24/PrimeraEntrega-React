import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
  import { 
    Flex,
    Heading,
    Box,
   } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Flex 
    justifyContent={'space-between'} marginLeft={'10'}bgColor={'white'} w={'100'}>
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
        <CartWidget/>
    </Flex>
  )
}

export default Navbar
