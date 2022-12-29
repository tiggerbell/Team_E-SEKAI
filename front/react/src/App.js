import React from "react";
import {Routes, Route} from 'react-router-dom';
import Header from "./components/Layout/Header";
import { useState,useEffect } from "react";
// 페이지
import Main from "./components/Page/Main";
import MyItem from "./components/Page/MyItem";
import Swap from "./components/Page/Swap";
import Product1 from "./components/Product/Product1";
import Minting from "./components/Page/Minting";
// 지갑연결임포트
import { useWeb3React } from '@web3-react/core';
import useWeb3 from './hooks/useWeb3';
// 컨트렉트
import KaiTokenContract from "./contracts/KaiToken.json";
import MintNFT from "./contracts/MintNFT.json";
import Sale from "./contracts/Sale.json";
// import MintingPage from "./components/Page/MintingPage";



function App() {

  const [web3, accounts] = useWeb3();
  const [deployed,setDeployed] = useState();
  const [deployedMint, setDeployedMint] = useState();
  const [deployedSale, setDeployedSale] = useState();
  const [CA, setCA] = useState();
  const [NFTCA, setNFTCA] = useState();
  const [SaleCA,setSaleCA] = useState();
  // 스왑 이더 카이 입력값 두개
  const [ethInputValue, setEthInputValue] = useState(0);
  const [kaiInputValue, setKAiInputValue] = useState(0);
  // 보여줄 Kai토큰 갯수 변수
  const [kaiBalance,setKaiBalance] = useState(0);
  // 보여줄 eth 갯수 변수
  const [ethBalance,setEthBalance] = useState(0);
  // 이더랑 카이토큰이랑 swap할때 상태값 확실한 state
  const [isSwap, setIsSwap] = useState(false);

  // nft보여줄 useState
  const [viewNft, setViewNft] = useState();

   // nft 가격 변경
   const [nftPrice, setNftPrice] = useState();
 
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
      // token 컨트랙트
      const networkId = await web3.eth.net.getId();       
      // 컨트랙트 조회 인스턴스 객체
      const instance = await new web3.eth.Contract(
        KaiTokenContract.abi,
        //CA값
        KaiTokenContract.networks[networkId].address
      );
      setDeployed(instance);
      setCA(KaiTokenContract.networks[networkId].address);
      // NftToken 컨트랙트
      const myMintInstance = await new web3.eth.Contract(
        MintNFT.abi,
        //CA값
        MintNFT.networks[networkId].address
      );
      setDeployedMint(myMintInstance);
      setNFTCA(MintNFT.networks[networkId].address);
      
      // Sale 컨트랙트
      const saleInstance = await new web3.eth.Contract(
        Sale.abi,
        Sale.networks[networkId].address
      );
      setDeployedSale(saleInstance);
      setSaleCA(Sale.networks[networkId].address);
      
    }
    init();
  },[web3])

  useEffect(() => {
      if(!deployed) return;
      balance();
      console.log("deployed가 잘 담겼나?")
    },[deployed])
    
    useEffect(() => {
      if(!accounts) return;
      if(!deployed) return;
      console.log("계정이 변경됨.")
      balance();
    },[accounts])

    // 이더와 토큰 가격을 보여주는 함수
  async function balance (){
    // ㅜ 이더가격 보여주는 것
    web3?.eth.getBalance(accounts)
    .then((e) => setEthBalance(e / 10 ** 18));
    // ㅜ 카이가격 보여주는 것
    let tokenValue = await deployed?.methods.getBalance().call({from : accounts});
    console.log(tokenValue);
    // ㅗ call함수에 from : accounts 객체 넣어줘야함.
    setKaiBalance(tokenValue / 10 ** 18);
    console.log(kaiBalance + "밸런스함수");
    console.log(ethBalance + "밸런스함수");
  }

  // 2. 민팅할때sendTransaction 해야함?
  const minting = (e) => {
    let swapKai = web3.utils.toWei(e);
    deployedMint.methods.mintNFT(e,swapKai).send({
      from : accounts,
      to : NFTCA
    }).then(() => {balance(),alert("민팅 성공")});
  };

  const view = async() => {
    console.log("NFT가져와짐?")
    const array = new Array();
    const aa = await deployedSale.methods.getOwnerToken(accounts).call({from : accounts});
    if(!aa) return; 
    for (let i = 0; i < aa.length; i++) {
      const element = aa[i].tokenId;
      const bb = await deployedMint.methods.tokenURI(element).call({from : accounts});
      fetch(bb)
      .then(response => {
        return response.json();
      })
      .then(jsondata => array.push(jsondata.image));
    }
    setViewNft(array);
    console.log(viewNft);
  }

  const tokenSwap = async() => {
    if(isSwap == false){
      // const accounts = await web3.eth.getAccounts();
      // console.log(accounts[0])
      await web3.eth.sendTransaction({from : accounts, to : CA, value : web3.utils.toWei(ethInputValue, "ether")})
      let tokenValue = await deployed?.methods.getBalance().call({from : accounts});
      // ㅗ call함수에 from : accounts 객체 넣어줘야함.
      // ㅜ 교환이 성공하면 바로 더해진 Kai토큰 가져와서 useState에 넣어주기
      setKaiBalance(tokenValue / 10 ** 18);
      // ㅜ 교환이 성공하면 바로 빠진 이더 가져와서 useState에 넣어주기
      await web3.eth.getBalance(accounts)
      .then((e) => setEthBalance(e / 10 ** 18));
      setEthInputValue(0);
      setKAiInputValue(0);
      console.log(ethInputValue);
      console.log(kaiInputValue);
    } else if(isSwap == true){
      let swapKai = web3.utils.toWei(kaiInputValue);
      let tokenValue = deployed.methods.sellToken(swapKai).send({from : accounts, to : CA});
      // ㅜ 교환이 성공하면 바로 빠진 Kai토큰 가져와서 useState에 넣어주기
      let kaiToken = tokenValue / 10 ** 18;
      setKaiBalance(kaiToken);
      // ㅜ 교환이 성공하면 바로 더해진 이더 가져와서 useState에 넣어주기
      await web3.eth.getBalance(accounts)
      .then((e) => setEthBalance(e / 10 ** 18));
      setEthInputValue(0);
      setKAiInputValue(0);
    }
  }

  return (
    <div>
      <Header view={view}/>
      <Routes>
        <Route 
          path="/"
          element={<Main />}/>
        <Route 
          path="/myitem"
          element={<MyItem account={account} kaiBalance={kaiBalance} viewNft={viewNft}/>}/>
        <Route 
          path="/swap"
          element={<Swap setIsSwap={setIsSwap} isSwap = {isSwap} tokenSwap={tokenSwap} kaiInputValue={kaiInputValue} ethInputValue={ethInputValue} setEthInputValue={setEthInputValue} setKAiInputValue={setKAiInputValue} kaiBalance={kaiBalance}  ethBalance={ethBalance}/>}/>
        <Route 
          path="/product1"
          element={<Product1 />}/>
        <Route 
          path="/product1"
          element={<Product1 />}/>
        <Route 
          path="/minting"
          element={<Minting minting={minting}/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
