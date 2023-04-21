import React from "react";
import { SaludoSimple } from "./SaludoSimple";
import { SaludoProps } from "./SaludoProps";
import { SaludoDes } from "./SaludoDes";
import { EstadoAum } from "./EstadoAum";
import { Button } from 'react-bootstrap';

export function Menu(){
    return(
        <div>
            <SaludoSimple />
            <SaludoProps nombre="Eduardo" />
            <SaludoDes nombre="Clest" />
            <EstadoAum />
        </div>
    );
}