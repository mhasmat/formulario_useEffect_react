import { useState, useEffect } from "react";

const Actividad = () => {
    // useState /s
    const [count, setCount] = useState(0);
    const [mensaje, setMensaje] = useState("Count es par");

    // useEffect
    useEffect(() => {
        if(count %2 === 0) {
            setMensaje("Número PAR");
        } else {
            setMensaje("Número IMPAR");
        }
    }, [count]);

    // Handlers
    function sumar() {
        setCount(count +1);
    }

    function restar() {
        setCount((c) => c -1);
    }
    
    // Rendering
  return (
    <>
        <h1>Contador: {count}</h1>
        <h2>{mensaje}</h2>
        <button onClick={sumar}>+</button> 
        <button onClick={restar}>-</button> 
    </>
  )
}

export default Actividad;