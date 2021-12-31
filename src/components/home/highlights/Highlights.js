import React from 'react'
import './highlights.css'
import Section from './section/Section'
import WebDevIcon from './assets/web_developement.svg'
import MLIcon from './assets/machine_learning.svg'
import OSIcon from './assets/operating_systems.svg'

const Highlights = () => {
    const WebDev = {
        icon : WebDevIcon,
        title : "WEB DEVELOPEMENT",
        description : "<b>Test</b> shittt something even longer but eh what can we say mamam safsa s gs fasfaf asf a sa as fa asf",
        tags : "#WebDev #Scraping #Spring #Angular #Java"
    }
    const ML = {
        icon : MLIcon,
        title : "MACHINE LEARNING",
        description : "<b>Test</b> shittt",
        tags : "#ML #Keras #Python #Numpy"
    }
    const OS = {
        icon : OSIcon,
        title : "OPERATING SYSTEMS",
        description : "<b>Test</b> shittt",
        tags : "#OS #Memory #Management #C #Multithreading"
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
