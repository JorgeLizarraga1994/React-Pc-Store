import React from "react";
import {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom';
import CardList from "../CardList/CardList";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { gFetch } from "../../Utils/gFetch";


export const CardListContainer = ( ) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const{ id } = useParams()


    useEffect (() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'items')
        if (id){
            const queryCollectionFilter = query(queryCollection , where('categoria', '==', id))

            getDocs(queryCollectionFilter)
            .then(respuestaPromesa => {
                setProductos(respuestaPromesa.docs.map(prod => ({id: prod.id, ...prod.data() })))
            })
            .catch ( err => console.log(err))
            .finally (()=> setLoading(false))
        }else{
            getDocs(queryCollection)
            .then(respuestaPromesa => {
                setProductos(respuestaPromesa.docs.map(prod => ({id: prod.id, ...prod.data() })))
            })
            .catch ( err => console.log(err))
            .finally (()=> setLoading(false))
        }
        },[])

        

     /* useEffect( () => {
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

    console.log(id) */
    
    return (
        <div className="container d-flex pt-5">
            <div className="row">  
                {   loading ? <h1>Cargando...</h1> : <CardList  key = {productos.key} productos = {productos}/> 
                    
                }
            </div>
        </div>    
        ) 
}

