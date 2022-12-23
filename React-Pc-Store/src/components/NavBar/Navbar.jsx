import React from 'react'
import CartWidget from './CartWidget';

function Navbar(){
        return(
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        
                    <div className="navbar-nav">
                        <CartWidget/>
                        <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                        <a className="nav-link" href="#">CATEGORIAS</a>
                        <a className="nav-link" href="#">CONSOLAS</a>
                        <a className="nav-link" href="#">CELULARES</a>
                        <a className="nav-link" href="#">SERVIDORES</a>
                        <a className="nav-link" href="#">NOTEBOOKS</a>
                        <a className="nav-link" href="#">SMART TV</a>
                        <a className="nav-link" href="#">DRONES</a>
                    </div>
                    </div>
                </div>
            </nav>
        )
    }
export default Navbar;    