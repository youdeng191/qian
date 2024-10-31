import styled from "styled-components";
import BannerWrapper from "./Banner.style";
import Progressbar from "../../../components/progressbar/Progressbar";
import PayWith from "../../../components/payWith/PayWith";
import BannerData from "../../../assets/data/bannerV6";
import { usePresaleData } from "../../../utils/PresaleContext";


const Banner = () => {
  const { tokenSold, tokenPercent, presaleToken } = usePresaleData();

  return (
    <BannerWrapper>
      <div className="mb-20 container">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-20 text-center">
              <h1 className="banner-title">
                {BannerData.title} <br /> {BannerData.title2}
              </h1>
              <p className="banner-subtitle">{BannerData.subtitle}</p>

              <div className="presale-card-wrapper">
                {/* Header 部分 */}
                <div className="presale-card-header">
                  {/* 代币数据 */}
                  <div className="header-info">
                    <h5 className="text-uppercase text-white">
                      <span>{(tokenSold * 0.34).toFixed(2)}</span>
                      <span style={{ color: '#ffcc00', transform: 'scaleX(1)', display: 'inline-block' }}>$</span> /
                      <span>{(presaleToken * 0.34).toFixed(2)}</span>
                      <span style={{ color: '#ffcc00', transform: 'scaleX(1)', display: 'inline-block' }}>$</span>
                    </h5>
                  </div>
                  {/* 进度条 */}
                  <Progressbar done={tokenPercent} variant="green2" />
                </div>

                {/* 两部分之间的间隔 */}
                <div className="content-gap"></div>

                {/* Body 部分 */}
                <div className="presale-card-body">
                  <PayWith variant="v6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
