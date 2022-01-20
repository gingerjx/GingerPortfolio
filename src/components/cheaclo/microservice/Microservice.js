import React from 'react';
import './microservice.css'
import Texts from '../../../utils/Texts'
import icon from '../assets/crawler.svg'

const Microservice = ({ hrefTo, icon, title, description, tags }) => {  
    return <div className='cheaclo-microservice-container'>
                <a className='icon' href={hrefTo} target="_blank" rel="noreferrer">
                    <img src={icon} alt="Microservice icon"/>
                    <p>{title}</p>
                </a>
                <div className='content'>
                    <p dangerouslySetInnerHTML={{ __html: description}}></p>
                    <tbody className='tags'>
                        {tags.map((tag, i) => <img src={tag} alt="Microservice icon"/>)}
                    </tbody>
                </div>
            </div>;
};

export default Microservice;
