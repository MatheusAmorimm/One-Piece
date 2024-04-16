import React from 'react'
import Card from '../../components/Cards/Card'
import picture from '../../assets/images/character-image/nami-picture.png'

export default function Nami() {
  return (
    <Card
    name="Nami" 
    image = {picture}
    personDescription = "Orfã de guerra, ainda criança Nami foi adotada por Bell-mère, uma mulher da Marinha. Enquanto crescia ao lado de sua irmã adotiva Nojiko, Nami já demonstrava sua paixão por desenhar mapas, sonhando em um dia fazer o mapa de todo o mundo"/>
  )
}
