import React from 'react'
import FiltrosComponent from './FiltrosComponent'
import HeaderComponent from './HeaderComponent'
import ListaCarrosComponent from './ListaCarrosComponent'

import carrosJson from '../api/carros.json'

function PageMain() {

  // const carros = [
  //   {
  //     "id":1,
  //     "modelo":"Fit",
  //     "montadora":"Honda",
  //     "ano":1987,
  //     "cor": "Azul",
  //     "estoque": 4,
  //     "link_img":""
  //   },
  //   {
  //     "id":2,
  //     "modelo":"Pálio",
  //     "montadora":"Fiat",
  //     "ano":1999,
  //     "cor": "Prata",
  //     "estoque": 7,
  //     "link_img":""
  //   },
  //   {
  //     "id":3,
  //     "modelo":"Ka",
  //     "montadora":"Ford",
  //     "ano":1989,
  //     "cor": "Vermelho",
  //     "estoque": 2,
  //     "link_img":""
  //   }
  // ];

  return (
    <div>
      <HeaderComponent titulo="Loja de Carros do Cristiano"></HeaderComponent>
      <FiltrosComponent></FiltrosComponent>
      <ListaCarrosComponent lista={carrosJson.carros}></ListaCarrosComponent>
    </div>
  )
}

export default PageMain