import React from 'react'
import './more.css'
import Texts from '../../../utils/Texts'
import NeuralIcon from './assets/connection.svg'
import BeChefIcon from './assets/chef.svg'
import LittleChatIcon from './assets/chat.svg'
import MazeSolving from './assets/maze.svg'
import RunIcon from './assets/running.svg'
import AlertMeIcon from './assets/notification.svg'
import Tile from './tile/Tile'
import CV from './res/Piotr_Kalota_CV.pdf'

const More = () => {
    const neural = {
        icon : NeuralIcon,
        ...Texts.home.more.neural
    }
    const beChef = {
        icon : BeChefIcon,
        ...Texts.home.more.beChef
    }
    const littleChat = {
        icon : LittleChatIcon,
        ...Texts.home.more.littleChat
    }
    const mazeSolving = {
        icon : MazeSolving,
        ...Texts.home.more.mazeSolving
    }
    const runStudentRun = {
        icon : RunIcon,
        ...Texts.home.more.runStudentRun
    }
    const alertMe = {
        icon : AlertMeIcon,
        ...Texts.home.more.alertMe
    }

    return (
        <div className='home-more-container'>
            <div className='home-more-gen-container'>
                <p>{Texts.home.more.generalOne}</p>
                <p>{Texts.home.more.generalTwo}</p>
                <a href={ CV }>Resume</a>
            </div>
            <div className='home-more-projects-container'>
                <Tile data={neural}/>
                <Tile data={beChef}/>
                <Tile data={littleChat}/>
                <Tile data={mazeSolving}/>
                <Tile data={runStudentRun}/>
                <Tile data={alertMe}/>
            </div>
        </div>
    )
}

export default More
