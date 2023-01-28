import React from 'react'
import Card from '../Card/Card'


const CardList = ( {productos} ) => {
  return (
        productos.map(producto => 
        <Card key={producto.key} producto = {producto} />
    )
  )
}

export default CardList