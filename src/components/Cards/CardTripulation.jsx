import React from 'react'
import ButtonList from '../ButtonList/ButtonList'
import './cardStyle.css'

export default function Card({image, name, personDescription}) {
    
  return (
    <main className='characters'>
    <div className='character'>
      <img className='character-image' src={image} alt={`${name}`} />
      <div className='content'>
        <i className='logo'></i>
        <h2 className='character-name'>{name}</h2>
        <p className='descricao'>{personDescription}</p>
      </div>
    </div>
    <ButtonList />
    </main>
  )
}
