import { useState, useEffect, createContext, useContext } from "react";
import { ethers } from "ethers";

import {
  isWalletConnected,
  connectWallet,
  connectingTokenContract,
  getBalance,
  connectingTokenSaleContract,
} from "../Utils/index";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [nativeToken, setNativeToken] = useState("");
  const [tokenHolders, setTokenHolders] = useState([]);
  const [tokenSale, setTokenSale] = useState("");
  const [currentHolder, setCurrentHolder] = useState("");

  // Fetch initial data
  const fetchInitialData = async () => {
    try {
      // Check if wallet is connected and get address
      const account = await isWalletConnected();

      // Get balance of connected wallet
      const balance = await getBalance();
      setBalance(ethers.utils.formatEther(balance.toString()));
      setAddress(account);

      // Get native token balance of connected wallet
      const my_token_contract = await connectingTokenContract();

      let tokenBalance;

      if (account) {
        tokenBalance = await my_token_contract.balanceOf(account);
      } else {
        tokenBalance = 0;
      }

      // Get all token infos
      const tokenName = await my_token_contract.name();
      const tokenSymbol = await my_token_contract.symbol();
      const tokenTotalSupply = await my_token_contract.totalSupply();
      const tokenStandard = await my_token_contract.standard();
      const tokenHolder = await my_token_contract._userId();
      const tokenOwnerOfContract = await my_token_contract.ownerOfContract();
      const tokenAddress = await my_token_contract.address();

      // Native token object
      const nativeToken = {
        tokenAddress: tokenAddress,
        tokenName: tokenName,
        tokenSymbol: tokenSymbol,
        tokenOwnerOfContract: tokenOwnerOfContract,
        tokenStandard: tokenStandard,
        tokenTotalSupply: ethers.utils.formatEther(tokenTotalSupply.toString()),
        tokenBalance: ethers.utils.formatEther(tokenBalance.toString()),
        tokenHolder: tokenHolder.toNumber(),
      };

      // Get token holders
      const getTokenHolders = await my_token_contract.getTokenHolders(account);

      // Get token holder data
      if (account) {
        const getTokenHolderData = await my_token_contract.getTokenHolderData(
          account
        );

        const currentHolder = {
          tokenId: getTokenHolderData[0].toNumber(),
          from: getTokenHolderData[1],
          to: getTokenHolderData[2],
          totalToken: ethers.utils.formatEther(
            getTokenHolderData[3].toString()
          ),
          tokenHolder: getTokenHolderData[4],
        };

        setCurrentHolder(currentHolder);
      }

      setNativeToken(nativeToken);

      // Token Sale Contract
      const token_sale_contract = await connectingTokenSaleContract();

      const tokenPrice = await token_sale_contract.tokenPrice();
      const tokensSold = await token_sale_contract.tokensSold();
      const tokenSaleBalance = await my_token_contract.balanceOf(
        "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
      );

      const tokenSale = {
        tokenPrice: ethers.utils.formatEther(tokenPrice.toString()),
        tokensSold: tokensSold.toNumber(),
        tokenSaleBalance: ethers.utils.formatEther(tokenSaleBalance.toString()),
      };

      setTokenSale(tokenSale);

      // console.log(tokenSale);
      // console.log(currentHolder);
      // console.log(nativeToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  // Buy token
  const buyToken = async (nToken) => {
    try {
      const amount = ethers.utils.parseUnits(nToken.toString(), "ether");
      const contract = await connectingTokenSaleContract();

      const buying = await contract.buyToken(nToken, {
        value: amount.toString(),
      });

      await buying.wait();
      console.log(buying);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Transfer native token
  const transferNativeToken = async () => {
    try {
      const Token_Sale_address = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      const token_amount = 100000;
      const tokens = token_amount.toString();
      const transferAmount = ethers.utils.parseEther(tokens);

      const contract = await connectingTokenContract();
      const transaction = await contract.transfer(
        Token_Sale_address,
        transferAmount
      );

      console.log(transaction);
      await transaction.wait();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const Token_Ico = "Token Sale Dapp";
  return (
    <StateContext.Provider
      value={{
        transferNativeToken,
        buyToken,
        connectWallet,
        setAddress,
        Token_Ico,
        currentHolder,
        tokenSale,
        tokenHolders,
        nativeToken,
        balance,
        address,
      }}
    >
      {" "}
      {children}{" "}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
