import React from 'react';
import SideNav from '../Layout/SideNav'
import classes from './Minting.module.css';
import mintImg from '../../assets/mint.webp';
import { SiKaios } from "react-icons/si";

const Minting = () => {
  return (
    <div>
      <SideNav />
      <div className={classes['padding-left360']}>
        <div className={classes['flex-minting-box']}>
          <div>
            <img src={mintImg}  width ="300" height="300" alt="" />
          </div>
          <div>
            <div>트랜잭션당 민팅 가능 수량 : 1</div><br />
            <div>{0}/{30}</div><br />
            <div className={classes['flex']}>
              <p className={classes['margine-rigth10']}>Price</p>
              <SiKaios className={classes['margine-rigth10']}/>
              <p className={classes['margine-rigth10']}>100KAI</p>
            </div><br />
            <button className={classes['button-style1']}>mint</button>
            <button className={classes['button-style1']}>more</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Minting