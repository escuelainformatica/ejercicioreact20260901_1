import { useRef, useState } from 'react';
export default function ComponenteRef() {
    const [labelValor, setLabelValor] = useState('');
    function clickBoton() {
        setLabelValor('Botón presionado');
    }
    return (
        <>
            <label>{labelValor}</label>
            <button onClick={clickBoton}>Click me</button>
        </>
    );
}   
