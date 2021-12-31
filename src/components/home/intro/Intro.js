import React from 'react'
import './intro.css'
import ScrollIcon from './assets/scroll-icon.svg'

const Intro = () => {
    const hi = 'HELLO THERE, I\'M'
    const name = 'Piotr Kalota'
    const tags = 'Developer · Computer Science Student'
    const description = 'If you are looking for a creative coder with wide programming skills, you are in the right place! Check out what I have for you below 🦊'
    const scroll = 'Scroll down'

    return (
        <div className='intro-container'>
            <p className='intro-hi'>{hi}</p>
            <p className='intro-name'>{name}</p>
            <p className='intro-tags'>{tags}</p>
            <p className='intro-description'>{description}</p>
            <img className="clickable intro-scroll" src={ScrollIcon} alt="Scroll icon"></img>
            <p className='clickable intro-scroll-text'>{scroll}</p>
        </div>
    )
}

export default Intro
