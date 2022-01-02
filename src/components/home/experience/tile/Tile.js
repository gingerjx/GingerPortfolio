import React from 'react'
import './tile.css'

const Tile = ({ data }) => {
    const styleActive = { background : 'linear-gradient(0deg, rgba(42,36,56,1) 10%, rgba(194,109,48,1) 100%)' }
    const styleDisabled = { background : 'linear-gradient(0deg, rgba(42,36,56,1) 0%, rgba(42,36,56,0) 100%)' }
    const background = data.active ? styleActive : styleDisabled;

    return (
        <div onClick={data.clickEvent} style={background} className=' clickable home-experience-tile-container'>
            <p className='home-experience-tile-position'>{data.position}</p>
            <p className='home-experience-tile-location'>{data.location}</p> 
            <div className='home-experience-tile-date-wrapper'>
                <p className='home-experience-tile-dates'>{data.dates}</p>
            </div>        
        </div>
    )
}

export default Tile
