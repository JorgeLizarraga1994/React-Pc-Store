import { useState } from 'react'
import { useCartContext } from '../../../Context/CartContext'
import Contador from '../contador/contador'
import { Link } from "react-router-dom"



const CardDetail = ({producto}) => {
    const [isInCount, setIsInCount] = useState(true)
    const { agregarAlCarrito} = useCartContext()

    const onAdd = (cant) => {
        console.log(cant)
      //Agregar al carrito
    agregarAlCarrito({...producto, cantidad: cant})
    setIsInCount(false)  
}       

    

return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-7 " key= {producto.id}>
                <img className='' src= {producto.imagen} />
            </div>
        </div>
            <div className="col-4 border border-2 rounded">
                <div className='card-body  '>
                    <center>
                        <h4 className='text-light'>{producto.titulo} </h4>
                        <h3 className='text-light'>{"$" + producto.precio}</h3>
                        
                    </center>
                </div>
                <div className="col-10 m-5">
                    {isInCount ? 
                        <Contador onAdd={onAdd} />
                                            
                    : 
                        <>
                            
                                <Link to={'/Carrito'}>
                                    <button className="btn btn-outline-primary m-2">Ir Al carrito</button>
                                </Link>
                                <Link to={'/'}>
                                    <button className="btn btn-outline-success m-2">Seguir comprando</button>
                                </Link>

                        </>
                    }
                </div>
            </div>
    </div>
)
}

export default CardDetail