import React from 'react'

export const Pages = ({page, setPage}) => {
  return (
    <div className='paginas'>
      <p>Page {page}</p> 
      <button onClick={() => setPage(page + 1)}>Page {page + 1}</button> 
    </div>
  )
}
