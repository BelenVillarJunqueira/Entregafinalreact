export const products = [
{
    id: 1,
    nombre: "Azalea Doble",
    descripcion: "Azalea doble, floración 1 vez al año. 12lts.",
    precio: 12000,
    imagen: "https://jardinurbano.com.uy/wp-content/uploads/2022/04/azalea_P1030534.jpg",
    category: "Plantas"
},
{
    id: 2,
    nombre: "Calistemo",
    descripcion: "Calistemo de 5lts, florece en verano.",
    precio: 18500,
    imagen: "https://mondiniplantas.cdn.magazord.com.br/img/2025/05/produto/6622/calistemo.jpg?ims=425x425",
    category: "Arboles"
},
{
    id: 3,
    nombre: "Arce",
    descripcion: "Arce 4 estaciones, cambia de color. 5lts.",
    precio: 18000,
    imagen: "https://media.istockphoto.com/id/180454493/es/foto/arce-japon%C3%A9s-en-arboreto-de-westonbirt.jpg?s=612x612&w=0&k=20&c=N0bTjddjvPxFcO1Cem28-BABaCjzT3xTf7RzcNiV5_M=",
    category: "Arboles"
},
{
    id: 4,
    nombre: "Jazmín Kimura",
    descripcion: "Jazmín kimura floración 1 vez al año, aroma fuerte y agradable.",
    precio: 9000,
    imagen: "https://dcdn-us.mitiendanube.com/stores/001/490/163/products/jazmin-enano-o-jazmin-kimura-3-300x3001-98ef6b97e3014708d816372426489535-240-0.jpg",
    category: "Plantas"
},
{
    id: 5,
    nombre: "Macetas plásticas",
    descripcion: "Macetas plásticas, varios colores a elección.",
    precio: 2500,
    imagen: "https://plantasfaitful.com.ar/wp-content/uploads/2020/06/Plantas-Faitful-Macetas-Plasticas-TA-Premium-Cuadrada.jpg",
    category: "Macetas"
},
{
    id: 6,
    nombre: "Trio de macetas",
    descripcion: "Trío de macetas de porcelana.",
    precio: 15500,
    imagen: "https://chapuvivero.com/wp-content/uploads/2024/08/image033.jpeg.webp",
    category: "Macetas"
},
{
    id: 7,
    nombre: "Maceta de hilo",
    descripcion: "Hilo de coco, 3 tamaños a elección.",
    precio: 4500,
    imagen: "https://m.media-amazon.com/images/I/81zCWdRlWnL.jpg",
    category: "Macetas"
},
{
    id: 8,
    nombre: "Maceta cuadrada",
    descripcion: "Maceta cuadrada de 40cm de alto.",
    precio: 8500,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_908658-MLA80327998093_102024-O.webp",
    category: "Macetas"
},
{
    id: 9,
    nombre: "Grama bahiana",
    descripcion: "Pan de césped trama bahiana, más grueso, utilizado en clima frío.",
    precio: 45000,
    imagen: "https://turfmax.com.ar/wp-content/uploads/Grama-Bahiana-View-scaled.jpg",
    category: "Cesped"
},
{
    id: 10,
    nombre: "Grama Bermuda",
    descripcion: "Grama fina, es un césped muy utilizado en climas cálidos.",
    precio: 32500,
    imagen: "https://semillasrural.com.ar/wp-content/uploads/2015/11/cesped_bermuda_04_ok.jpg",
    category: "Cesped"
},
{
    id: 11,
    nombre: "Ray-grass Inglés",
    descripcion: "Resistente a las pisadas y de crecimiento rápido, no apto para los espacios de sombra.",
    precio: 38000,
    imagen: "https://elganadero.pe/wp-content/uploads/2021/12/Rye-grass-Perenne-pasto-forrajero-para-ganado-y-vacas.jpg",
    category: "Cesped"
},
{
    id: 12,
    nombre: "Gramón",
    descripcion: "Césped que se adapta a climas cálidos.",
    precio: 28000,
    imagen: "https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/91721645-6de2-4097-9fbe-178b5f7daa00?rule=hw396",
    category: "Cesped"
},
{
    id: 13,
    nombre: "Zoica Japónica",
    descripcion: "Es un césped que se adapta a climas cálidos.",
    precio: 32000,
    imagen: "https://planterista.com/wp-content/uploads/2013/08/Grama-esmeralda-paisagismo-1024x576.jpg",
    category: "Cesped"
},
{
    id: 14,
    nombre: "Set de jardinería",
    descripcion: "Set x 3 en jardinería, rastrillo y 2 palas de diferente medida.",
    precio: 12500,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_721847-MLA76590565148_062024-O.webp",
    category: "Herramientas"
},
{
    id: 15,
    nombre: "Tierra abonada",
    descripcion: "Tierra Fértil Roots Landiner x40Lts.",
    precio: 18000,
    imagen: "https://viveroagronomia.com.ar/wp-content/uploads/2024/07/1-2.png",
    category: "Tierra"
},
{
    id: 16,
    nombre: "Fumigador con bomba",
    descripcion: "Fumigador con bomba, pico con gatillo, 10 Lts.",
    precio: 15000,
    imagen: "https://images.fravega.com/f300/31cd937a1e2829ef90b929a183e4591a.jpg.webp",
    category: "Herramientas"
}
];

export const getProducts = () => {
return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000);
});
};

export const getProductById = (id) => {
return new Promise((resolve) => {
    setTimeout(() => resolve(products.find(p => p.id === parseInt(id))), 1000);
});
};

export const getProductsByCategory = (categoryId) => {
return new Promise((resolve) => {
    setTimeout(() => resolve(products.filter(p => p.category === categoryId)), 1000);
});
};
