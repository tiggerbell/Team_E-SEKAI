import React, {useState} from 'react';
import classes from './SideNav.module.css';
import { GiConsoleController, GiSwapBag, GiLandMine } from "react-icons/gi" ;   
import{
    SiBitcoincash,
    SiSimpleanalytics,
    SiRos,
}from "react-icons/si";
import { Link } from 'react-router-dom';






const SideNav = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
 
  
  const toggleHandler = () => {
    setToggle(toggle=> !toggle) // on, off 개념 boolean
  }
  const toggleHandler1 = () => {
    setToggle1(toggle1=> !toggle1) // on, off 개념 boolean
  }
  const toggleHandler2 = () => {
    setToggle2(toggle2=> !toggle2) // on, off 개념 boolean
  }
  
  // 여백용 함수임
  function Span({ space = 15 }){
    return (
        <span style={{ paddingRight: space }}></span>
      );
  }
  
  

  return (
    <div className={classes['side-nav']}>
        <div 
          onClick={toggleHandler}
          className={classes['hover-bg']}><SiBitcoincash/> Market place
        </div><br />
        {toggle && 
        <>
            <div className={classes['hover-tx']}><Span /> {">"} Popular collections</div>
            <div className={classes['hover-tx']}><Span /> {">"} Auctions</div> <br />
        </>}
        <div 
          onClick={toggleHandler1}
          className={classes['hover-bg']}><SiSimpleanalytics/> Insights</div><br />
        {toggle1 && 
        <>
            <div className={classes['hover-tx']}><Span /> {">"} Stats</div>
            <div className={classes['hover-tx']}><Span /> {">"} My Watchlist</div> <br />
        </>}
        <div
         onClick={toggleHandler2}
         className={classes['hover-bg']}><SiRos/> ES list</div><br />
        {toggle2 && 
        <>
            <div className={classes['hover-tx']}><Span /> {">"} Whitelists </div>
            <div className={classes['hover-tx']}><Span /> {">"} About</div> <br />
        </>}
        <div className={classes['hover-bg']}><GiConsoleController/> ES game</div><br />
        <Link to ='/swap'>
          <div className={classes['hover-bg']}><GiSwapBag/> Swap</div>
        </Link> <br />
        <Link to ='/minting'>
          <div className={classes['hover-bg']}><GiLandMine/> Minting</div>
        </Link>

       
        
        

    </div>
  )
}

export default SideNav