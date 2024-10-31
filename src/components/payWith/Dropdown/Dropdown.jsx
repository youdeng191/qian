import DropdownWrapper from "./Dropdown.style";
import { useEffect, useState } from "react";
import EthIcon from "../../../assets/images/token/eth.png";
import { payWith } from "../../../contracts/config";
import Data from "../../../assets/data/networkInfo";

const Dropdown = ({
  userChainId,
  setIsActiveBuyOnEth,
  setIsActiveBuyOnBnb,
  switchChain,
  makeEmptyInputs,
  ethChainId,
  bnbChainId,
  variant,
}) => {
  const dropdownList = Data;

  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [titleText, setTitleText] = useState(payWith);
  const [selectedImg, setSelectedImg] = useState(EthIcon);

  useEffect(() => {
    dropdownList?.map((item, i) => {
      if (userChainId == item.chainId) {
        setTitleText(item.title);
        setSelectedImg(item.icon);
      }
    });
  }, [userChainId]);

  const dropdownHandle = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleDropdownData = (item) => {
    event.preventDefault();
    setTitleText(item.title);
    setSelectedImg(item.icon);
    setIsDropdownActive(false);
    if (item.id == 1) {
      setIsActiveBuyOnBnb(false);
      setIsActiveBuyOnEth(true);
      switchChain({ chainId: ethChainId });
      makeEmptyInputs();
    }
    if (item.id == 2) {
      setIsActiveBuyOnEth(false);
      setIsActiveBuyOnBnb(true);
      switchChain({ chainId: bnbChainId });
      makeEmptyInputs();
    }
  };

  return (
    <DropdownWrapper variant={variant}>
      <button
        className={`dropdown-toggle ${isDropdownActive ? "active" : ""}`}
        onClick={dropdownHandle}
      >
        <img src={selectedImg} alt="icon" />
        <span>{titleText}</span>
      </button>
      {isDropdownActive && (
        <ul className="dropdown-list">
          {dropdownList?.map((item, i) => (
            <li key={i}>
              <a href="#" onClick={() => handleDropdownData(item)}>
                <img src={item.icon} alt="icon" />
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
