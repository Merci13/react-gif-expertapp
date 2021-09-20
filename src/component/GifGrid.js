
import React from 'react'
import { useFecthGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category = "" }) => {
   // const apyKey = 'wGlqhmQl8UGQDP7A0JnHkadJ1MYFb10X';





  
   
   const {data:images, loading} = useFecthGifs( category);
  



    return ( 
        <> 
        <h3 className="animate__fadeIn">{category}</h3>

        {loading && <p className= "animate__pulse"> Cargando</p>}

        <div className ="card-grid">
           

                {
                images.map((image) => (
                        // <li key = {image.id}> {image.title}</li>
                        <GifGridItem 
                        key ={image.id}
                        {...image}
                        />
                ))
                }

        </div>
        </>
   
    )
}
