import React from 'react';
import './machineLearning_big.css'
import './machineLearning_small.css'
import Texts from '../../utils/Texts'
import ChapterTitle from '../common/chapterTitle/ChapterTitle';
import BackButton from '../common/backButton/BackButton'
import Plots from './plot/Plots';
import gif from './assets/animation.gif'

const MachineLearning = () => {
  return <div className='ml-container'>
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
                <ul>
                  <li>{Texts.ml.smartSnakePoint1}</li>
                  <li>{Texts.ml.smartSnakePoint2}</li>
                  <li>{Texts.ml.smartSnakePoint3}</li>
                  <li>{Texts.ml.smartSnakePoint4}</li>
                  <li>{Texts.ml.smartSnakePoint5}</li>
                  <li>{Texts.ml.smartSnakePoint6}</li>
                  <li>{Texts.ml.smartSnakePoint7}</li>
                </ul>
              </div>
              <ChapterTitle text={Texts.ml.smartSnake}/>
            </div>
            <div className='chapter'>
              <div className='content'>
                <p>{Texts.ml.presentationText}</p>
                <img src={gif} alt='Snake gif'></img>
                <p>
                  {Texts.ml.smartSnakeDetails} 
                  <a href={Texts.ml.smartSnakeLink} target="_blank" rel="noreferrer">
                    <b>Github</b>
                  </a>
                  .
                </p>
              </div>
              <ChapterTitle text={Texts.ml.presentation}/>
            </div>
          </div>
};

export default MachineLearning;
