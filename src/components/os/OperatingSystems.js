import React from 'react';
import './operatingSystems.css'
import Texts from '../../utils/Texts'
import ChapterTitle from '../common/chapterTitle/ChapterTitle';
import BackButton from '../common/backButton/BackButton'
import Ram from './assets/ram.svg'

const OperatingSystems = () => {
  return <div className='os-container'>
            <BackButton></BackButton>
            <h1>{Texts.os.title}</h1>
            <div className='chapter'>
              <div className='content'>
                <p>{Texts.os.aFewWordsText1}</p>
              </div>
              <ChapterTitle text={Texts.os.aFewWords}/>
            </div>
            <div className='chapter'>
              <div className='content'>
                <div className='mm'>
                  <img src={Ram} />
                  <div>
                    <p dangerouslySetInnerHTML={{ __html: Texts.os.memoryManagementText}}></p>
                    <p>
                      {Texts.os.memoryManagementDetails} 
                      <a href={Texts.os.memoryManagementLink} target="_blank" rel="noreferrer">
                        <b>Github</b>
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <ChapterTitle text={Texts.os.memoryManagement}/>
            </div>
          </div>
};

export default OperatingSystems;
