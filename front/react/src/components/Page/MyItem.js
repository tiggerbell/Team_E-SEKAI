import React, {useEffect, useState} from 'react';
import SideNav from '../Layout/SideNav';
import classes from './MyItem.module.css';
import {FaDiscord, FaEthereum} from 'react-icons/fa'
import { CgUserAdd, CgSearch, CgUser } from "react-icons/cg";




const MyItem = (props) => {

    const [isAccount, setIsAccount] = useState(false);

    const [balance, setBalnace] = useState(0)
    
    const handleCopyClipBoard = async (text) => {
      setIsAccount(true);
      // 2초 뒤에 돌아옴 
      setTimeout(function(){setIsAccount(false)}, 2000);
      try {
        await navigator.clipboard.writeText(text);
        // alert('클립보드에 링크가 복사되었습니다.');
      } catch (e) {
        // alert('복사에 실패하였습니다');
      }
     };


      

    
     
      
      return (
        <div>
           <SideNav />
           <div className={classes['padding-left360']}>
            {/* 클립보드 복사영역 */}
            <div>
              {
                isAccount == true
                ?
                <>
                  <button><FaEthereum/>Copied!</button>
                </>
                :
                <>
                  <button
                   className={classes['account-button']} 
                   onClick={() => {handleCopyClipBoard(props.account)}}
                   ><FaEthereum/>{props.account}</button>
                </>
              }
       
              <button><CgUser/>Edit Profile</button>
              <button><FaDiscord/>Link Discord</button>
            </div> <br></br>

              {/* 보유 아이템 상태 영역 */}
            <div className={classes['state-borad']}>
              <div className={classes['flex-list']}>
                <div><span>TOTAL ITEMS</span></div>
                <div><span>0</span></div>
              </div>

              <div className={classes['flex-list']}>
                <div><span>UNLISTED ITEMS</span></div>
                <div><span>0</span></div>
              </div>

              <div className={classes['flex-list']}>
                <div><span>ESTIMATED VALUE</span></div>
                <div><span>0</span></div>
              </div>

              <div className={classes['flex-list']}>
                <div><span>LISTED ITEMS</span></div>
                <div><span>0</span></div>
              </div>
            </div>

            <h1>사용자 : {props.account} </h1>
            <div>남은 금액 : {balance}</div>  <br /><br />
            
            <div className={classes['flex-list-item']}>
              <div>아이템</div>
              <div>아이템 상장</div>
              <div>활동</div>
            </div>

            


          </div> 
        </div>
      );
}

export default MyItem