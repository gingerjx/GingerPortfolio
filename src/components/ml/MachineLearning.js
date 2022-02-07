import React from 'react';
import './machineLearning.css'
import Texts from '../../utils/Texts'
import ChapterTitle from '../common/chapterTitle/ChapterTitle';
import BackButton from '../common/backButton/BackButton'
// import Microservice from './microservice/Microservice';

// import javaIcon from './assets/java.svg'
// import springIcon from './assets/spring.png'
// import seleniumIcon from './assets/selenium.png'
// import postgresIcon from './assets/postgresql.svg'
// import angularIcon from './assets/angular.png'
// import typescriptIcon from './assets/typescript.png'

// import crawlerIcon from './assets/crawler.svg'
// import clothesIcon from './assets/clothes-hanger.svg'
// import usersIcon from './assets/user.svg'
// import frontIcon from './assets/web-design.svg'
// import registryIcon from './assets/cloud.svg'
// import gatewayIcon from './assets/gateway.svg'


// import vid from './assets/cheaclo_full.webm'

const MachineLearning = () => {
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
          </div>
};

export default MachineLearning;
