import{useState} from "react"

import { useState } from "react";

function Eliminar(props){
    const[input2, setInput2] = useState("")
}
function cambiarInput2(e){
    setInput(e.target.value)
}

function borraParrafo(nombre){
    //usamos filter para almacenar en una variable                   //aqui seria copositor para compararlo
    let array=lista.filter((compositor)=>compositor.nombre.toLowerCase() !== nombre.toLowerCase())//array temporal para manipular el staate
    //tambien podemos comparar todo en minusculas o todo en mayusculas    
    //queremos que guarde todos los nombres excepto el que ha escrito el usuario para borrar
    setInput2("")
    
}

return(
    <>
    <input type="text" onChange={cambiarInput2} value={input2}/>
    <button onClick={borraParrafo}>Borrar</button>
    </>
)

export default Eliminar