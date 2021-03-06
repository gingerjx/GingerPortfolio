import React from 'react'
import './tile_big.css'
import './tile_small.css'

const Tile = ({ data }) => {
    return (
        <div className='home-more-tile-container'>
            <div className='clickable home-more-tile-title'>
                <img src={data.icon} alt={data.title}/>
                <a href={data.url} target="_blank" rel="noreferrer">
                    <p>{data.title}</p>
                </a>
            </div>
            <div className='home-more-desc-title'>{data.description}</div>
        </div>
    )
}

export default Tile