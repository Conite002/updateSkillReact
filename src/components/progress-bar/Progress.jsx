import React from 'react'
import './Progress.scss'


const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
        <div className='text'>
            <span> {props.title} </span>
            <span> {props.description} </span>
        </div>
        <br />
        <div className={`row-border`}>
            <div className={`border-${props.color}`}>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default ProgressBar