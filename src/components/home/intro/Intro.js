import React from 'react'
import './intro.css'
import ScrollIcon from './assets/scroll-icon.svg'
import Texts from '../../../utils/Texts'

const Intro = ( { cid }) => {
    const scrollText = 'Scroll down'

    return (
        <div id={cid} className='intro-container'>
            <p className='intro-hi'>{Texts.home.intro.hi}</p>
            <p className='intro-name'>{Texts.home.intro.name}</p>
            <p className='intro-tags'>{Texts.home.intro.tags}</p>
            <p className='intro-description'>{Texts.home.intro.description}</p>
            <img className="clickable intro-scroll" src={ScrollIcon} alt="Scroll icon"></img>
            <p className='clickable intro-scroll-text'>{scrollText}</p>
        </div>
    )
}

export default Intro
