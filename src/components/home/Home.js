import React from 'react'
import Experience from './experience/Experience'
import Highlights from './highlights/Highlights'
import './home.css'
import Intro from './intro/Intro'

const Home = () => {
    return (
        <div className='home-container'>
            <Intro></Intro>
            <Highlights></Highlights>
            <Experience></Experience>
        </div>
    )
}

export default Home
