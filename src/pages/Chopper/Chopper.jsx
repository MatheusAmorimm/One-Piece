import React from 'react'
import Card from '../../components/Cards/CardTripulation'
import ChopperPicture from '../../assets/images/character-image/chopper-picture.png'

export default function Chopper() {
  return (
    <Card
    name = "Chopper"
    image = {ChopperPicture}
    personDescription = "Esta pequena rena ganhou a habilidade de mudar sua forma e de pensar como humanos após comer a fruta Hito Hito no Mi. Chopper é um valioso membro da tripulação dos Piratas do Chapéu de Palha, atuando como médico da tripulação."/>
  )
}
