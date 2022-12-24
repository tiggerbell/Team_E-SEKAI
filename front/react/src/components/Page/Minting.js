import React from 'react';
import SideNav from '../Layout/SideNav'
import classes from './Minting.module.css';

const Minting = () => {
  return (
    <div>
      <SideNav />
      <div className={classes['padding-left360']}>
        <div>
          <div>트랜잭션당 민팅 가능 수량 : 1</div>
          <div>{0}/{30}</div>
          <button>mint</button>
        </div>
      </div>
    </div>
  )
}

export default Minting