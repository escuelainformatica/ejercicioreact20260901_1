import { useRef, useState } from 'react';
export default function ComponenteRef2() {
    const labelRef = useRef<HTMLLabelElement>(null);
    const [labelValor, setLabelValor] = useState('');
    console.log("ok");
    function clickBoton() {
        console.log('Label ref:', labelRef.current);
        setLabelValor('Botón presionado');
    }
    return (
        <>
            <label ref={labelRef}>{labelValor}</label>
            <button onClick={clickBoton}>Click me</button>
        </>
    );
}   
