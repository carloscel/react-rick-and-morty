import React from 'react'

export const Character = ({character}) => {
  return (
    <>
      <h2 className='nombre'>{character.name}</h2>
      <img className='imagen' src={character.image} alt={character.name}/>
      <p className='planeta'>{character.origin.name}</p>
    </>
  )
}
