import React from 'react'
import './backButton_big.css'
import './backButton_small.css'
import arrow from './assets/arrow.svg'
import { Link } from 'react-router-dom'

const DetailsButton = () => {
    return (
        <Link 
            to={'/GingerPortfolio'}
            className='clickable'>
                <img class='back-button' src={arrow} alt="Back Button"></img>
        </Link>
    )
}

export default DetailsButton
