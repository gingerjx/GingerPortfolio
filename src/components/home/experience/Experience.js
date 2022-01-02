import React from 'react'
import './experience.css'
import Tile from './tile/Tile'
import Texts from '../../../utils/Texts'

const Experience = () => {
    return (
        <div className='home-experience-container'>
            <Tile data={Texts.home.experience.bachelor}></Tile>            
            <Tile data={Texts.home.experience.samsung}></Tile>  
            <Tile data={Texts.home.experience.iLab}></Tile>
            <div style={{ 
                backgroundColor : 'red', 
                gridRow : '1 / span 2',
                gridColumn : '4' }}>asfasf</div>  
            <Tile data={Texts.home.experience.sollers}></Tile>  
            <Tile data={Texts.home.experience.pwc}></Tile>  
            <Tile data={Texts.home.experience.masters}></Tile>  
        </div>
    )
}

export default Experience
