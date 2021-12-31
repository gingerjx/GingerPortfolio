import React from 'react'
import './detailsButton.css'
import ArrowOrange from './assets/orange-arrow.svg'
import ArrowBlack from './assets/black-arrow.svg'

const DetailsButton = ({ isOrange }) => {
    const arrow = isOrange ? ArrowOrange : ArrowBlack
    const color = isOrange ? '#C26D30' : '#000000'
    
    return (
        <button 
            className='clickable details-button'
            style={ { color : color } }>
            Details 
            <img src={arrow} alt="Right arrow"></img>
        </button>
    )
}

export default DetailsButton
