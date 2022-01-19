import React from 'react'
import './detailsButton.css'
import ArrowOrange from './assets/orange-arrow.svg'
import ArrowBlack from './assets/black-arrow.svg'
import { Link } from 'react-router-dom'

const DetailsButton = ({ path, isOrange }) => {
    const arrow = isOrange ? ArrowOrange : ArrowBlack
    const color = isOrange ? '#C26D30' : '#2A2438'

    return (
        <Link 
            to={path === undefined ? '/' : path}
            className='clickable details-link'
            style={ { color : color } }>   
                Details 
                <img src={arrow} alt="Right arrow"></img>
        </Link>
    )
}

export default DetailsButton
