import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../Utils/gFetch";


const CardDetailContainer = ( ) => {
  const [producto, setProducto] = useState([])
  const {id} = useParams()
  console.log(id)

  useEffect (() => {
    gFetch(id)
    .then(resp => setProducto(resp))
    /* .finally(() => resp.json()) */
  }, [])
  console.log(producto)
  return (
    <div> CardDetailContainer {id} </div>
  )
}

export default CardDetailContainer;