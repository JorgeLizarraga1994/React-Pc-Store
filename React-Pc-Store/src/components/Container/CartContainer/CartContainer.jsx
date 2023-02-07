import { useCartContext } from "../../../Context/CartContext"

const CartContainer = () => {
  const { cartList, vaciarCarrito} = useCartContext()
  return (
    <div>
        { cartList.map(prod => <div key={prod.id} className="text-light">
                                  <img src={prod.imagen} className= "w-25" />
                                  <label> -titulo:{prod.titulo}</label>
                                  <label> -cantidad:{prod.cantidad}</label>
                                  <label> -precio:{prod.precio}</label>
                              </div> )}
          <button onClick={ vaciarCarrito } className = "btn btn-outline-danger">Vaciar Carrito</button>                    
    </div>
  )
}

export default CartContainer