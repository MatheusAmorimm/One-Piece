import React from 'react'
import Card from '../../components/Cards/CardTripulation'
import ZoroPicture from '../../assets/images/character-image/zoro-picture.png'

export default function Zoro() {
  return (
    <Card  
    name= "Zoro"
    image = {ZoroPicture}
    personDescription = "Primeiro pirata (segundo membro se contarmos com Luffy) a se juntar à tripulação de Piratas do Chapéu de Palha, Zoro aceitou o convite de Luffy após o capitão salvar sua vida."/>
  )
}
