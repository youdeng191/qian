import Layout from "../Layout";
import Header from "../components/header/v1/Header";
import Banner from "../sections/banner/v6/Banner";
import About from "../components/About"; // 导入 About 组件
import Roadmap from "../components/Roadmap"; // 导入 Roadmap 组件
import Tokenomics from "../components/Tokenomics"; // 导入 Tokenomics 组件
import FQA from "../components/Fqa"; // 导入 FQA 组件
import Footer from "../components/Footer"; // 导入 Footer 组件

const HomeV6 = () => {
  return (
    <Layout pageTitle="Gittu - Home Six">
      <div id="top" /> {/* 添加 ID，以便滚动到此部分 */}
      <Header variant="v5" />
      <Banner />
      <div id="about" style={{ margin: 0, padding: 0 }}>
        <About />
      </div>
      <div id="roadmap" style={{ margin: 0, padding: 0 }}>
        <Roadmap />
      </div>
      <div id="tokenomics" style={{ margin: 0, padding: 0 }}>
        <Tokenomics />
      </div>
      <div id="fqa" style={{ margin: 0, padding: 0 }}>
        <FQA />
      </div>
      <Footer /> {/* 将 Footer 组件添加到这里 */}
    </Layout>
  );
};

export default HomeV6;
