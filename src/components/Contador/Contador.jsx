import { useState } from "react";

export const Contador = ({ stock }) => {
    const [contador, setContador] = useState(1);

    const handleIncrement = () => {
        if (contador < stock){
            setContador(contador + 1);
        } 
    };
    
    const handleDecrement = () => {
        if (contador > 1) {
        setContador(contador - 1);
        }
    };
    return (
        <>
            <h2>Seleccione cantidad</h2>
            <button onClick={handleDecrement}> - </button>
                <strong> {contador} </strong>
            <button onClick={handleIncrement}> + </button>
            <br></br>
            <button><label><strong>Agregar al carrito</strong></label></button>
        </>
    );
};
