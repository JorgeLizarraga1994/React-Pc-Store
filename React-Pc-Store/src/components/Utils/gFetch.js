let productos = [
    {
        id: '1',
        categoria: 'componentes de pc',
        titulo:'placa de video Geforce RTX 4090 24GB' , 
        precio: '$970.370' , 
        imagen: '../../src/images/id1.jpg'
    },
    {
        id: '3',
        categoria: 'componentes de pc',
        titulo: 'Monitor Led 28" Gaming UHD',
        precio: '$307.416',
        imagen: '../../src/images/id2.jpg'
    },
    {
        id: '5',
        categoria: 'componentes de pc',

        titulo: 'Micro Intel I9-13900k',
        precio: '$274.707',
        imagen: '../../src/images/id3.jpg'
    },
    {
        id: '16',
        categoria: 'componentes de pc',
        titulo: 'Micro AMD Ryzen 5 4500 4.1 Ghz AM4',
        precio: '$43.386',
        imagen: '../../src/images/id16.jpg'
    },
    {
        id: '17',
        categoria: 'componentes de pc',
        titulo: 'Micro AMD Ryzen 7 5700G 4.6 Ghz AM4',
        precio: '$96.758',
        imagen: '../../src/images/id17.jpg'
    }
    ,
    {
        id: '18',
        categoria: 'componentes de pc',
        titulo: 'Micro AMD Ryzen 9 5900X 4.8 Ghz AM4',
        precio: '$150.113',
        imagen: '../../src/images/id18.jpg'
    },
    {
        id: '19',
        categoria: 'componentes de pc',
        titulo: 'Memoria Ram Patriot Viper Steel Series RGB 16GB 3200 Mhz DDR4',
        precio: '$25.197',
        imagen: '../../src/images/id19.jpg'
    },
    {
        id: '20',
        categoria: 'componentes de pc',
        titulo: 'Memoria Ram OEM 32GB 3200 Mhz DDR4 BULK',
        precio: '$38.303',
        imagen: '../../src/images/id20.jpg'
    },
    {
        id: '21',
        categoria: 'componentes de pc',
        titulo: 'Placa de Video PALIT Nvidia Geforce GTX 1660 Ti STORMX 6GB GDDR6',
        precio: '$101.794',
        imagen: '../../src/images/id21.jpg'
    },
    {
        id: '22',
        categoria: 'componentes de pc',
        titulo: 'Placa de Video GeForce RTX 3060 Ti 8GB EAGLE OC GDDR6',
        precio: '$196.714',
        imagen: '../../src/images/id22.jpg'
    },
    {
        id: '2',
        categoria: 'destacados',
        titulo: 'Monitor Led 28" Gaming UHD',
        precio: '$307.416',
        imagen: '../../src/images/id2.jpg'
    },
    {
        id: '6',
        categoria: 'notebooks',
        titulo: 'Notebook HP 445 14" AMD Ryzen 5 8GB ram',
        precio: '$271.737',
        imagen: '../../src/images/id4.jpg'
    },
    {
        id: '7',
        categoria: 'pcs',
        titulo: 'PC Oficina Armada Completa Intel Pentium G6400 8GB SSD 240GB',
        precio: '$86.064',
        imagen: '../../src/images/id7.jpg'
    },
    {
        id: '8',
        categoria: 'pcs',
        titulo: 'PC De Escritorio Armada Completa AMD KIT Ryzen 7 4700S 16GB 240GB SSD RX 550',
        precio: '$108.980',
        imagen: '../../src/images/id8.jpg'
    },
    {
        id: '9',
        categoria: 'pcs',
        titulo: 'PC Gamer Armada Completa AMD Ryzen 7 4700S 16GB SSD 480GB RX550',
        precio: '$127.263',
        imagen: '../../src/images/id9.jpg'
    },
    {
        id: '10',
        categoria: 'pcs',
        titulo: 'PC Armada Completa Intel I3 10105F 16GB SSD 480GB GT 1030 + Mouse de Regalo',
        precio: '$248.900',
        imagen: '../../src/images/id10.jpg'
    },
    {
        id:'11',
        categoria: 'pcs',
        titulo: 'PC Gamer Armada Completa Intel I7 13700KF 32GB 1TB NVME 2TB HDD RX 6950XT + Mouse de Regalo',
        precio: '$860.423',
        imagen: '../../src/images/id11.jpg'
    },
    {
        id: '12',
        categoria: 'notebooks',
        titulo: 'Notebook Chromebook Lenovo 100e 11.6" AMD A4 9120c 4GB RAM 32GB EMMC',
        precio: '$63.626',
        imagen: '../../src/images/id12.jpg'
    },
    {
        id: '13',
        categoria: 'notebooks',
        titulo: 'Notebook PCBOX FIRE! 3 14" Intel I3 1005G1 8GB Ram 256Gb SSD + Zion-N + M365 W10',
        precio: '$129.327',
        imagen: '../../src/images/id13.jpg'
    },
    {
        id: '14',
        categoria: 'notebooks',
        titulo: 'Notebook PCBOX FIRE! 5 14" Intel I5 1035G 8GB Ram 256Gb SSD Win 11',
        precio: '$172.417',
        imagen: '../../src/images/id14.jpg'
    },
    {
        id: '15',
        categoria: 'notebooks',
        titulo: 'Notebook HP 445 14" AMD Ryzen 5 5600U 8GB Ram 256GB SSD W10 PRO',
        precio: '$273.885',
        imagen: '../../src/images/id15.jpg'
    },
    {
        id: '23',
        categoria: 'sillas',
        titulo: 'Silla Gamer Antec T1 Sport Black Yellow',
        precio: '$76.058',
        imagen: '../../src/images/id23.jpg'
    },
    {
        id: '24',
        categoria: 'sillas',
        titulo: 'Silla Gamer Genesis Nitro 550 Black',
        precio: '$82.237',
        imagen: '../../src/images/id24.jpg'
    },
    {
        id: '25',
        categoria: 'sillas',
        titulo: 'Silla Gamer Genesis Nitro 550 Black–Red',
        precio: '$82.237',
        imagen: '../../src/images/id25.jpg'
    },
    {
        id: '26',
        categoria: 'sillas',
        titulo: 'Silla Gamer Aerocool Duke Steel Blue - OUTLET CAJA ABIERTA',
        precio: '$105.524',
        imagen: '../../src/images/id26.jpg'
    },
    {
        id: '27',
        categoria: 'sillas',
        titulo: 'Silla Gamer Genesis Nitro 890 Black',
        precio: '$112.837',
        imagen: '../../src/images/id27.jpg'
    },
    {
        id: '28',
        categoria: 'sillas',
        titulo: 'Silla Gamer Genesis Nitro 950 Black',
        precio: '$126.225',
        imagen: '../../src/images/id28.jpg'
    }
    

    
]

export const gFetch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id ? productos.find(prod => prod.id === id) : productos)
        },1000)
        
    })
}