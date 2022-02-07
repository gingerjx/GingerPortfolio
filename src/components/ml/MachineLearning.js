import React from 'react';
import './machineLearning.css'
import Texts from '../../utils/Texts'
import ChapterTitle from '../common/chapterTitle/ChapterTitle';
import BackButton from '../common/backButton/BackButton'
import Plots from './plot/Plots';

const MachineLearning = () => {
  return <div className='cheaclo-container'>
            <BackButton></BackButton>
            <h1>{Texts.ml.title}</h1>
            <div className='chapter'>
              <div className='content'>
                <p>{Texts.ml.aFewWordsText1}</p>
                <p dangerouslySetInnerHTML={{ __html: Texts.ml.aFewWordsText2}}></p>
              </div>
              <ChapterTitle text={Texts.ml.aFewWords}/>
            </div>
            <div className='chapter'>
              <div className='content'>
                <p>{Texts.ml.neuralNetworkText}</p>
                <Plots />
                <p>
                  {Texts.ml.neuralNetworkDetails} 
                  <a href={Texts.ml.neuralNetworkLink} target="_blank" rel="noreferrer">
                    <b>Github</b>
                  </a>
                  .
                </p>
              </div>
              <ChapterTitle text={Texts.ml.neuralNetwork}/>
            </div>
            <div className='chapter'>
              <div className='content'>
                <p dangerouslySetInnerHTML={{ __html: Texts.ml.smartSnakeText1}}></p>
                <p>{Texts.ml.smartSnakeText2}</p>
              </div>
              <ChapterTitle text={Texts.ml.smartSnake}/>
            </div>
          </div>
};

export default MachineLearning;
