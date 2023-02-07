import { doc, getFirestore } from "firebase/firestore";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../Utils/gFetch";
import CardDetail from "../CardDetail/CardDetail";


const CardDetailContainer = ( ) => {
  const [producto, setProducto] = useState([])
  const {id} = useParams()
  console.log(id)

  useEffect (() => {
    const db = getFirestore()
    const queryDoc = doc(db, 'items', id)
    getDoc(queryDoc)
    .then(result => setProducto ({id: result.id, ...result.data()}))
    .catch(err => console.error(err)) 
     /* gFetch(id)
    .then(resp => setProducto(resp))  */
    
  }, [])
  console.log(producto)
  return (
    <CardDetail producto={producto}/>
  )
}

export default CardDetailContainer;