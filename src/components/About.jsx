import React from 'react';
import MyImage from '../assets/images/banner/yi.png';

const ImageComponent = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
      {/* 图片本身 */}
      <img 
        src={MyImage}
        alt="Description of the image"
        style={{ width: '100%', height: 'auto' }}
      />

      {/* 第一个文本框 */}
      <div style={{
        position: 'absolute',
        top: '130px',
        left: '20px',
        color: 'white',
        backgroundColor: 'rgba(61,65,68,255)',
        padding: '10px',
        borderRadius: '5px',
        width: '400px',
        height: '160px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', 
        borderWidth: '2px',                // 设置边框宽度
        borderStyle: 'solid',               // 设置边框样式
        borderColor: 'black'
      }}>
        Casino Mogul is a management-style P2E game that allows players not only to participate in the game but also to create the game rules for the first time. This disruptive gameplay ushers in the era of P2E 2.0.
      </div>

      {/* 第二个文本框 */}
      <div style={{
        position: 'absolute',
        top: '320px',
        left: '60px',
        color: 'white',
        backgroundColor: 'rgba(61,65,68,255)',
        padding: '10px',
        borderRadius: '5px',
        width: '400px',
        height: '160px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        borderWidth: '2px',                // 设置边框宽度
        borderStyle: 'solid',             // 设置边框样式
        borderColor: 'black'
      }}>
        文本框 2
      </div>

      {/* 第三个文本框 */}
      <div style={{
        position: 'absolute',
        top: '510px',
        left: '100px',
        color: 'white',
        backgroundColor: 'rgba(61,65,68,255)',
        padding: '10px',
        borderRadius: '5px',
        width: '400px',
        height: '160px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: '2px',                // 设置边框宽度
        borderStyle: 'solid',             // 设置边框样式
        borderColor: 'black'
      }}>
        文本框 3
      </div>

      {/* Footer 纯色区域 */}
      <div style={{
        backgroundColor: '#3d4144',   // 纯色背景（可以更改颜色）
        height: '50px',            // Footer 高度
        width: '100%',             // 占满组件宽度
        marginTop: '0px'          // 与内容留出间距
      }}></div>
    </div>
  );
};

export default ImageComponent;
