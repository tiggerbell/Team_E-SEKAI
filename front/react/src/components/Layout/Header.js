import React, {useEffect, useState} from 'react'
import esLogoImg from '../../assets/esLogo.png'
import classes from './Header.module.css'
import { CgSearch, CgUser } from "react-icons/cg";
import useWeb3 from '../../hooks/useWeb3'
import {FaRegBell} from "react-icons/fa"
import {Link} from 'react-router-dom';
import {BiUser} from 'react-icons/bi';
import {GrUserSettings} from 'react-icons/gr'
import {GiToken} from 'react-icons/gi'
// 지갑연결임포트
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../lib/connectors';


const Header = (props) => {
  const [walletToggle, setWalletToggle] = useState(false);

  const openWalletToggleHandler = () => {
    setWalletToggle(true) 
  }

  const closeWalletToggleHandler = () => {
    setWalletToggle(false)
  }

  // 메타마스크 깔려 있는지 여부 확인 
  // if (typeof window.ethereum !== 'undefined') {
  //    console.log('MetaMask is installed!');
  // }


  const {
    connector, // 현재 dapp에 연결된 월렛의 connector 값
    library, // web3 provider 제공
    chainId, // dapp에 연결된 account의 chainId
    account, // dapp에 연결된 account address
    active, // active: dapp 유저가 로그인 된 상태인지 체크
    error,
    activate, // activate: dapp 월렛 연결 기능 수행함수
    deactivate // deactivate: dapp 월렛 해제 수행함수
  } = useWeb3React();

  // 지갑 연결
  const onClickActivateHandler = () => {
    activate(injected, async(error)=>{
      // 에러 처리 코드 생략
    })
  }

  // 연결 해제
  const onClickDeactivateHandler = () => {
    deactivate(); // connector._events.Web3ReactDeactivate() 이거랑 같은건데
  }


  return (
    <div className={classes['eslogo-box']}>
        <img src={esLogoImg} alt="es로고이미지" />
        <Link to='/'>
          <div>E-SEKAI</div>
        </Link>
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
                <div className={classes['notion']}><FaRegBell/></div>
                <div 
                  className={classes['account-box']}
                  onClick={openWalletToggleHandler}
                >
                 {account}
                </div>
                {/* 계정모달 */}
                {
                  walletToggle && 
                   <div className={classes['wallet-toggle']}>
                      <div>
                        <Link to = "/myitem" onClick={props.view} ><GiToken/> My items</Link> 
                        <button 
                          onClick={closeWalletToggleHandler}
                          className={classes['closeX']}>x</button>
                      </div>
                      <div>
                        <Link><GrUserSettings/> Profile settings</Link> 
                      </div>
                      <div>
                        <button
                          onClick={onClickDeactivateHandler}
                          ><BiUser/> Sign out</button>
                      </div>
                   </div>
                 }
              </>
              :
              <>
                <div className={classes['my-page']}><CgUser/></div>
                <button
                  className={classes['create-user-button']}
                  onClick={onClickActivateHandler}>
                  Connect Wallet</button>
              </>
            }
        </div>
    </div>
  )
}

export default Header