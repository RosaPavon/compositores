
import './App.css';
import {useState} from 'react'

function App() {

  const [compositores, setCompositores] = useState([
  'Wolfgang Amadeus Mozart',
  'Ludwig van Beethoven',
  'Johann Sebastian Bach']);

 const [datos, setDatos] = useState({//aqui es donde vamos a almacenar lo que indique el usuario en el imput
   nombre:''
 })

/* const handleInputChange = (event) => {
   console.log(event.target.value)
   setDatos({
     ...datos,//generamos una copia para no perder ningun dato
     [event.target.name] : event.target.value

   })
 } */ 

 const handleInputChange = (event) => {
  const autor= event.target.value
  setCompositores([...compositores, autor])
}
const handleInputDelete = (name) => {
  const newCompositor = compositores.filter((autor) => autor.name !== name)
}

  
/* const añadirCompositor= compositores.map((musico, index)=>{
  return (
    <ul>
     <li>{musico}</li>
  </ul>
  );

}) */

    return (
    <>
    <h1>Formularios en react</h1>
    <form>
      <div>
            <input
             type="text" 
             name="nombre"
             onChange={handleInputChange} />
      <button type="submit">Pulsa</button>
      </div>
      <div>
            <input
             type="text" 
             name="name"
             onChange={handleInputDelete} />
      <button type="submit">Elimina</button>
      </div>
      </form>
      <h3>{datos.nombre}</h3>
      {/* <h3>{añadirCompositor}</h3> */}
      
    </>
  )
}

export default App;
