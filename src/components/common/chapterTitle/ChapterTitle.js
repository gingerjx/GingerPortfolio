import React from 'react';
import './chapterTitle_big.css'
import './chapterTitle_small.css'

const ChapterTitle = ({ text }) => {
  return <div className='chapter-title'>
            <p>{text}</p>
            <hr/>
          </div>;
};

export default ChapterTitle;
