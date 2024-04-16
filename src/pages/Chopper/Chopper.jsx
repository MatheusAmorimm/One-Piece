import React from 'react'
import Card from '../../components/Cards/Card'
import picture from '../../assets/images/character-image/chopper-picture.png'

export default function Chopper() {
  return (
    <Card
    name = "Chopper"
    image = {picture}
    personDescription = "Esta pequena rena ganhou a habilidade de mudar sua forma e de pensar como humanos após comer a fruta Hito Hito no Mi. Chopper é um valioso membro da tripulação dos Piratas do Chapéu de Palha, atuando como médico da tripulação."/>
  )
}
