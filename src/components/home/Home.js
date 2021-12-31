import React from 'react'
import Highlights from './highlights/Highlights'
import './home.css'
import Intro from './intro/Intro'

const Home = () => {
    return (
        <div className='home-container'>
            <Intro></Intro>
            <Highlights></Highlights>
        </div>
    )
}

export default Home
