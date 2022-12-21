import React, {useEffect, useState} from 'react'
import esLogoImg from '../../assets/esLogo.png'
import classes from './Header.module.css'
import { CgUserAdd, CgSearch, CgUser } from "react-icons/cg";
import useWeb3 from '../../hooks/useWeb3'
import {FaRegBell} from "react-icons/fa"
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../lib/connector';

const Header = () => {
 // const [web3, account] = useWeb3();
  const [connectWalltet, setConnectWallet] = useState(null);

  //console.log(account)

  const {
    chainedId,
    account,
    active,
    activate,
    deactivate
  } = useWeb3React();

  const walletConnectHandler = () => {
    if(active) {
      deactivate();
      return;
    }
    
    activate(injected, (error) => {
      if('/No Ethereum provider was found on window.ethereum/'.test(error)) {
        window.open('https://metamask.io/download.html');
      }
    });
  }


  // useEffect(()=>{
  //    // 화살표 async 즉시 실행 함수
  //    (async ()=>{
  //     if(!window.ethereum) return;
  //     // 메타마스크에 연결되어있는 계정을 가져오고
  //     const [address] = await window.ethereum.request({
  //         method : "eth_requestAccounts",
  //     })
  //     // 계정 값으로 state 값 변경.
  //     setConnectWallet(address)
      
  // })()
  // },[])


  return (
    <div className={classes['eslogo-box']}>
        <img src={esLogoImg} alt="es로고이미지" />
        <div>E-SEKAI</div>

        {/* 검색창 */}
        <div className={classes['search-box']}>
            <form>
               <input 
                className={classes["search-txt"]} 
                type="text" 
                placeholder="Search Collections, Creators"
                />
                  <button className={classes["search-btn"]} type="submit">
                    <i className="fas fa-search">
                        <CgSearch/>
                    </i>
                  </button>
            </form>
        </div>

        {/* 유저 배너 */}
        <div className={classes['log-box']}>
            {
              account != null
              ?
              <>
                <div className={classes['my-page']}><FaRegBell/></div>
                <div className={classes['account-box']}>{account}</div>
              </>
              :
              <>
                <div className={classes['my-page']}><CgUser/></div>
                <div className={classes['create-user']}>Connect Wallet</div>
                <button className={classes['create-user']} type="button" onClick={walletConnectHandler}>{ active ? 'disconnect':'connect'}</button>
                {/* <div className={classes['create-user']}><CgUserAdd/></div> */}
              </>
            }
        </div>

    </div>
  )
}

export default Header