import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
  import { Flex } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Flex 
    justifyContent={'space-between'} marginLeft={'10'}bgColor={'white'} w={'100'}>
        <Breadcrumb separator='-'>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <CartWidget/>
    </Flex>
  )
}

export default Navbar
