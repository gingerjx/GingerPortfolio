import React from 'react'
import Experience from './experience/Experience'
import Highlights from './highlights/Highlights'
import './home.css'
import Intro from './intro/Intro'
import More from './more/More'

const Home = () => {
    return (
        <div className='home-container'>
            <Intro/>
            <Highlights/>
            <Experience/>
            <More/>
        </div>
    )
}

export default Home
