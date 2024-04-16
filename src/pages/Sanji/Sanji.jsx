import React from 'react'
import picture from '../../assets/images/character-image/sanji-picture.png'
import Card from '../../components/Cards/Card'

export default function Sanji() {
  return (
    <Card 
    name="Sanji" 
    image = {picture}
    personDescription = "Também conhecido como Perna Negra Sanji, este pirata foi o quinto a integrar a tripulação de Luffy. Suas ações como pirata lhe renderam a terceira maior recompensa entre os membros do Chapéu de Palha, além de atuar como cozinheiro oficial do grupo."/>
  )
}
