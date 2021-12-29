import React from 'react'
import './nav.css'

const Nav = () => {
    const intro = 'Intro'
    const highlights = 'Highlights'
    const experience = 'Experience'
    const more = 'More'

    return (
        <div className='nav-container'>
            <div className="nav-vertical-line"></div>
            <p className="clickable nav-element nav-element-active">{intro}</p>
            <p className="clickable nav-element nav-element-disabled">{highlights}</p>
            <p className="clickable nav-element nav-element-disabled">{experience}</p>
            <p className="clickable nav-element nav-element-disabled">{more}</p>
        </div>
    )
}


export default Nav
