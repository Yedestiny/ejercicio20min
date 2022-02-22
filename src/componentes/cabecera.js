
import React, { createContext, useState, useEffect } from "react";
export const Cabecera = () => {
    var titulo = "Tiulo por defecto";

    function cambiar_titulo1(e){
        e.preventDefault()
        titulo = "titulo 1"
        console.log('You clicked submit.');
      }
    return (
        <div>
            Titulo: {titulo}
            
                <button type="submit" onClick={cambiar_titulo1}>Cambiar a titulo 1</button>
           
        
        </div>

    );
};