import React, { useState } from 'react'
import './links_big.css'
import './links_small.css'
import gmailIcon from './assets/gmail.svg'
import githubIcon from './assets/github.svg'
import linkedinIcon from './assets/linkedin.svg'

const Links = () => {
    const gmailLink = 'piotrkalota99@gmail.com'
    const githubLink = 'https://github.com/gingerjx'
    const linkedInLink = 'https://www.linkedin.com/in/piotrkalota/'
    const timeout = 1000
    const [cpyMsgVisibility, setCpyMsgVisibility] = useState(false)

    return (
        <div className='links-container'>
            <p className={`links-copyMessage ${cpyMsgVisibility ? "links-visible" : "links-hidden"}`}>Mail copied!</p>
            <p className="clickable" onClick={copyGmailToClopboard}>
                <img className='links-icon' src={gmailIcon} alt="Gmail logo"></img>
            </p>
            <a href={githubLink} rel="noreferrer" target="_blank">
                <img className='links-icon' src={githubIcon} alt="Github logo"></img>
            </a>
            <a href={linkedInLink} rel="noreferrer" target="_blank">
                <img className='links-icon' src={linkedinIcon} alt="LinkedIn logo"></img>
            </a>
            <div className="links-vertical-line"></div>
        </div>
    )

    function copyGmailToClopboard() {
        setCpyMsgVisibility(true)
        setTimeout(() => {
            setCpyMsgVisibility(false)
        }, timeout)
        navigator.clipboard.writeText(gmailLink)
    }
}

export default Links
