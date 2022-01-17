import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import './nav.css'

const Nav = ( { introId, highlightsId, experienceId, moreId }) => {
    const [intro, setIntro] = useState({
        title: 'Intro',
        active: true,
        id: introId
    })
    const [highlights, setHighlights] = useState({
        title: 'Highlights',
        active: false,
        id: highlightsId
    })
    const [experience, setExperience] = useState({
        title: 'Experience',
        active: false,
        id: experienceId
    })
    const [more, setMore] = useState({
        title: 'More',
        active: false,
        id: moreId
    })

    const standardStyle = 'clickable nav-element';

    return (
        <div className='nav-container'>
            <div className="nav-vertical-line"></div>
            <p onClick={() => activeOnClick(intro, setIntro)} className={`${standardStyle} ${intro.active ? 'nav-element-active' : 'nav-element-disabled'}`}>{intro.title}</p>
            <p onClick={() => activeOnClick(highlights, setHighlights)} className={`${standardStyle} ${highlights.active ? 'nav-element-active' : 'nav-element-disabled'}`}>{highlights.title}</p>
            <p onClick={() => activeOnClick(experience, setExperience)} className={`${standardStyle} ${experience.active ? 'nav-element-active' : 'nav-element-disabled'}`}>{experience.title}</p>
            <p onClick={() => activeOnClick(more, setMore)} className={`${standardStyle} ${more.active ? 'nav-element-active' : 'nav-element-disabled'}`}>{more.title}</p>
        </div>
    )

    function activeOnClick(element, setter) {
        setIntro({...intro, active : false});
        setHighlights({...highlights, active : false});
        setExperience({...experience, active : false});
        setMore({...more, active : false});
        setter({...element, active : true});
        
        document.getElementById(element.id).scrollIntoView({behavior: "smooth"})
    }
}

export default Nav
