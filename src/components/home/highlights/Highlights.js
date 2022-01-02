import React from 'react'
import './highlights.css'
import Section from './section/Section'
import WebDevIcon from './assets/web_developement.svg'
import MLIcon from './assets/machine_learning.svg'
import OSIcon from './assets/operating_systems.svg'
import Texts from '../../../utils/Texts'

const Highlights = () => {
    const WebDev = {
        icon : WebDevIcon,
        title : Texts.home.highlights.webdev.title,
        description : Texts.home.highlights.webdev.content,
        tags : Texts.home.highlights.webdev.tags
    }
    const ML = {
        icon : MLIcon,
        title : Texts.home.highlights.ml.title,
        description : Texts.home.highlights.ml.content,
        tags : Texts.home.highlights.ml.tags
    }
    const OS = {
        icon : OSIcon,
        title : Texts.home.highlights.os.title,
        description : Texts.home.highlights.os.content,
        tags : Texts.home.highlights.os.tags
    }
    
    return (
        <div className='highlights-container'>
            <Section data={WebDev}/>
            <Section addMargin={true} data={ML}/>
            <Section data={OS}/>
        </div>
    )
}

export default Highlights
