import React, { useEffect, useState } from 'react'
import { Character } from './Character';
import { Pages } from './Pages';

export const CharacterList = () => {

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json(); 
      setLoading(false)
      setCharacters(data.results);
    }
    
    fetchData()
  }, [page]);
  

  return (
    <>
      <Pages page={page} setPage={setPage}/>
      <div className='contenedor'>
        { loading ? <h1>Loading...</h1> 
          :
          characters.map(character => {
            return(
              <div key={character.id} className='contenedor-imagen'>
                <Character character={character}/>
              </div>
              
            )
          })
        }
      </div>
      <Pages page={page} setPage={setPage}/>
    </>
  )
}
