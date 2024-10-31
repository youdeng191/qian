import styled from "styled-components";
import BannerBgImg from "../../../assets/images/banner/casino1.gif"; // 背景图片路径

// 导入字体
const BannerWrapper = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap');

  background-image: url(${BannerBgImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  padding: 223px 0 60px 0;
  position: relative;
  z-index: 0;
  overflow: hidden;

  .banner-title {
    margin-bottom: 10px;
    background: linear-gradient(180deg, #fff 0%, #bcff7b 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'New Amsterdam', sans-serif; /* 使用新字体 */
    font-size: 90px;
    font-weight: 400;
    line-height: 100px;
    color: ${({ theme }) => theme.colors.white};
  }

  .banner-subtitle {
    margin-bottom: 32px;
    font-family: 'New Amsterdam', sans-serif; /* 使用新字体 */
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.white};
  }

  .presale-card-wrapper {
    margin: 70px;
    margin-top: -200px;
    width: 570px;
    max-width: 100%;
    position: relative;
    transform: scale(0.65) translateY(100px); /* 缩小到原来的 80% */
    transform-origin: top left; /* 确保从左上角开始缩放 */
  }

  /* Header 样式 */
  .presale-card-header {
    width: 98%;
    margin: 0 auto;
    border: 1px solid black;
    background: rgba(61,65,68,255);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    padding: 5px 35px 5px 35px;
    border-radius: 2px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    position: relative; /* 保证可以绝对定位内部元素 */

    .progress-wrapper {
      margin-top: 15px; /* 调整进度条的位置 */
      margin-bottom: 0; /* 如果有需要，还可以调整底部间距 */
    }
  }

  /* 内容框之间的间隔 */
  .content-gap {
    height: 5px;
  }

  /* Body 样式 */
  .presale-card-body {
    border: 1px solid black;
    background: rgba(32,36,39,255);
    backdrop-filter: blur(10px);
    padding: 40px;
    border-radius: 0px;
    font-family: 'New Amsterdam', sans-serif; /* 使用新字体 */
  }

  @media screen and (max-width: 767px) {
    .banner-title {
      margin-bottom: 10px;
      font-size: 70px;
      line-height: 80px;
    }
  }

  @media screen and (max-width: 575px) {
    .banner-title {
      font-size: 60px;
      line-height: 70px;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 150px 0 60px 0;

    .banner-title {
      font-size: 36px;
      line-height: 46px;
    }

    .presale-card-header,
    .presale-card-body {
      border-radius: 5px;

      h5 {
        font-size: 10px;
        line-height: 24px;
      }

      padding: 20px;
    }
  }
`;

export default BannerWrapper;
