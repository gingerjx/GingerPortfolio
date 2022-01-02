import React from 'react'
import './tile.css'

const Tile = ({ data }) => {
    return (
        <div className='home-experience-tile-container'>
            <p className='home-experience-tile-position'>{data.position}</p>
            <p className='home-experience-tile-location'>{data.location}</p>         
            <p className='home-experience-tile-date'>{data.dates}</p>
        </div>
    )
}

export default Tile
