import React from 'react'
import '../Button/buttonStyle.css'


export default function Button({alternative, image}) {
  
  return (
    <li>
    <button>
        <img alt={alternative} src={image}/>
    </button>
    </li>
  )
}
