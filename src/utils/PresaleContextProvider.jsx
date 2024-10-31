import React, { useEffect, useRef, useState } from "react";
import { PresaleContext } from "./PresaleContext";
import * as configModule1 from "../contracts/config";
import * as configModule2 from "../contracts/configBnb";
import Data from "../assets/data/networkInfo";
import {
  useAccount,
  useBalance,
  useChainId,
  useReadContract,
  useSwitchChain,
  useWriteContract,
} from "wagmi";
import { formatEther, parseEther } from "viem";
import EthIcon from "../assets/images/token/eth.png";
import BnbIcon from "../assets/images/token/bnb.png";
import Notification from "../components/notification/Notification";

const PresaleContextProvider = ({ children }) => {
  const [configModule, setConfigModule] = useState(configModule1);
  const ethChainId = Data[0]?.chainId;
  const bnbChainId = Data[1]?.chainId;

  const [IsActiveBuyOnEth, setIsActiveBuyOnEth] = useState(false);
  const [IsActiveBuyOnBnb, setIsActiveBuyOnBnb] = useState(true);

  const [buyOnItem, setBuyOnItem] = useState(2);
  const [buyOnText, setBuyOnText] = useState("BUY ON BNB");
  const [buyOnIcon, setBuyOnIcon] = useState(BnbIcon);
  const [selectedImg, setSelectedImg] = useState(EthIcon);

  const handleBuyOn = (itemId) => {
    if (itemId == 1) {
      setIsActiveBuyOnBnb(false);
      setIsActiveBuyOnEth(true);
      switchChain({ chainId: ethChainId });
      setConfigModule((prev) => configModule1);
      makeEmptyInputs();
    }

    if (itemId == 2) {
      setIsActiveBuyOnEth(false);
      setIsActiveBuyOnBnb(true);
      switchChain({ chainId: bnbChainId });
      setConfigModule((prev) => configModule2);
      makeEmptyInputs();
    }
  };

  const [userChainId, setUserChainId] = useState(1);
  const [userBalance, setUserBalance] = useState("0");

  const [maxStage, setMaxStage] = useState(0);
  const [currentStage, setCurrentStage] = useState(1);
  const [currentBonus, setCurrentBonus] = useState("20");
  const [currentPrice, setCurrentPrice] = useState("0.001");
  const [stageEnd, setStageEnd] = useState(1733996440);
  const [nextStage, setNextStage] = useState(0);
  const [nextPrice, setNextPrice] = useState("0.002");
  const [tokenName, setTokenName] = useState("GITTU TOKEN");
  const [tokenSymbol, setTokenSymbol] = useState("GITTU");
  const [presaleToken, setPresaleToken] = useState(100000);
  const [tokenSold, setTokenSold] = useState(20000);
  const [tokenPercent, setTokenPercent] = useState(20);
  const [tokenDecimals, setTokenDecimals] = useState(18);
  const [tokenSubDecimals, setTokenSubDecimals] = useState(0);

  const [usdExRate, setUsdExRate] = useState(0);
  const [paymentUsd, setPaymentUsd] = useState(0);
  const [paymentPrice, setPaymentPrice] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const [bonusAmount, setBonusAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const [presaleStatus, setPresaleStatus] = useState(null);

  const chainId = useChainId();

  const { switchChain } = useSwitchChain();

  const { address: addressData, isConnected } = useAccount();

  const { data: balanceData } = useBalance({
    address: addressData,
  });

  const { data: tokenNameData } = useReadContract({
    ...configModule.tokenNameCall,
  });
  const { data: tokenSymbolData } = useReadContract({
    ...configModule.tokenSymbolCall,
  });
  const { data: tokenDecimalsData } = useReadContract({
    ...configModule.tokenDecimalsCall,
  });
  const { data: presaleTokenAmountData } = useReadContract({
    ...configModule.presaleTokenAmountCall,
  });
  const { data: totalSoldData } = useReadContract({
    ...configModule.totalSoldCall,
  });
  const { data: maxStageData } = useReadContract({
    ...configModule.maxStageCall,
  });
  const { data: currentStageIdData } = useReadContract({
    ...configModule.currentStageIdCall,
  });
  const { data: currentStageInfoData } = useReadContract({
    ...configModule.currentStageInfoCall,
    args: [currentStageIdData],
  });

  const { data: nextStageInfoData } = useReadContract({
    ...configModule.currentStageInfoCall,
    args: [nextStage],
  });

  const {
    data: buyTokenData,
    writeContract,
    isPending: buyTokenIsLoading,
    isSuccess: buyTokenIsSuccess,
    error: buyTokenError,
  } = useWriteContract();

  const makeEmptyInputs = () => {
    setPaymentAmount(0);
    setBuyAmount(0);
    setBonusAmount(0);
    setTotalAmount(0);
    setPaymentPrice(0);
  };

  //handle payment input
  const handlePaymentInput = (e) => {
    let _inputValue = e.target.value;
    setPaymentAmount(_inputValue);

    const _ethToUsd = _inputValue * usdExRate;
    const _getToken = parseInt(_ethToUsd / currentPrice);

    setBuyAmount(_getToken);

    const _bonusAmount = parseInt((_getToken * currentBonus) / 100);
    setBonusAmount(_bonusAmount);

    const _totalAmount = _getToken + _bonusAmount;
    setTotalAmount(_totalAmount);

    setPaymentPrice(_inputValue);

    if (_inputValue == "") {
      setPresaleStatus(null);

      setBuyAmount(0);
      setBonusAmount(0);
      setTotalAmount(0);
      setPaymentPrice(0);
    } else if (parseFloat(userBalance) < parseFloat(_inputValue)) {
      setPresaleStatus("Insufficient funds in your wallet");
    } else {
      if (_getToken > 0) {
        setPresaleStatus(null);
      } else {
        setPresaleStatus("Please buy at least 1 token!");

        setBuyAmount(0);
        setBonusAmount(0);
        setTotalAmount(0);
        setPaymentPrice(0);
      }
    }
  };

  // buy token
  const buyToken = () => {
    if (paymentAmount != "") {
      setPresaleStatus(null);

      writeContract({
        ...configModule.buyTokenCall,
        args: [buyAmount],
        value: parseEther(paymentPrice.toString()),
      });

      makeEmptyInputs();
    } else {
      setPresaleStatus("Please enter pay amount!");
    }
  };

  // buy token notification
  const [isActiveNotification, setIsActiveNotification] = useState(false);
  const [notificationDone, setNotificationDone] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");

  const buyTokenLoadingMsg = (textMsg) => {
    setIsActiveNotification(true);
    setNotificationMsg(textMsg);
  };

  const buyTokenSuccessMsg = () => {
    setNotificationDone(true);
    setNotificationMsg("Your transaction has been successfully completed");
  };

  useEffect(() => {
    if (buyTokenIsLoading) {
      buyTokenLoadingMsg("Transaction Processing. Click 鈥淐onfirm鈥?");
    }

    if (buyTokenError) {
      setIsActiveNotification(false);
      setPresaleStatus(buyTokenError?.shortMessage);
    }

    if (buyTokenIsSuccess) {
      buyTokenSuccessMsg();

      const timeoutId = setTimeout(() => {
        window.location.reload();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [
    isActiveNotification,
    notificationDone,
    notificationMsg,
    buyTokenData,
    buyTokenIsLoading,
    buyTokenError,
    buyTokenIsSuccess,
  ]);

  useEffect(() => {
    if (chainId) {
      setUserChainId(chainId);
      if (chainId == ethChainId) {
        setConfigModule((prev) => configModule1);
        setSelectedImg(EthIcon);
        setBuyOnItem(2);
        setBuyOnText("BUY ON BNB");
        setBuyOnIcon(BnbIcon);
      }
      if (chainId == bnbChainId) {
        setConfigModule((prev) => configModule2);
        setSelectedImg(BnbIcon);
        setBuyOnItem(1);
        setBuyOnText("BUY ON ETH");
        setBuyOnIcon(EthIcon);
      }
    }

    if (balanceData) {
      let tmp = parseFloat(balanceData?.formatted).toFixed(2);
      setUserBalance(`${tmp} ${balanceData?.symbol}`);
    }

    if (tokenNameData) {
      setTokenName(tokenNameData);
    }

    if (tokenSymbolData) {
      setTokenSymbol(tokenSymbolData);
    }

    if (tokenDecimalsData) {
      let _subDecimal = 18 - tokenDecimalsData;
      setTokenDecimals(tokenDecimalsData);
      setTokenSubDecimals(_subDecimal);
    }

    if (presaleTokenAmountData) {
      let tmp = formatEther(presaleTokenAmountData);
      setPresaleToken(tmp / 10 ** tokenSubDecimals);
    }

    if (totalSoldData >= 0) {
      let tmp = formatEther(totalSoldData);
      setTokenSold(tmp / 10 ** tokenSubDecimals);
    }

    if (maxStageData) {
      setMaxStage(maxStageData.toString());
    }

    if (currentStageIdData) {
      setCurrentStage(currentStageIdData.toString());

      let tmp = parseInt(currentStageIdData);
      setNextStage(tmp + 1);

      if (maxStage < tmp + 1) {
        setNextStage(tmp);
      }
    }

    if (currentStageInfoData) {
      setCurrentBonus(currentStageInfoData[1].toString());
      const tmp = formatEther(currentStageInfoData[2]);
      setCurrentPrice(tmp.toString());
      setStageEnd(currentStageInfoData[4].toString());
    }

    if (nextStageInfoData) {
      const tmp = formatEther(nextStageInfoData[2]);
      setNextPrice(tmp.toString());
    }

    let _tokenPercent = parseInt((tokenSold * 100) / presaleToken);
    setTokenPercent(_tokenPercent);

    if (_tokenPercent > 100) {
      setTokenPercent(100);
    }

    configModule.GetUSDExchangeRate().then((res) => {
      setUsdExRate(parseFloat(res));
    });

    let pay = parseFloat(usdExRate * paymentPrice).toFixed(2);
    setPaymentUsd(pay);
  }, [
    chainId,
    configModule,
    tokenNameData,
    tokenSymbolData,
    tokenDecimalsData,
    presaleTokenAmountData,
    totalSoldData,
    maxStageData,
    currentStageIdData,
    currentStageInfoData,
    nextStageInfoData,
    tokenSold,
    presaleToken,
    maxStage,
    usdExRate,
    paymentPrice,
  ]);

  return (
    <PresaleContext.Provider
      value={{
        configModule,
        handleBuyOn,
        IsActiveBuyOnEth,
        setIsActiveBuyOnEth,
        IsActiveBuyOnBnb,
        setIsActiveBuyOnBnb,
        switchChain,
        buyOnItem,
        setBuyOnItem,
        buyOnText,
        setBuyOnText,
        buyOnIcon,
        setBuyOnIcon,
        selectedImg,
        setSelectedImg,
        bnbChainId,
        ethChainId,
        userChainId,
        userBalance,
        maxStage,
        currentStage,
        currentBonus,
        currentPrice,
        stageEnd,
        nextStage,
        nextPrice,
        tokenName,
        tokenSymbol,
        presaleToken,
        tokenSold,
        tokenPercent,
        tokenDecimals,
        tokenSubDecimals,
        usdExRate,
        paymentUsd,
        paymentPrice,
        paymentAmount,
        buyAmount,
        bonusAmount,
        totalAmount,
        presaleStatus,
        setPresaleStatus,
        makeEmptyInputs,
        handlePaymentInput,
        buyToken,
        buyTokenData,
        buyTokenIsLoading,
        buyTokenIsSuccess,
        buyTokenError,
      }}
    >
      {children}

      {/* notification modal */}
      {isActiveNotification && (
        <Notification
          notificationDone={notificationDone}
          textMessage={notificationMsg}
        />
      )}
    </PresaleContext.Provider>
  );
};

export default PresaleContextProvider;
