import React from 'react'
import Nav from './nav/Nav';
import Experience from './experience/Experience'
import Highlights from './highlights/Highlights'
import './home.css'
import Intro from './intro/Intro'
import More from './more/More'

const Home = () => {
    return (
        <div className='home-container'>
            <Nav></Nav>
            <Intro/>
            <Highlights/>
            <Experience/>
            <More/>
        </div>
    )
}

export default Home
