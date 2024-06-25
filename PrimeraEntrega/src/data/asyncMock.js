import { Image, Img } from "@chakra-ui/react";

export const productos =[
    {
        id: 1,
        nombre: "Fresas con chocolate",
        precio: 2000,
        clase: 'Chocolates',
        stock: 250,
        descripcion:"Fresas recubiertas de chocolate decoradas para eventos especiales",
        img: "https://i.postimg.cc/cJrjtCgH/Fresas.jpg",
    },
    {
        id: 2,
        nombre: "Caja de Fresas con chocolate",
        precio: 25000,
        clase: 'Chocolates',
        stock: 50,
        descripcion:"Fresas recubiertas de chocolate decoradas para eventos especiales",
        img: "https://i.postimg.cc/fyx1WP3f/caja-de-fresas.jpg",
    },
    {
        id: 3,
        nombre: "Brochetas",
        precio: 3000,
        clase: 'galletas',
        stock: 150,
        descripcion:"Fresas recubiertas de chocolate decoradas para eventos especiales",
        img: "https://i.postimg.cc/3JzDQbXc/IMG-2004.jpg",
    },
    {
        id: 4,
        nombre: "Fuentes",
        precio: 150000,
        clase: 'decoracion',
        stock: 2,
        descripcion:"Fresas recubiertas de chocolate decoradas para eventos especiales",
        img: "https://i.postimg.cc/zXr92qMt/Fuente-Chocolate-Madrid-Goblin.jpg",
    },
    {
        id: 5,
        nombre: "repisas",
        precio: 150000,
        clase: 'decoracion',
        stock: 10,
        descripcion:"repisas para mesas de dulces",
    },
]







export const getProducts = () =>{
    return new Promise ((res) => {
        setTimeout(() => {
            res(productos);
        },2000);
    });
};