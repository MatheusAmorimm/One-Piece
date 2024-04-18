import React from 'react'
import Card from '../../components/Cards/CardTripulation'
import NamiPicture from '../../assets/images/character-image/nami-picture.png'

export default function Nami() {
  return (
    <Card
    name="Nami" 
    image = {NamiPicture}
    personDescription = "Orfã de guerra, ainda criança Nami foi adotada por Bell-mère, uma mulher da Marinha. Enquanto crescia ao lado de sua irmã adotiva Nojiko, Nami já demonstrava sua paixão por desenhar mapas, sonhando em um dia fazer o mapa de todo o mundo"/>
  )
}
