// FQAImageComponent.js
import React from 'react';
import FQAImage from '../assets/images/banner/si.png'; // 替换为实际的路径
import Fqa from './Qa'; // 如果 Fqa.jsx 和 FQAImageComponent.jsx 在同一目录


const FQAImageComponent = () => {
  return (
    <div id="fqa" style={{ position: 'relative', marginTop: '0px' }}>
      <img src={FQAImage} alt="FQA" style={{ width: '100%', height: 'auto' }} />
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '80%' }}>
        <Fqa />
      </div>
    </div>
  );
};

export default FQAImageComponent;
