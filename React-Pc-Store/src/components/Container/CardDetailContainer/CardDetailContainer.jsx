import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";
import Loader from "../Loader/Loader";

const CardDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true);
  const {id} = useParams()

useEffect (() => {
    const db = getFirestore()
    const queryDoc = doc(db, 'productos', id)
    getDoc(queryDoc)
    .then(results => setProducto ({id: results.id, ...results.data()}))
    .catch(err => console.error(err)) 
    .finally(()=> setLoading(false)) 
  }, [])

  return (
          <div className="container d-flex pt-5">
            <div className="row">  
                {   loading ? <Loader/> : <CardDetail  key = {producto.key} producto = {producto}/>  
                }
            </div>
        </div>
  )
}
export default CardDetailContainer;