export const productos =[
    {
        id: 1,
        nombre: "Fresas con chocolate",
        precio: 2000,
        clase: 'Chocolates',
        stock: 250,
        descripcion:"Fresas recubiertas de chocolate decoradas para eventos especiales",
    },
    {
        id: 2,
        nombre: "Fresas con chocolate",
        precio: 2000,
        clase: 'Chocolates',
        stock: 250,
        descripcion:"Fresas recubiertas de chocolate decoradas para eventos especiales",
    },
    {
        id: 3,
        nombre: "borchetas",
        precio: 3000,
        clase: 'galletas',
        stock: 150,
        descripcion:"Fresas recubiertas de chocolate decoradas para eventos especiales",
    },
    {
        id: 4,
        nombre: "fuentes",
        precio: 150000,
        clase: 'decoracion',
        stock: 2,
        descripcion:"Fresas recubiertas de chocolate decoradas para eventos especiales",
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