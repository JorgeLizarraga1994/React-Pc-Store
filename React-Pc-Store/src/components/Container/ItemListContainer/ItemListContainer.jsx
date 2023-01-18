import React from "react";

import {useState , useEffect} from 'react'
import { gFetch } from "../../Utils/gFetch";
import { Link , useParams } from 'react-router-dom';





export const ItemListContainer = ( {saludo} ) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const{ id } = useParams()

    useEffect( () => {
        if (id) {
            gFetch()
                .then(respuestaPromesa => {
                    setProductos(respuestaPromesa.filter(items => items.categoria === id));

                })
        
                .catch ( err => console.log(err))
                .finally (()=> setLoading(false))
        }
        else{
            gFetch()
                .then(respuestaPromesa => {
                    setProductos(respuestaPromesa)
                })
        
                .catch ( err => console.log(err))
                .finally (()=> setLoading(false))

        }

    }, [id])

    console.log(id)
    
    return (
        <div className="container d-flex pt-5">
            <div className="row">
                
                {   loading ? <h1>Cargando...</h1> :
                            productos.map(producto => 
                                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-7 " key= {producto.id}>
                                    <div className="card text-center bg-dark">
                                            <img src= {producto.imagen} />
                                        <div className='card-body text-light '>
                                            <h4 className="card-title" >{producto.titulo} </h4>
                                            <p className="card-text">{producto.precio}</p>
                                            <Link to={`/Detalle/${producto.id}`}><a href="#" className="btn btn-outline-secondary">Ver Producto</a></Link>
                                        </div>
                                    </div>
                                </div>
                            ) 
                        }
            </div>
        </div>    
    )
}

