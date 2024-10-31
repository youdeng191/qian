import React from 'react';
import RoadmapImage from '../assets/images/banner/er.png'; // 替换为实际的路径

const RoadmapImageComponent = () => {
  return (
    <div id="roadmap" style={{ position: 'relative', marginTop: '0px' }}>
      <img 
        src={RoadmapImage} 
        alt="Roadmap" 
        style={{ width: '100%', height: 'auto' }} 
      />

      {/* 路线图的内容 */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '80%' }}>
        <div style={{
          backgroundColor: 'rgba(61,65,68,255)',
          border: '2px solid #000',
          borderRadius: '5px',
          padding: '10px',
          marginBottom: '20px',
          position: 'relative'
        }}>
          <h3>阶段 1</h3>
          <p>介绍游戏机制，吸引早期用户。</p>
        </div>

        <div style={{
          backgroundColor: 'rgba(61,65,68,255)',
          border: '2px solid #000',
          borderRadius: '5px',
          padding: '10px',
          marginBottom: '20px',
          position: 'relative'
        }}>
          <h3>阶段 2</h3>
          <p>增加更多功能，推出新角色。</p>
        </div>

        <div style={{
          backgroundColor: 'rgba(61,65,68,255)',
          border: '2px solid #000',
          borderRadius: '5px',
          padding: '10px',
          position: 'relative'
        }}>
          <h3>阶段 3</h3>
          <p>推出 P2E 模式，吸引更多玩家。</p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapImageComponent;
