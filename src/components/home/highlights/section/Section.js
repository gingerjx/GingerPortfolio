import React from 'react'
import Description from './description/Description'
import './section_big.css'
import './section_small.css'

const Section = ({ data }) => {
    const descriptionData = {
        description : data.description,
        tags : data.tags,
        path : data.path
    }
    
    return (
        <div className="section-container">
            <img className="section-icon" src={data.icon} alt={data.title} />
            <p className="section-title">{data.title}</p>
            <Description data={descriptionData}/>
        </div>
    )
}

export default Section
