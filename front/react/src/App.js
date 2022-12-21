import React from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Page/Main";
import {Routes, Route} from 'react-router-dom';
import useWeb3 from './hooks/useWeb3';
// import EthSwapContract from "../../../sol/build/contracts/EthSwap.json";
import EthSwapContract from "./contracts/EthSwap.json";
import { useState,useEffect } from "react";


function App() {
  const [web3, account] = useWeb3();
  const [balance, setBalnace] = useState(0);
  const [deployed,setDeployed] = useState();
  const [CA, setCA] = useState();
  useEffect(()=>{
    if(!web3) return;
    const init = async()=>{
      const networkId = await web3.eth.net.getId();       
      // 컨트랙트 조회 인스턴스 객체
      const instance = await new web3.eth.Contract(
        EthSwapContract.abi,
        //CA값
        EthSwapContract.networks[networkId].address
      );
      setDeployed(instance);
      // console.log(networkId);
      // console.log(web3);
      // console.log(account);
      console.log(instance);
      // call함수에 
      let tokenValue = await instance?.methods.getSwapBalance().call({from : account});
      let kaiToken = tokenValue / 10 ** 18;
      console.log(kaiToken);
      setBalnace(kaiToken);
      setCA(EthSwapContract.networks[networkId].address);
    }
    
    init();
  },[web3])

  const buy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0])
    deployed.methods.buyToken().send({from : accounts[0], value: web3.utils.toWei("1", "ether")});
  }

  useEffect(() => {
    console.log(balance);
  },[balance])

  return (
    <div className="App">
      <button onClick={buy}>토큰 구매</button>
      <Header />
      <Routes>
        <Route 
          path="/"
          element={ <Main />}/>
      </Routes>
     
    </div>
  );
}

export default App;

