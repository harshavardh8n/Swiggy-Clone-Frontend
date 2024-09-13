import React from 'react'
import './card.css'

function Card(props) {
  return (

    <div className='card'>
        <div className="icard">
          <img src={props.imgsrc} alt="" class="cardimage"/>
          <div className="imagename">
              <h2>60% OFF UPTO ₹120</h2>

            </div>
        </div>
        <div className="idesc">
        <div className="cardname">
            {props.name}
          </div>
          <div className="cardrate">
            {props.rate}
          </div>
          <div className="cardtype">
            {props.type}
          </div>
          <div className="location">
            {props.loc}
          </div>

        </div>
    </div>
  )
}

export default Card