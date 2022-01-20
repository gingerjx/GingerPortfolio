import React from 'react';
import './cheaclo.css'
import Texts from '../../utils/Texts'
import ChapterTitle from './chapterTitle/ChapterTitle';

const Cheaclo = () => {
  return <div className='cheaclo-container'>
      <h1>{Texts.cheaclo.title}</h1>
      <div className='chapter'>
        <div className='content'>
          <p>{Texts.cheaclo.aFewWordsText1}</p>
          <p>{Texts.cheaclo.aFewWordsText2}</p>
        </div>
        <ChapterTitle text={Texts.cheaclo.aFewWords}/>
      </div>
  </div>;
};

export default Cheaclo;
