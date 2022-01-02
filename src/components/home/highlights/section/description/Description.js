import React from 'react'
import './description.css'
import DetailsButton from '../../../../common/details-button/DetailsButton'

const Description = ({ data }) => {
    return (
        <div className='section-desc-container'>
            <p className='section-desc-text' dangerouslySetInnerHTML={{ __html: data.description }}></p>
            <div className='section-desc-button-wrapper'>
                <DetailsButton isOrange={true}/>
            </div>
            <div className='section-desc-tags-wrapper'>
                <p className='section-desc-tags'>{data.tags}</p>
            </div>
        </div>
    )
}

export default Description
