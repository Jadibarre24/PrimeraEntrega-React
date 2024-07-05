import { Image, Img } from "@chakra-ui/react";
import { TbCategoryFilled } from "react-icons/tb";

export const productos =[
    {
        id: 1,
        nombre: "Fresas con chocolate",
        precio: 2000,
        clase: 'Chocolates',
        stock: 250,
        descripcion:"Fresas recubiertas de chocolate decoradas para eventos especiales",
        img: "https://i.postimg.cc/bNSrC0MX/Fresas.jpg",  
    },
    {
        id: 2,
        nombre: "Caja de Fresas con chocolate",
        precio: 25000,
        clase: 'Chocolates',
        stock: 50,
        descripcion:"Fresas recubiertas de chocolate decoradas para eventos especiales",
        img: "https://i.postimg.cc/Z5rRZb4V/caja-de-fresas.jpg",
        
    },
    {
        id: 3,
        nombre: "Brochetas",
        precio: 3000,
        clase: 'Galletas',
        stock: 150,
        descripcion:"Fresas recubiertas de chocolate decoradas para eventos especiales",
        img: "https://i.postimg.cc/tJYJHF4x/broch.jpg",
    },
    {
        id: 4,
        nombre: "Fuentes",
        precio: 150000,
        clase: 'Decoracion',
        stock: 2,
        descripcion:"Fresas recubiertas de chocolate decoradas para eventos especiales",
        img: "https://i.postimg.cc/fbDbRGbZ/Fuente-Chocolate-Madrid-Goblin.jpg",
    },
    {
        id: 5,
        nombre: "Repisas",
        precio: 150000,
        clase: 'Utensilios',
        stock: 10,
        descripcion:"repisas para mesas de dulces",
        img: "https://i.postimg.cc/zXy7xM8J/repisa.jpg",
    },
    {
        id: 6,
        nombre: "Desayuno sorpresa",
        precio: 150000,
        clase: 'Detalles',
        stock: 10,
        descripcion:"repisas para mesas de dulces",
        img: "https://i.postimg.cc/PJ9xfNCF/desayuno.jpg",
    },
    {
        id: 7,
        nombre: "Desayuno sorpresa",
        precio: 150000,
        clase: 'Detalles',
        stock: 10,
        descripcion:"repisas para mesas de dulces",
        img: "https://i.postimg.cc/Rh6SY9g1/vino.jpg",
    },
    {
        id: 8,
        nombre: "Desayuno sorpresa",
        precio: 80000,
        clase: 'Detalles',
        stock: 10,
        descripcion:"repisas para mesas de dulces",
        img: "https://i.postimg.cc/FFB1VCTg/des.jpg",
    },
    {
        id: 9,
        nombre: "Desayuno sorpresa",
        precio: 80000,
        clase: 'Detalles',
        stock: 10,
        descripcion:"repisas para mesas de dulces",
        img: "https://i.postimg.cc/FFB1VCTg/des.jpg",
    },
    {
        id: 10,
        nombre: "Gotas decorativas comestibles",
        precio: 3000,
        clase: 'Masmelos',
        stock: 10,
        descripcion:"Masmelos decorados para toda ocacion",
        img: "https://i.postimg.cc/tTgChFPM/Gotas.jpg",
    },
    {
        id: 11,
        nombre: "Masmelos recubiertos",
        precio: 2500,
        clase: 'Masmelos',
        stock: 10,
        descripcion:"Masmelos decorados para toda ocacion",
        img: "https://i.postimg.cc/2yskRJts/Masmelos.jpg",
    },
    {
        id: 12,
        nombre: "Tutu de masmelo",
        precio: 2500,
        clase: 'Masmelos',
        stock: 10,
        descripcion:"Masmelos decorados para toda ocacion",
        img: "https://i.postimg.cc/WpCbkF45/Tutus.jpg",
    },
]


export const getProducts = () =>{
    return new Promise ((res) => {
        setTimeout(() => {
            res(productos);
        },2000);
    });
};
export const getProductsByCategory = (category) => {
    console.log(category)
    if (!category) {
        return productos
    }
    const productosFiltrados = productos.filter(
        (prod) => prod.clase === category
    );
    return productosFiltrados
       
};

/* 
https://i.postimg.cc/dVM1zkPh/Chocolates-personalizados.jpg




https://i.postimg.cc/nL2hj3sm/Logo.jpg
https://i.postimg.cc/cH51T6B4/Masapan.jpg


 */
