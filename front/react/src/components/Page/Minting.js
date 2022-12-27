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
          <div> <br />
            <h2>가지고 있으면 속도가 빨라지는 NFT</h2>
            <div>트랜잭션당 민팅 가능 수량 : 1</div>
            <div>(화이트리스트 최대 3개)</div>  <br />
            <div> 현재수량 {0} / {30} 한정량</div><br />
            <div className={classes['flex']}>
              <p className={classes['margine-rigth10']}>Price</p>
              <SiKaios className={classes['margine-rigth10']}/>
              <p className={classes['margine-rigth10']}>100KAI</p>
              <p>(≈ $3.825)</p>
            </div><br />
            <input type="number"  /> 
            <button className={classes['button-style1']}>mint</button>
            <button className={classes['button-style1']}>more</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Minting