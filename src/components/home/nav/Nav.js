import React, {useState} from 'react'
import './nav_big.css'
import './nav_small.css'

const Nav = ( { introId, highlightsId, experienceId, moreId }) => {
    const [intro, setIntro] = useState({
        title: 'Intro',
        active: true,
        id: introId,
        yPos: 0
    })
    const [highlights, setHighlights] = useState({
        title: 'Highlights',
        active: false,
        id: highlightsId,
        yPos: 0
    })
    const [experience, setExperience] = useState({
        title: 'Experience',
        active: false,
        id: experienceId,
        yPos: 0
    })
    const [more, setMore] = useState({
        title: 'More',
        active: false,
        id: moreId,
        yPos: 0
    })

    React.useEffect(() => {
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

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
        disableAll();
        setter({...element, active : true});
        
        document.getElementById(element.id).scrollIntoView({behavior: "smooth"})
    }
    
    function disableAll() {
        setIntro({...intro, active : false});
        setHighlights({...highlights, active : false});
        setExperience({...experience, active : false});
        setMore({...more, active : false});
    }

    function onScroll() {
        const introElement = document.getElementById(intro.id)
        const highlightsElement = document.getElementById(highlights.id)
        const experienceElement = document.getElementById(experience.id)
        const moreElement = document.getElementById(more.id)

        const introPositionY = Math.abs(introElement.getBoundingClientRect().top);
        const highlightsPositionY = Math.abs(highlightsElement.getBoundingClientRect().top);
        const experiencePositionY = Math.abs(experienceElement.getBoundingClientRect().top);
        const morePositionY = Math.abs(moreElement.getBoundingClientRect().top);

        const min = Math.min(introPositionY, highlightsPositionY, experiencePositionY, morePositionY)
        
        disableAll();
        if (introPositionY === min) {
            setIntro({...intro, active : true})
        } else if (highlightsPositionY === min) {
            setHighlights({...highlights, active : true})
        } else if (experiencePositionY === min) {
            setExperience({...experience, active : true})
        } else if (morePositionY === min) {
            setMore({...more, active : true})
        }
    }
}

export default Nav
