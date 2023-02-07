import { useContext } from 'react'
import { CartContext, useCartContext } from '../../../Context/CartContext'
import Contador from '../contador/contador'


const CardDetail = ({producto}) => {
    const { agregarAlCarrito, cartList } = useCartContext()
    const onAdd = (cant) => {
        console.log(cant)
      //Agregar al carrito
    agregarAlCarrito({...producto, cantidad: cant})  
}       

    

return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-7 " key= {producto.id}>
                <img src= {producto.imagen} />
            </div>
        </div>
            <div className="col-4">
                <div className='card-body  '>
                    <center>
                        <h4 className='text-light'>{producto.titulo} </h4>
                        <h3 className='text-light'>{producto.precio}</h3>
                        <Contador onAdd={onAdd}/>
                    </center>
                </div>
            </div>
    </div>
)
}

export default CardDetail