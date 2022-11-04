import React from 'react'

function ListaCarrosComponent({lista}) {

  const carros = lista;

  return (
    <>
      <h2>ListaCarrosComponent</h2>
      <ul>
        {carros.map(c => {
          
            return <li key={c.id}>{c.modelo}</li>
          }
        
        )}
      </ul>
    </>
    
  )
}

export default ListaCarrosComponent