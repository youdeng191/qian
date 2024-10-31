import React, { useState } from 'react';
import './Qa.css'; // 确保导入 CSS 文件

const Fqa = () => {
  const [openIndex, setOpenIndex] = useState(null); // 跟踪打开的 FAQ 索引

  const faqs = [
    {
      question: "什么是 Casino Mogul？",
      answer: "Casino Mogul 是一款管理风格的 P2E 游戏，允许玩家不仅参与游戏，还能首次创建游戏规则。",
    },
    {
      question: "如何参与游戏？",
      answer: "您可以通过创建帐户并连接您的钱包来参与游戏。",
    },
    {
      question: "游戏中是否有内购？",
      answer: "是的，Casino Mogul 中有一些内购选项。",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // 切换打开状态
  };

  return (
    <div className="fqa-container">
      <h2 className="fqa-heading">常见问题解答</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div onClick={() => toggleFAQ(index)} className="faq-question">
            {faq.question}
            <span className="faq-arrow">{openIndex === index ? ' ▲' : ' ▼'}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Fqa;
