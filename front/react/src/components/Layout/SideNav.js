import React, {useState} from 'react';
import classes from './SideNav.module.css';
import { GiConsoleController } from "react-icons/gi" ;   
import{
    SiBitcoincash,
    SiSimpleanalytics,
    SiRos,
    VscArrowSmallDown
}from "react-icons/si";






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
        <div onClick={toggleHandler}><SiBitcoincash/> Market place</div><br />
        {toggle && 
        <>
            <div><Span /> Popular collections</div>
            <div><Span /> Auctions</div> <br />
        </>}
        <div onClick={toggleHandler1}><SiSimpleanalytics/> Insights</div><br />
        {toggle1 && 
        <>
            <div><Span /> Stats</div>
            <div><Span /> My Watchlist</div> <br />
        </>}
        <div onClick={toggleHandler2}><SiRos/> ES list</div><br />
        {toggle2 && 
        <>
            <div><Span /> Whitelists </div>
            <div><Span /> About</div> <br />
        </>}
        <div><GiConsoleController/> ES game</div>
       
        
        

    </div>
  )
}

export default SideNav