import React from "react";

export function SaludoDes({nombre}){
    return(
        <div className="caja">
            <h2>Saludo con desestructuración</h2>
            <h2>Hola {nombre}</h2>
        </div>
    );
}