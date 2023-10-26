import React from 'react'
import './more_big.css'
import './more_small.css'
import Texts from '../../../utils/Texts'
import NeuralIcon from './assets/connection.svg'
import MoveItIcon from './assets/box.svg'
import BeChefIcon from './assets/chef.svg'
import LittleChatIcon from './assets/chat.svg'
import MazeSolving from './assets/maze.svg'
import RunIcon from './assets/running.svg'
import AlertMeIcon from './assets/notification.svg'
import Tile from './tile/Tile'
import CV from './res/Piotr_Kalota_CV.pdf'

const More = ( { cid } ) => {
    const neural = {
        icon : NeuralIcon,
        ...Texts.home.more.neural
    }
    const moveIt = {
        icon : MoveItIcon,
        ...Texts.home.more.moveIt
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
        <div id={cid} className='home-more-container'>
            <h1 className='home-more-title'>More</h1>
            <div className='home-more-gen-container'>
                <p>{Texts.home.more.generalOne}</p>
                <p>{Texts.home.more.generalTwo}</p>
                <a href={ CV }>Resume</a>
            </div>
            <div className='home-more-projects-container'>
                <Tile data={neural}/>
                <Tile data={moveIt}/>
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
