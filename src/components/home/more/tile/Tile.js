import React from 'react'
import './tile.css'

const Tile = ({ data }) => {
    return (
        <div className='home-more-tile-container'>
            <div className='clickable home-more-tile-title'>
                <img src={data.icon} alt={data.title}/>
                <p>{data.title}</p>
            </div>
            <div className='home-more-desc-title'>{data.description}</div>
        </div>
    )
}

export default Tile