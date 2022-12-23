import React from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Page/Main";
import MyItem from "./components/Page/MyItem";
import Swap from "./components/Page/Swap";
import {Routes, Route} from 'react-router-dom';
// 지갑연결임포트
import { useWeb3React } from '@web3-react/core';
import useWeb3 from './hooks/useWeb3';
import EthSwapContract from "./contracts/EthSwap.json";
import { useState,useEffect } from "react";

function App() {

  const [web3, accounts] = useWeb3();
  const [balance, setBalnace] = useState(0);
  const [deployed,setDeployed] = useState();
  const [CA, setCA] = useState();

  const {
    connector, // 현재 dapp에 연결된 월렛의 connector 값 지금경우는 메타마스크
    library, // web3 provider 제공
    chainId, // dapp에 연결된 account의 chainId
    account, // dapp에 연결된 account address
    active, // active: dapp 유저가 로그인 된 상태인지 체크
    error,
    activate, // activate: dapp 월렛 연결 기능 수행함수
    deactivate // deactivate: dapp 월렛 해제 수행함수
  } = useWeb3React();


  useEffect(()=>{
    if(!web3) return;
    const init = async()=>{
      const networkId = await web3.eth.net.getId();       
      // 컨트랙트 조회 인스턴스 객체
      console.log(networkId);
      const instance = await new web3.eth.Contract(
        EthSwapContract.abi,
        //CA값
        EthSwapContract.networks[networkId].address
      );
      setDeployed(instance);
      console.log(web3);
      console.log(accounts);
      // console.log(instance);
      // call함수에 from : accounts 객체 넣어줘야함.
      let tokenValue = await instance?.methods.getSwapBalance().call({from : accounts});
      let kaiToken = tokenValue / 10 ** 18;
      console.log(kaiToken);
      setBalnace(kaiToken);
      setCA(EthSwapContract.networks[networkId].address);
    }
    
    init();
  },[web3])

  const buy = () => {
    // const accounts = await web3.eth.getAccounts();
    // console.log(accounts[0])
    deployed.methods.buyToken().send({from : accounts, to : CA});
  }

  useEffect(() => {
    console.log(balance);
  },[balance])
  

  return (
    <div>
      <button onClick={buy}>토큰 구매 ㅋ</button>
      <Header />
      <Routes>
        <Route 
          path="/"
          element={<Main />}/>
        <Route 
          path="/myitem"
          element={<MyItem account={account} />}/>
        <Route 
          path="/swap"
          element={<Swap buy={buy}/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
