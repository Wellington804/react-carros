import React from 'react'
import FiltrosComponent from './FiltrosComponent'
import HeaderComponent from './HeaderComponent'
import ListaCarrosComponent from './ListaCarrosComponent'

function PageMain() {



  return (
    <div>
      <HeaderComponent titulo="Loja de Carros do Cristiano"></HeaderComponent>
      <FiltrosComponent></FiltrosComponent>
      <ListaCarrosComponent></ListaCarrosComponent>
    </div>
  )
}

export default PageMain