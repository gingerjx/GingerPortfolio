import React from 'react'
import './detailsTile.css'
import DetailsButton from '../../../common/details-button/DetailsButton'

const DetailsTile = ({ tile }) => {
    return (
        <div className='home-experience-details-container'>
            <p className='home-experience-details-position'>{tile.position}</p>
            <p className='home-experience-details-location'>{tile.location}</p> 
            <p className='home-experience-details-description'>{tile.description}</p> 
            <DetailsButton isOrange={false}/>
            <div className='home-experience-details-date-wrapper'>
                <p>{tile.dates}</p>
            </div>
        </div>
    )
}

export default DetailsTile
