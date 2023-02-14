import { Link } from 'react-router-dom';

export const Card = ({producto}) => {
  return (
    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-7 " key= {producto.id}>
            <Link to={`/Detalle/${producto.id}`}><div className="card text-center bg-dark">
                    <img src= {producto.imagen} />
                <div className='card-body text-light '>
                    <h2 className="card-text"> ${producto.precio}</h2>
                    <h6 className="card-title" >{producto.titulo} </h6>
                </div>
                </div>
            </Link>
        </div>
  )
}
export default Card