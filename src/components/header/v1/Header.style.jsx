import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed; /* 使头部固定在页面顶部 */
  z-index: 999; /* 确保头部在其他元素之上 */
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 0;
  transition: 0.3s; /* 平滑过渡效果 */

  &.sticky {
    background: ${({ theme }) => theme.colors.bgHeader}; /* 当头部固定时背景颜色 */
  }

  .gittu-header-content {
    display: flex; /* 使用 Flexbox 排列内容 */
    align-items: center; /* 垂直居中对齐 */
    justify-content: space-between; /* 水平分散对齐 */
  }

  .gittu-header-left {
    display: flex; /* 使用 Flexbox 排列左侧内容 */
    align-items: center;
    gap: 60px; /* 左侧内容之间的间距 */
  }
  
  .gittu-header-logo {
    cursor: pointer; /* 添加手指图案 */
  }
  
  .gittu-header-right {
    display: flex; /* 使用 Flexbox 排列右侧内容 */
    align-items: center;
    gap: 20px; /* 右侧内容之间的间距 */
  }

  .gittu-header-right-menu {
    display: flex; /* 使用 Flexbox 排列右侧菜单 */
    align-items: center;
    gap: 20px;
    a {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-weight: 700;
      font-size: 16px;
      line-height: 30px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
      transition: color 0.3s;
  
      &:hover {
        color: #09B80A; /* 悬停时的颜色变化 */
      }
    }
  }
  

  .gittu-header-menu {
    display: flex; /* 横向排列 */
    align-items: center;
    gap: 30px; /* 按钮之间的间距 */
    
    li {
      list-style: none; /* 去掉列表标记 */
    }
    
    li a {
      font-family: ${({ theme }) => theme.fonts.primary}; /* 字体设置 */
      font-weight: 700; /* 字体粗细 */
      font-size: 16px; /* 字体大小 */
      line-height: 30px; /* 行高 */
      text-transform: uppercase; /* 字母大写 */
      color: ${({ theme }) => theme.colors.white}; /* 默认字体颜色 */
      cursor: pointer; /* 添加手指图案以表示可点击 */
      transition: color 0.3s; /* 悬停时颜色变化的过渡效果 */

      &:hover {
        color: #02B203;; /* 悬停时的颜色变化 */
      }
    }
  }

  .gittu-header-menu-toggle {
    display: none; /* 默认隐藏移动菜单切换按钮 */

    .menu-toggler {
      border: 0; /* 去掉边框 */
      padding: 0; /* 去掉内边距 */
      background: transparent; /* 背景透明 */
      color: ${({ theme }) => theme.colors.white}; /* 按钮颜色 */
      font-size: 30px; /* 字体大小 */
    }
  }

  .social-links {
    display: flex; /* 使用 Flexbox 排列社交链接 */
    align-items: center;
    gap: 20px; /* 社交链接之间的间距 */
    
    li a {
      flex: 0 0 auto; /* 防止社交链接的缩放 */
      width: 50px; /* 设置社交链接的宽度 */
      height: 50px; /* 设置社交链接的高度 */
      border-radius: 50%; /* 圆形背景 */
      background: ${({ theme }) => theme.colors.white}26; /* 半透明背景 */
      backdrop-filter: blur(10px); /* 背景模糊效果 */
      display: flex; /* 使用 Flexbox 排列内容 */
      align-items: center;
      justify-content: center;
      transition: 0.3s; /* 平滑过渡效果 */

      img {
        width: 20px; /* 社交图标宽度 */
        transition: 0.3s; /* 图标悬停时的过渡效果 */
      }

      &:hover {
        opacity: 0.7; /* 悬停时的透明度变化 */
      }
    }
  }

  @media screen and (max-width: 991px) {
    .gittu-header-menu-toggle {
      display: block; /* 在小屏幕上显示移动菜单切换按钮 */
    }

    .gittu-header-menu {
      display: none; /* 在小屏幕上隐藏菜单 */
    }

    .gittu-header-left {
      gap: 30px; /* 小屏幕左侧内容的间距 */
    }

    .gittu-header-right {
      flex-direction: row-reverse; /* 小屏幕上右侧内容反向排列 */

      .social-links {
        display: none; /* 小屏幕上隐藏社交链接 */
      }
    }
  }

  @media screen and (max-width: 480px) {
    .gittu-header-left {
      gap: 15px; /* 超小屏幕左侧内容的间距 */
    }

    .gittu-header-logo {
      flex: 0 0 auto; /* 防止 Logo 的缩放 */
      max-width: 100px; /* 设置 Logo 的最大宽度 */
    }
    
    .dropdown-demo {
      display: none; /* 小屏幕上隐藏下拉菜单 */
    }

    .gittu-header-right {
      gap: 10px; /* 超小屏幕右侧内容的间距 */
    }
  }
`;

export default HeaderWrapper;
