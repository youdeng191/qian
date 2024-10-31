import React from 'react';
import { VictoryPie } from 'victory'; // 导入 Victory 的饼状图组件
import TokenomicsImage from '../assets/images/banner/san.png'; // 导入背景图片

const TokenomicsImageComponent = () => {
  // 饼状图的数据
  const data = [
    { x: 'Token A', y: 300 },
    { x: 'Token B', y: 50 },
    { x: 'Token C', y: 100 },
  ];

  return (
    <div id="tokenomics" style={{ position: 'relative', marginTop: '0px' }}>
      <img 
        src={TokenomicsImage} 
        alt="Tokenomics" 
        style={{ width: '100%', height: 'auto' }} 
      />

      {/* 饼状图 */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '300px' }}>
        <VictoryPie 
          data={data} // 数据源
          colorScale={['#FF6384', '#36A2EB', '#FFCE56']} // 每个扇区的颜色
          style={{
            data: {
              stroke: "#fff", // 每个扇区的边框颜色
              strokeWidth: 2, // 边框宽度
            },
            labels: {
              fontSize: 15, // 标签字体大小
              fill: "#000" // 标签字体颜色
            }
          }}
          labelRadius={70} // 标签距离中心的半径
        />
      </div>
    </div>
  );
};

export default TokenomicsImageComponent;
