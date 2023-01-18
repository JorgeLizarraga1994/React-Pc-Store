let productos = [
    {
        id: 1,
        categoria: 'componentes de pc',
        titulo:'placa de video Geforce RTX 4090 24GB' , 
        precio: '$970.370' , 
        imagen: '../../src/images/id1.jpg'
    },
    {
        id: 3,
        categoria: 'componentes de pc',
        titulo: 'Monitor Led 28" Gaming UHD',
        precio: '$307.416',
        imagen: '../../src/images/id2.jpg'
    },
    {
        id: 5,
        categoria: 'componentes de pc',

        titulo: 'Micro Intel I9-13900k',
        precio: '$274.707',
        imagen: '../../src/images/id3.jpg'
    },
    {
        id: 2,
        categoria: 'destacados',
        titulo: 'Monitor Led 28" Gaming UHD',
        precio: '$307.416',
        imagen: '../../src/images/id2.jpg'
    },
    {
        id: 6,
        categoria: 'notebooks',
        titulo: 'Notebook HP 445 14" AMD Ryzen 5 8GB ram',
        precio: '$271.737',
        imagen: '../../src/images/id4.jpg'
    },
    {
        id: 7,
        categoria: 'pcs',
        titulo: 'PC Oficina Armada Completa Intel Pentium G6400 8GB SSD 240GB',
        precio: '$86.064',
        imagen: '../../src/images/id7.jpg'
    },
    {
        id: 8,
        categoria: 'pcs',
        titulo: 'PC De Escritorio Armada Completa AMD KIT Ryzen 7 4700S 16GB 240GB SSD RX 550',
        precio: '$108.980',
        imagen: '../../src/images/id8.jpg'
    },
    {
        id: 9,
        categoria: 'pcs',
        titulo: 'PC Gamer Armada Completa AMD Ryzen 7 4700S 16GB SSD 480GB RX550',
        precio: '$127.263',
        imagen: '../../src/images/id9.jpg'
    },
    {
        id: 10,
        categoria: 'pcs',
        titulo: 'PC Armada Completa Intel I3 10105F 16GB SSD 480GB GT 1030 + Mouse de Regalo',
        precio: '$248.900',
        imagen: '../../src/images/id10.jpg'
    },
    {
        id: 11,
        categoria: 'pcs',
        titulo: 'PC Gamer Armada Completa Intel I7 13700KF 32GB 1TB NVME 2TB HDD RX 6950XT + Mouse de Regalo',
        precio: '$860.423',
        imagen: '../../src/images/id11.jpg'
    }
    
]

export const gFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        },1000)
        
    })
}