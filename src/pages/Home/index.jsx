import './style.css';

import { Card } from '../../components/Card';

export function Home() {

  return (
    <div className='container'>
      <h1>Lista de presenca</h1>
      <input type="text" placeholder="digite um nome"/>
      <button type="button">Adicionar</button>

      <Card/>
      <Card/>
      <Card/>
      
    </div>
  )
}


export default Card