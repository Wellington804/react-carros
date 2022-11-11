import React, { useEffect, useState } from 'react'
import FiltrosComponent from './FiltrosComponent'
import HeaderComponent from './HeaderComponent'
import ListaCarrosComponent from './ListaCarrosComponent'

import carrosJson from '../api/carros.json'
import { getAll } from '../api/ApiService'

function PageMain() {

  const [carrosLista, setCarrosLista] = useState([]);
  
  useEffect(() => {
    async function load(){
      const result = await getAll();
      setCarrosLista(result);
      console.log(result);
    }
  
    load();
  },[]);
  
  return (
    <div>
      <HeaderComponent titulo="Loja de Carros do Cristiano"></HeaderComponent>
      <FiltrosComponent></FiltrosComponent>
      {/* <ListaCarrosComponent lista={carrosJson.carros}></ListaCarrosComponent> */}
      <ListaCarrosComponent lista={carrosLista}></ListaCarrosComponent>
      
    </div>
  )
}

export default PageMain