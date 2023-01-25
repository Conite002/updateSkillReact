import React from 'react'
import "./CardsRight.scss"

const CardsRight = (props) => {
  return (
    <div className={`card-right color-${props.color}`}>
        <div className={`icon-${props.color}`}>{props.icon} </div>
        <p className='title'>{props.title} </p>
        <p className='number'>{props.number} </p>
        <div style={{width : "100px", padding : "1px"}}><span className='description'>{props.description}</span></div>
    </div>
  )
}

export default CardsRight