import React from "react";
import '../Stylos/estilos.css';

export function SaludoProps(props){
    return(
        <div className="caja">
            <h2>Componente con props</h2>
            <h2>Hola {props.nombre}</h2>
        </div>
    );
}