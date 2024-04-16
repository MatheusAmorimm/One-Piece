import React from 'react'
import Card from '../../components/Cards/Card'
import picture from '../../assets/images/character-image/luffy-picture.png'


export default function Luffy() {
  return (
    <>
    <Card
    name="Monkey D. Luffy" 
    image = {picture}
    personDescription = "Luffy do Chapéu de Palha, como ficou conhecido, é o protagonista do anime, e o fundador e capitão da tripulação Piratas do Chapéu de Palha. Desde muito jovem, tem como seu maior sonho um dia encontrar o lendário tesouro de Gol D. Roger, para se tornar o novo Rei dos Piratas."/>
    </>
  )
}
