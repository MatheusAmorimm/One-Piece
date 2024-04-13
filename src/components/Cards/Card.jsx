import React from 'react'
import ButtonList from '../ButtonList/ButtonList'
// import logo from '../../assets/images/one-piece-logo'

export default function Card({image, name, personDescription}) {
    
  return (
    <main className='characters'>
    <div className='character'>
      <img className='person-image' src={image} alt={`${name} picture`} />
      <div className='content'>
        <i className='logo'></i>
        <h2 className='person-name'>{name}</h2>
        <p className='descricao'>{personDescription}</p>
      </div>
    </div>
    <ButtonList />
    </main>
  )
}
