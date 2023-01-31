//import { useState, useEffect } from "react";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {  


    const {images, isLoading} = useFetchGifs(category);
    console.log({ isLoading })


    return (
    <>
        <h3>{category}</h3>
    {
        isLoading && (<h2>Cargando...</h2>)
    }
        
        <div className = "card-grid">
            {images.map( (imagen) => (
                    <GifItem 
                        key = {imagen.id}
                        {...imagen}
                    />
                    //<div>
                    //     <img src = {url}></img>
                    //     <p key={id}>{title}</p>
                    // </div>
                ))
            }
            
        </div>
    
    </>
  )
}

// IM8M0VLgOYvAR33Ew8oRfea42xICVHB5