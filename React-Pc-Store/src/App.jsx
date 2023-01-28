import { useState } from 'react'
import {BrowserRouter , Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Carrousel from './components/Carrousel/Carrousel'
import { CardListContainer } from './components/Container/CardListContainer/CardListContainer'
import CartDetail from './components/Container/CartDetail/CartDetail'
import CardDetailContainer from './components/Container/CardDetailContainer/CardDetailContainer'
import './components/Container/CardListContainer/CardListContainer.css'
import './App.css'
import './components/NavBar/Navbar.css'

function App() {
  

  return (
    <BrowserRouter>
      <div className='App'>
              <Navbar/>
              <Carrousel/>
            <Routes>
              <Route path="/" element={<CardListContainer />} />
              <Route path="/categoria/:id" element={<CardListContainer />} />
              <Route path="/Carrito" element={< CartDetail />} />
              <Route path="/Detalle/:id" element={<CardDetailContainer />} /> 
              <Route path="*" element={<Navigate to='/' />} />
            </Routes>    
      </div>
    </BrowserRouter>
  )
}

export default App
