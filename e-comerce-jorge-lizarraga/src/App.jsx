import { useState } from 'react'
import './App.css'
import './components/Cards/Cards.css'
import './components/NavBar/Navbar.css'
import Cards from './components/Cards/Cards'
import Navbar from './components/NavBar/Navbar'
import Carrousel from './components/Carrousel/Carrousel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Navbar/>
        <Carrousel/>
        <Cards/>
       
      </div>
    </div>
  )
}

export default App
