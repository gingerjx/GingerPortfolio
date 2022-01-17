import React from 'react'
import Nav from './nav/Nav';
import Experience from './experience/Experience'
import Highlights from './highlights/Highlights'
import './home.css'
import Intro from './intro/Intro'
import More from './more/More'

const Home = () => {
    const introId = 'intro'
    const highlightsId = 'highlights'
    const experienceId = 'experience'
    const moreId = 'more'

    return (
        <div className='home-container'>
            <Nav introId={introId} highlightsId={highlightsId} experienceId={experienceId} moreId={moreId}></Nav>
            <Intro cid={introId}/>
            <Highlights cid={highlightsId}/>
            <Experience cid={experienceId}/>
            <More cid={moreId}/>
        </div>
    )
}

export default Home
