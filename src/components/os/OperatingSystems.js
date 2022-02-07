import React from 'react';
import './operatingSystems.css'
import Texts from '../../utils/Texts'
import ChapterTitle from '../common/chapterTitle/ChapterTitle';
import BackButton from '../common/backButton/BackButton'
import Ram from './assets/ram.svg'
import IpcView from './assets/ipc_color.png'
import Disk from './assets/disk.svg'

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
              <div className='content-horizontal'>
                <img src={Ram} alt='Ram' />
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
              <ChapterTitle text={Texts.os.memoryManagement}/>
            </div>
            <div className='chapter'>
              <div className='content'>
                <p>{Texts.os.ipcText1}</p>
                <img src={IpcView} alt='Ipc View' />
                <p>{Texts.os.ipcText2}</p>
                <p>
                  {Texts.os.ipcDetails} 
                  <a href={Texts.os.ipcLink} target="_blank" rel="noreferrer">
                    <b>Github</b>
                  </a>
                  .
                </p>
              </div>
              <ChapterTitle text={Texts.os.ipc}/>
            </div>
            <div className='chapter'>
              <div className='content-horizontal'>
                <img src={Disk} alt='Disk' />
                <div>
                  <p>{Texts.os.fat12Text}</p>
                  <p>
                    {Texts.os.fat12Details} 
                    <a href={Texts.os.fat12Link} target="_blank" rel="noreferrer">
                      <b>Github</b>
                    </a>
                    .
                  </p>
                </div>
              </div>
              <ChapterTitle text={Texts.os.fat12}/>
            </div>
          </div>
};

export default OperatingSystems;
