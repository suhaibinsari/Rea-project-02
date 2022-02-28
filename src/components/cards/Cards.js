import React from 'react'
import "../cards/Cards.css"

export default function Cards(props) {
  return (
    <div>
      <div id='con3row2card1'  >
        <img src={props.src} alt="" />
        <h5 id='con3row2p1'>{props.img}{props.title}</h5>
        <p id='con3row2p2'>{props.para}</p>
      </div>
    </div>
  )
}
