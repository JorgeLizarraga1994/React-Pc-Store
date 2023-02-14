import { useState } from 'react'
import {BrowserRouter , Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Carrousel from './components/Carrousel/Carrousel'
import { CardListContainer } from './components/Container/CardListContainer/CardListContainer'
import CartDetail from './components/Container/CartContainer/CartContainer'
import CardDetailContainer from './components/Container/CardDetailContainer/CardDetailContainer'
import './components/Container/CardListContainer/CardListContainer.css'
import './App.css'
import './components/NavBar/Navbar.css'
import { CartContext, CartContextProvider } from './Context/CartContext'
import CartContainer from './components/Container/CartContainer/CartContainer'
import { Toaster, toast} from 'react-hot-toast'
import Footer from './components/Footer/Footer'
import Formulario from './components/Formulario/Formulario'




function App() {
  

  return (
    <CartContextProvider>
      <BrowserRouter>
            <div className='App'>
                <Navbar/>
                <Carrousel/>
                <Toaster position= 'top-right' 
                          toastOptions={{
                            // Define default options
                            className: '',
                            duration: 2000,
                            style: {
                              background: '#873A5E',
                              color: '#D9D0DE',
                            },
                          }}
                />
                <Routes>
                  <Route path="/" element={<CardListContainer />} />
                  <Route path="/categoria/:id" element={<CardListContainer />} />
                  <Route path="/Carrito" element={< CartContainer />} />
                  <Route path="/Detalle/:id" element={<CardDetailContainer />} /> 
                  <Route path="*" element={<Navigate to='/' />} />
                  <Route path="/categoria/contacto" element={<Formulario/>} />
                </Routes>
            </div>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider> 
  )
}

export default App
