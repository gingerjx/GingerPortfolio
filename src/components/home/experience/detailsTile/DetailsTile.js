import React from 'react'
import './detailsTile_big.css'
import './detailsTile_small.css'

const DetailsTile = ({ tile }) => {
    return (
        <div className='home-experience-details-container'>
            <p className='home-experience-details-position'>{tile.position}</p>
            <p className='home-experience-details-location'>{tile.location}</p> 
            <p className='home-experience-details-description'>{tile.description}</p> 
            <div className='home-experience-details-date-wrapper'>
                <p>{tile.dates}</p>
            </div>
        </div>
    )
}

export default DetailsTile
