import React from 'react'
import CartWidget from './CartWidget';
import{ NavLink } from 'react-router-dom';


function Navbar(){
        return(
            <nav className="navbar navbar-expand-lg p-3">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        
                    <div className="navbar-nav">
                        <NavLink to='/' className='nav-link'>INICIO</NavLink>
                        <NavLink to='/categoria/notebooks' className='nav-link' translate='no'>NOTEBOOKS</NavLink>
                        <NavLink to='/categoria/pcs' className='nav-link' translate='no'>PC'S</NavLink>
                        <NavLink to='/categoria/componentes de pc' className='nav-link'>COMPONENTES DE PC</NavLink>
                        <NavLink to='/categoria/sillas' className='nav-link'>SILLAS</NavLink>
                        <NavLink to='/categoria/contacto' className='nav-link'>CONTACTANOS</NavLink>
                        <CartWidget/>
                    </div>
                    </div>
                </div>
            </nav>
        )
    }
export default Navbar;    