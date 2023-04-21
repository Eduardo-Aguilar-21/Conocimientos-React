import React, { useState } from "react";
import { Button } from 'react-bootstrap';

export function EstadoAum(){
    const [num, setNum] = useState(0);

    const restar = () => {
        setNum(num - 1);
    }

    const sumar = () => {
        setNum(num + 1);
    }
    return(
        <div className="caja">
            <h2>Componente con estado aumentativo</h2>
            <Button variant="success" onClick={restar}>-</Button>
            <h2>{num}</h2>
            <Button variant="success" onClick={sumar}>+</Button>
        </div>
    );
}