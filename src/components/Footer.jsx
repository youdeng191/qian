import React from 'react';
import FooterSocialLinks from '../assets/data/footerSocialLinks'; // 导入社交链接数据

const Footer = () => {
  return (
    <div id="footer" style={{ background: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
      {/* 删除 TokenomicsImage 的相关代码 */}
      
      <div style={{ margin: '20px 0' }}>
        <p>Copyright © 2024 Casino Mogul. All Rights Reserved.

Do your own research before you invest! Participating in crypto presales involves risks. This is not financial advice.</p>
        <p>
          <a href="/privacy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a> | 
          <a href="/terms" style={{ color: '#fff', textDecoration: 'none', marginLeft: '10px' }}>Terms of Service</a>
        </p>
      </div>

      <div style={{ marginTop: '10px' }}>
        {FooterSocialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <img src={link.icon} alt={link.title} style={{ width: '24px', height: '24px' }} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
