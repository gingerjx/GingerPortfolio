import React from 'react';
import './cheaclo.css'
import Texts from '../../utils/Texts'
import ChapterTitle from '../common/chapterTitle/ChapterTitle';
import Microservice from './microservice/Microservice';

import javaIcon from './assets/java.svg'
import springIcon from './assets/spring.png'
import seleniumIcon from './assets/selenium.png'
import postgresIcon from './assets/postgresql.svg'
import angularIcon from './assets/angular.png'
import typescriptIcon from './assets/typescript.png'
import crawlerIcon from './assets/crawler.svg'

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
            <div className='chapter'>
              <div className='content'>
                <p dangerouslySetInnerHTML={{ __html: Texts.cheaclo.technologyText}}></p>
                <Microservice 
                  hrefTo={Texts.cheaclo.webScraperLink}
                  icon={crawlerIcon}
                  title={Texts.cheaclo.webScraper}
                  description={Texts.cheaclo.webScraperText}
                  tags={[seleniumIcon, springIcon, javaIcon]}/>
                {/* <Microservice />
                <Microservice /> */}
              </div>
              <ChapterTitle text={Texts.cheaclo.technology}/>
            </div>
          </div>
};

export default Cheaclo;
