import React from 'react'

export default function Button({alternative, image}) {
  
  return (
    <li>
    <button>
        <img alt={alternative} src={image}/>
    </button>
    </li>
  )
}
