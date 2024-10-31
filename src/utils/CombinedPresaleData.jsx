import React, { useContext, useEffect, useState } from "react";
import { PresaleContext } from "./PresaleContext";

const CombinedPresaleData = () => {
  const {
    presaleToken: ethPresaleToken,
    tokenSold: ethTokenSold,
    // 假设你在 PresaleContext 中还有 BNB 的数据
    bnbPresaleToken,
    bnbTokenSold,
  } = useContext(PresaleContext);

  const [combinedData, setCombinedData] = useState({
    totalPresaleToken: 0,
    totalTokenSold: 0,
  });

  useEffect(() => {
    const totalPresaleToken = ethPresaleToken + bnbPresaleToken;
    const totalTokenSold = ethTokenSold + bnbTokenSold;

    setCombinedData({
      totalPresaleToken,
      totalTokenSold,
    });
  }, [ethPresaleToken, ethTokenSold, bnbPresaleToken, bnbTokenSold]);

  return (
    <div>
      <h2>Combined Presale Data</h2>
      <p>Total Presale Tokens: {combinedData.totalPresaleToken}</p>
      <p>Total Tokens Sold: {combinedData.totalTokenSold}</p>
    </div>
  );
};

export default CombinedPresaleData;
