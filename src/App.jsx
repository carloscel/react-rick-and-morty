import React from 'react'
import { CharacterList } from './components/CharacterList';
import './App.css'

function App() {

  return (
    <div className='contenedor-general'>
      <h1 className='titulo'>Rick and Morty </h1>
      <CharacterList />
    </div>
  )
}

export default App;

//el useEffect nos permite hacer un re render de la app cuando un dato cambie, pero tmb nos permite ejecutar código cuando el componente es creado