import React from 'react';
import './chapterTitle.css'

const ChapterTitle = ({ text }) => {
  return <div className='chapter-title'>
            <p>{text}</p>
            <hr/>
          </div>;
};

export default ChapterTitle;
