import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";


const CardDetailContainer = ( ) => {
  const [producto, setProducto] = useState([])
  const {id} = useParams()
  console.log(id)

   useEffect (() => {
    const db = getFirestore()
    const queryDoc = doc(db, 'productos', id)
    getDoc(queryDoc)
    .then(results => setProducto ({id: results.id, ...results.data()}))
    .catch(err => console.error(err)) 

    
  }, [])
  console.log(producto)
  return (
    <CardDetail producto={producto}/>
  )
}

export default CardDetailContainer;