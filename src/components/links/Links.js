import React, { useState } from 'react'
import './links.css'
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
        <div className='container'>
            <p className={`copyMessage ${cpyMsgVisibility ? "visible" : "hidden"}`}>Mail copied!</p>
            <p className="clickable" onClick={copyGmailToClopboard}>
                <img className='icon' src={gmailIcon} alt="Gmail logo"></img>
            </p>
            <a href={githubLink} rel="noreferrer" target="_blank">
                <img className='icon' src={githubIcon} alt="Github logo"></img>
            </a>
            <a href={linkedInLink} rel="noreferrer" target="_blank">
                <img className='icon' src={linkedinIcon} alt="LinkedIn logo"></img>
            </a>
            <div className="vertical-line"></div>
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
