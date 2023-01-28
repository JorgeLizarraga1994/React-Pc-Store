import React from "react";
import {useState , useEffect} from 'react'
import { gFetch } from "../../Utils/gFetch";
import { useParams } from 'react-router-dom';
import CardList from "../CardList/CardList";


export const CardListContainer = ( ) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const{ id } = useParams()

    useEffect( () => {
        if (id) {
            gFetch()
                .then(respuestaPromesa => {
                    setProductos(respuestaPromesa.filter(items => items.categoria === id));
                })
                .catch ( err => console.log(err))
                .finally (()=> setLoading(false))
        }
        else{
            gFetch()
                .then(respuestaPromesa => {
                    setProductos(respuestaPromesa)
                })
                .catch ( err => console.log(err))
                .finally (()=> setLoading(false))
        }
    }, [id])

    console.log(id)
    
    return (
        <div className="container d-flex pt-5">
            <div className="row">  
                {   loading ? <h1>Cargando...</h1> :
                        <CardList  key = {productos.key} productos = {productos}/> 
                }
            </div>
        </div>    
        )
}

