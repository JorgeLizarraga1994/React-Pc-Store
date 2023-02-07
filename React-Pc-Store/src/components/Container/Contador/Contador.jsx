import { useState } from 'react'


export const Contador = ( {inicial = 1, cantidadStock = 20, onAdd}) => {
    const [count, setCount] = useState(inicial)

    const handleSuma = () => {
        if (count < cantidadStock){
            setCount(count + 1)
        }
    }

    const handleResta = () => {
        if (count > inicial){
            setCount(count - 1)
        }
    }

    const handleOnAdd = () => {
        onAdd(`ha seleccionado la cantidad de ${count}`)
        }

  return (
    <div className='card'>
        <div className='card-body row'>
            <div className='col'>
                <button className='btn btn-outline-dark w-100' onClick={handleSuma}> + </button>
            </div>
            <div className='col'>
                <center>
                    <label >{count} </label>
                </center>   
            </div>
            <div className='col'>
                <button className='btn btn-outline-dark w-100' onClick={handleResta}> - </button>
            </div>
        </div>
        <div className='card-footer'>
            <button className='btn btn-outline-dark w-100' onClick={handleOnAdd}>Agregar al carrito</button>
        </div>
    </div>
  )
}


export default Contador