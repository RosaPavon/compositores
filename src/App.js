import './App.css'
import {useState} from "react"
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Lista from './Lista'
import Eliminar from './Eliminar'

function App(){
const [input, setInput]=useState("")//necesitas uno por cada cambio que vayas a hacer en la lista
const [input2, setInput2]=useState("")
/* const [lista, setLista]=useState([
    'Wolfgang Amadeus Mozart',
    'Ludwig van Beethoven',
    'Johann Sebastian Bach'
  ]) */

const [lista, setLista]=useState([    
     {
      nombre: 'Wolfgang Amadeus Mozart', 
      fecha: 1756, 
      canciones: ['Symphonie Nr 40', 'Don Giovanni']},
    {
      nombre: 'Ludwig van Beethoven', 
      fecha: 1770,
      canciones: ['Symphonie No.5', 'Piano Sonata No.32']
    },
    {
      nombre: 'Johann Sebastian Bach', 
      fecha: 1685,
      canciones: ['Vivace', 'Largo ma non tanto']
    }
])

 function cambiarInput(e){
     setInput(e.target.value)//sacas el valor del evento
 }
/*  function cambiarInput2(e){
    setInput(e.target.value)
} */

 /* function grabarParrafo(){
     //esta funcion coge el valor del imput 
     setParrafo(input)//este se actualiza bajo demanda
 } */
 

function grabarParrafo(){
let array =[ ...lista]//copiamos parrafo
array.push({nombre: input})//mediante un push añadimos loq ue escribe el usuario
setLista(array)//mostramos el nuevo array
setInput("")//reseteamos el input cuando pulsamos el botón
}

/* function borraParrafo(nombre){
    //usamos filter para almacenar en una variable                   //aqui seria copositor para compararlo
    let array=lista.filter((compositor)=>compositor.toLowerCase() !== nombre.toLowerCase())//array temporal para manipular el staate
    //tambien podemos comparar todo en minusculas o todo en mayusculas    
    //queremos que guarde todos los nombres excepto el que ha escrito el usuario para borrar
        setLista(array)
    
} */

/* function preBorrar(){//ahora pasaria a ser una función autónoma
    borraParrafo(input2)//se puede simplificar con un arrow
} */
return (
    <BrowserRouter>
    <Lista lista={lista}/>
    <Route path="/">
    <input type="text" onChange={cambiarInput} value={input}/>
    <button onClick={grabarParrafo}>Guardar</button>
    {/* <p>{input}</p> */}
    {/* <ul>
    {lista.map((compositor, index)=> {
     return <li>{compositor.nombre}</li>})}
    </ul> */}
    </Route>
    <Route path="/eliminar">
    <input type="text" onChange={cambiarInput2} value={input2}/>
    {/* <button onClick={borraParrafo}>Borrar</button> */}
    {/* <button onClick={preBorrar}>Borrar</button>, necesitamos pasarle un argumento por eso creamos el preborrar */}
    <button onClick={()=>borraParrafo(input2)}>Borrar</button>
    <ul>
    <Eliminar lista={lista} setLista={setLista}/>
    </ul>
    </Route>
    </BrowserRouter>

)
}
export default App;