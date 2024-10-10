import { useState } from "react";

function Contador({mudarTema}){
const [contador, setContador]=useState(0)

function diminuirContador(){
    setContador((anteriorContador)=>anteriorContador-1)
    // Como não fazer: setContador(contador+1)
}

function aumentarContador(){
    setContador((anteriorContador)=>anteriorContador+1)
}

    return (
        <>
        <button onClick={diminuirContador}>-</button>
        {contador}
        <button onClick={aumentarContador}>+</button>
        <button onClick={mudarTema}>Mudar Tema</button>
        </>
    )
}

export default Contador;