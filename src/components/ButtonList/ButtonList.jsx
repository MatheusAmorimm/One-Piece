import { NavLink } from 'react-router-dom'
import React from 'react'
import './listStyle.css'
import Button from '../Button/Button'
import luffyPicture from '../../assets/images/tripulacao-luffy.png'
import chopperPicture from '../../assets/images/tripulacao-chopper.png'
import namiPicture from '../../assets/images/tripulacao-nami.png'
import sanjiPicture from '../../assets/images/tripulacao-sanji.png'
import zoroPicture from '../../assets/images/tripulacao-zoro.png'


export default function ButtonList() {


  return (
    <ul>
      <NavLink to="/chopper">
        <Button  alternative = {`Chopper tripulation picture`} image =  {chopperPicture}/>
      </NavLink>
      
      <NavLink to="/zoro">
        <Button  alternative = {`Zoro tripulation picture`} image = {zoroPicture}/>
      </NavLink>

      <NavLink to="/">
        <Button  alternative = {`Luffy tripulation picture`} image = {luffyPicture}/>
      </NavLink>

      <NavLink to="/nami">
        <Button  alternative = {`Nami tripulation picture`} image = {namiPicture}/>
      </NavLink>

      <NavLink to="/sanji">
        <Button  alternative = {`Sanji tripulation picture`} image = {sanjiPicture}/>
      </NavLink>
    </ul>
  )
}
