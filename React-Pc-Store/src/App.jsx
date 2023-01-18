import { useState } from 'react'
import {BrowserRouter , Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Carrousel from './components/Carrousel/Carrousel'
import { ItemListContainer } from './components/Container/ItemListContainer/ItemListContainer'
import CartContainer from './components/Container/CartContainer/CartContainer'
import ItemDetailContainer from './components/Container/ItemDetailContainer/ItemDetailContainer'
import './components/Container/ItemListContainer/ItemListContainer.css'
import './App.css'
import './components/NavBar/Navbar.css'

function App() {
  

  return (
    <BrowserRouter>
      <div className='App'>
              <Navbar/>
              <Carrousel/>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categoria/:id" element={<ItemListContainer />} />
              <Route path="/Carrito" element={< CartContainer />} />
              <Route path="/Detalle/:id" element={<ItemDetailContainer />} /> 
              <Route path="*" element={<Navigate to='/' />} />
            </Routes>    
      </div>
    </BrowserRouter>
  )
}

export default App
