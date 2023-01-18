import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const CartWidget = () => {
  
  return (
    <>
    <Link to='/Carrito'><a href="#"><img className='tamañoImg' src="../../../shoppingcart1_114878.svg" alt="" /></a></Link>
      
      
    
    </>
  );
};

export default CartWidget;