import React from 'react';
import './plots.css'

import linear from './assets/linear.png';
import relu from './assets/relu.png';
import softmax from './assets/softmax.png';
import tanh from './assets/tanh.png';

const Plots = () => {
    let linearTitle = 'Linear'
    let reluTitle = 'Relu'
    let softmaxTitle = 'Softmax'
    let tanhTitle = 'Tanh'
    
    return    <div className='ml-plots'>
                    <div className='plot'>
                        <img src={linear} alt={linearTitle}></img>
                        <p>{linearTitle}</p>
                    </div>
                    <div className='plot'>
                        <img src={relu} alt={reluTitle}></img>
                        <p>{reluTitle}</p>
                    </div>
                    <div className='plot'>
                        <img src={softmax} alt={softmaxTitle}></img>
                        <p>{softmaxTitle}</p>
                    </div>
                    <div className='plot'>
                        <img src={tanh} alt={tanhTitle}></img>
                        <p>{tanhTitle}</p>
                    </div>
                </div>;
};

export default Plots;
