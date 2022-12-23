import React from "react";
import {Routes, Route} from 'react-router-dom';
import Header from "./components/Layout/Header";
// 페이지
import Main from "./components/Page/Main";
import MyItem from "./components/Page/MyItem";
import Swap from "./components/Page/Swap";
import Product1 from "./components/Product/Product1";
// 지갑연결임포트
import { useWeb3React } from '@web3-react/core';






function App() {
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

  

  return (
    <div>
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
          element={<Swap />}/>
        <Route 
          path="/product1"
          element={<Product1 />}/>

      </Routes>
      
     
    </div>
  );
}

export default App;
