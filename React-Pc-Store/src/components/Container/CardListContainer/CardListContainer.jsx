import React from "react";
import {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom';
import CardList from "../CardList/CardList";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { gFetch } from "../../Utils/gFetch";
import Loader from "../Loader/Loader";


export const CardListContainer = ( ) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const{ id } = useParams()

        useEffect(()=>{
            const firebaseQuerys = () => {
                const db = getFirestore()
                const queryCollection = collection(db, 'productos')
                const queryCollectionFilter = id ?  query(queryCollection, where('categoria', '==', id)) : queryCollection         
                    
                getDocs(queryCollectionFilter)
                .then(respuestaPromesa => {
                    // console.log(respuestaPromesa)       
                    setProductos(respuestaPromesa.docs.map(prod => ( { id: prod.id, ...prod.data() } )))
                })        
                .catch(err => console.log(err))
                .finally(()=> setLoading(false)) 
            }
            firebaseQuerys()
        },[id])  
    
    return (
        <div className="container d-flex pt-5">
            <div className="row">  
                {   loading ? <Loader/> : <CardList  key = {productos.key} productos = {productos}/> 
                    
                }
            </div>
        </div>    
        ) 
}

