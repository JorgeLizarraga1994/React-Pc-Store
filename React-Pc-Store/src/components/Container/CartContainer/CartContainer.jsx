import React, { useState } from "react"
import { useCartContext } from "../../../Context/CartContext"
import { Link } from "react-router-dom"
import{ addDoc, collection, getFirestore, } from 'firebase/firestore' 



const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    nombre: '', 
    apellido: '',
    telefono: '',
    email: '',
  })

  const { cartList, vaciarCarrito , precioTotal, eliminarItem , realizarCompra} = useCartContext()

  const generarOrden = (evt) => {
    evt.preventDefault()
    const order ={}
    order.buyer = dataForm
    order.items = cartList.map(({id, titulo, precio}) => ({titulo, precio, id}))
    order.total = precioTotal()
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')

    //insertar
    addDoc(queryCollection , order)
    .then(resp => console.log(resp))
    .catch(err => console.log (err))
    realizarCompra()
  }
  const handleOnChange = (evt) => {
    console.log(evt.target.nombre)
    console.log(evt.target.value)
    setDataForm({
      ...dataForm, 
      [evt.target.name]:  evt.target.value
    })
  }
  console.log(dataForm)
return (
  <>
        {  cartList.map( prod =>  <div key={prod.id} className="text-light m-5 align-items-center justify-content-center">                             
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
                                        <h4 className="text-light col-8">El total de su compra es: ${precioTotal()} </h4>  
                                        <div className="container">
                          <div className="col-12 col-sm-12 col-md-10 col-lg-12 col-xl-12 mx-auto d-flex justify-content-center flex-column">
                            <form onSubmit={generarOrden} className='form-control'>
                                <div className="card-body">
                                <div className="row">
                                    <div className="ps-2 border">
                                        <div className="input-group input-group-dynamic pt-4 ">
                                            <input name="nombre" className="form-control" id="nombre" placeholder="Ingrese su nombre" type="text" value={dataForm.nombre} 
                                                onChange = {handleOnChange} required />
                                        </div>
                                        <div>
                                            <div className="input-group input-group-dynamic pt-4">
                                                <input name="apellido" type="text" id="apellido" className="form-control" placeholder="Ingrese su apellido" aria-label="Last Name..." required/>
                                            </div>
                                        </div>     
                                        <div className="input-group input-group-dynamic pt-4">
                                            <input name="email" type="email" id="email" placeholder="Ingrese su Email" className="form-control" value={dataForm.email} 
                                                onChange = {handleOnChange} required/>
                                        </div>
                                        <div className="input-group input-group-dynamic pt-4">
                                            <input name="telefono" type="number" id="numero" placeholder="Ingrese su telefono" className="form-control" value={dataForm.telefono} 
                                                onChange = {handleOnChange}  required/>
                                        </div>
                                        <br/>
                                        <div className="ps-5">
                                            <button type="submit" className = "btn btn-success col-11"> Generar Orden</button>
                                            <button onClick={vaciarCarrito} className='btn btn-outline-danger col-11'>Cancelar Compra</button>  
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>                   
                      </div>      
                  </div>
          }
</>
  )}


export default CartContainer
