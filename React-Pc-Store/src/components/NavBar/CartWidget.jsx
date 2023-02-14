import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

const CartWidget = () => {
  const {cantidadTotal} = useCartContext() 
  
  return (
    <>
    <Link to='/Carrito'><a href="#"><img className='tamañoImg' src="../../../shoppingcart1_114878.svg" alt="" /></a></Link>
    {cantidadTotal() != 0 && cantidadTotal()}
      
      
    
    </>
  );
};

export default CartWidget;