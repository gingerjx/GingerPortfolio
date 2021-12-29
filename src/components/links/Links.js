import React from 'react'
import './links.css'
import gmailIcon from './assets/gmail.svg'
import githubIcon from './assets/github.svg'
import linkedinIcon from './assets/linkedin.svg'

const Links = () => {
    const gmailLink = 'piotrkalota99@gmail.com'
    const githubLink = 'https://github.com/gingerjx'
    const linkedInLink = 'https://www.linkedin.com/in/piotrkalota/'

    return (
        <div className='container'>
            <a href={gmailLink} rel="noreferrer" target="_blank">
                <img className='icon' src={gmailIcon} alt="Gmail logo"></img>
            </a>
            <a href={githubLink} rel="noreferrer" target="_blank">
                <img className='icon' src={githubIcon} alt="Github logo"></img>
            </a>
            <a href={linkedInLink} rel="noreferrer" target="_blank">
                <img className='icon' src={linkedinIcon} alt="LinkedIn logo"></img>
            </a>
            <div class="vertical-line"></div>
        </div>
    )
}

export default Links
