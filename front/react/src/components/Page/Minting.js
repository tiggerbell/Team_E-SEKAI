import React from 'react';
import SideNav from '../Layout/SideNav'
import classes from './Minting.module.css';

const Minting = () => {
  return (
    <div>
      <SideNav />
      <div className={classes['padding-left360']}>
        <div>
          <button>mint</button>
        </div>
      </div>
    </div>
  )
}

export default Minting