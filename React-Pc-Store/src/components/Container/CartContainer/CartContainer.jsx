import React from "react"
import { useCartContext } from "../../../Context/CartContext"
import { useState } from 'react'
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import { Link } from "react-router-dom"




const CartContainer = () => {

  const { cartList, vaciarCarrito , precioTotal, eliminarItem , realizarCompra} = useCartContext()


return (
    <>
        { cartList.map(prod => <div key={prod.id} className="text-light m-5 align-items-center justify-content-center">                                  
                                    <div className="d-flex row justify-content-center align-items-center border rounded-4">
                                        <img className=" col-2 "  src={prod.imagen} />
                                        <label className="col-3 m-2  d-flex justify-content-center align-items-center">{prod.titulo}</label>
                                        <label className="col-2 m-2  d-flex justify-content-center align-items-center "> Cantidad:{prod.cantidad}</label>
                                        <label className="col-2 m-4  d-flex justify-content-center align-items-center"> ${prod.precio}</label>
                                        <button className="col-1 m-4 btn btn-danger" onClick= {() => eliminarItem(prod.id)}>X</button>
                                    </div>
                              </div> )}
                              { precioTotal() == 0 ?  
                              <div className="container d-flex border col-5 rounded-4">
                                    <div className="row">
                                      <div className="d-flex justify-content-center align-items-center">
                                          <h5 className="text-light">El carrito se encuentra vacio</h5>
                                      </div>
                                      <div className="d-flex justify-content-center align-items-center">
                                          <Link to={'/'}> <h4 className="row">volver a inicio</h4> </Link>
                                      </div>
                                    </div>
                                </div>
                                :    
                              <div className="container  d-flex justify-content-center align-items-center ">
                                  <div className="row d-flex justify-content-center align-items-center">
                                        <h4 className="text-light col-5 ">${precioTotal()} </h4>  
                                        <button onClick={realizarCompra} className = "btn btn-warning col-10"> Realizar compra</button>
                                        <button onClick={vaciarCarrito} className='btn btn-outline-danger col-10'>Cancelar Compra</button>  
                                  </div>      
                              </div>
                              }
</>
  )}


export default CartContainer
