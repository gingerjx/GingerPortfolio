import React from 'react'
import Description from './description/Description'
import './section.css'

const Section = ({ addMargin, data}) => {
    const descriptionData = {
        description : data.description,
        tags : data.tags
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
