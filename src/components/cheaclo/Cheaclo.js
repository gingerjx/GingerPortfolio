import React from 'react';
import './cheaclo_big.css'
import './cheaclo_small.css'
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
import clothesIcon from './assets/clothes-hanger.svg'
import usersIcon from './assets/user.svg'
import frontIcon from './assets/web-design.svg'
import registryIcon from './assets/cloud.svg'
import gatewayIcon from './assets/gateway.svg'
import BackButton from '../common/backButton/BackButton'

import vid from './assets/cheaclo_full.webm'

const Cheaclo = () => {
  return <div className='cheaclo-container'>
            <BackButton></BackButton>
            <h1>{Texts.cheaclo.title}</h1>
            <div className='chapter'>
              <div className='content'>
                <p>{Texts.cheaclo.aFewWordsText1}</p>
                <p dangerouslySetInnerHTML={{ __html: Texts.cheaclo.aFewWordsText2}}></p>
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
                <Microservice 
                  hrefTo={Texts.cheaclo.clothesDatabaseLink}
                  icon={clothesIcon}
                  title={Texts.cheaclo.clothesDatabase}
                  description={Texts.cheaclo.clothesDatabaseText}
                  tags={[postgresIcon, springIcon, javaIcon]}/>
                <Microservice 
                  hrefTo={Texts.cheaclo.usersDatabaseLink}
                  icon={usersIcon}
                  title={Texts.cheaclo.usersDatabase}
                  description={Texts.cheaclo.usersDatabaseText}
                  tags={[postgresIcon, springIcon, javaIcon]}/>
                <Microservice 
                  hrefTo={Texts.cheaclo.clientFrontLink}
                  icon={frontIcon}
                  title={Texts.cheaclo.clientFront}
                  description={Texts.cheaclo.clientFrontText}
                  tags={[angularIcon, typescriptIcon]}/>
                <Microservice 
                  hrefTo={Texts.cheaclo.serviceRegistryLink}
                  icon={registryIcon}
                  title={Texts.cheaclo.serviceRegistry}
                  description={Texts.cheaclo.serviceRegistryText}
                  tags={[springIcon, javaIcon]}/>
                <Microservice 
                  hrefTo={Texts.cheaclo.cloudGatewayLink}
                  icon={gatewayIcon}
                  title={Texts.cheaclo.cloudGateway}
                  description={Texts.cheaclo.cloudGatewayText}
                  tags={[springIcon, javaIcon]}/>
              </div>
              <ChapterTitle text={Texts.cheaclo.technology}/>
            </div>
            <div className='chapter'>
              <div className='content'>
                <p>{Texts.cheaclo.presentationText}</p>
                <p>{Texts.cheaclo.videoIntro}</p>
                <video controls>
                  <source src={vid} type="video/webm"/>
                  Your browser does not support HTML video.
                </video>
                <p>
                  {Texts.cheaclo.moreDetails} 
                  <a href={Texts.cheaclo.aboutLink} target="_blank" rel="noreferrer">
                    <b>Github</b>
                  </a>
                  .
                </p>
              </div>
              <ChapterTitle text={Texts.cheaclo.presentation}/>
            </div>
          </div>
};

export default Cheaclo;
