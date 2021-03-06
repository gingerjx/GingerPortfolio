import React from 'react'
import './intro_big.css'
import './intro_small.css'
import ScrollIcon from './assets/scroll-icon.svg'
import Texts from '../../../utils/Texts'

const Intro = ( { scrollTo, cid }) => {
    const scrollText = 'Scroll down'

    return (
        <div id={cid} className='intro-container'>
            <p className='intro-hi'>{Texts.home.intro.hi}</p>
            <p className='intro-name'>{Texts.home.intro.name}</p>
            <p className='intro-tags'>{Texts.home.intro.tags}</p>
            <p className='intro-description'>{Texts.home.intro.description}</p>
            <img onClick={scrollToSection} className="clickable intro-scroll" src={ScrollIcon} alt="Scroll icon"></img>
            <p onClick={scrollToSection} className='clickable intro-scroll-text'>{scrollText}</p>
        </div>
    )

    function scrollToSection() {
        document.getElementById(scrollTo).scrollIntoView({behavior: "smooth"})
    }
}

export default Intro
