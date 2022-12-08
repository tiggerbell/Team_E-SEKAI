import React, {useState} from 'react'
import SideNav from '../Layout/SideNav'
import Slider from '../Layout/Slider/Slider'
import classes from './Main.module.css'
import { FaEthereum } from "react-icons/fa" ;   
import { SiDogecoin } from "react-icons/si";
import { Link } from 'react-router-dom';

const Main = (props) => {

  const [ether, setEther] = useState(true);
  const [doge, setDoge] = useState(false);

  const etherHandler = () => {
    setEther(true)
    setDoge(false)
  }

  const dogeHandler = () => {
    setDoge(true)
    setEther(false)
  }

  // 여백용 함수임
  function Span({ space = 15 }){
    return (
        <span style={{ paddingRight: space }}></span>
      );
  }

  return (
    <>
      <div className={classes['inline-block']}>
        <SideNav />
        <Slider />
      </div>
      <div className={classes['scroll-box']}>
        <div className={classes['popular-collect-title-flex']}>
          <h1>Popular Collections</h1> <Span/>
          <select name="" id="" className={classes['select-collect']}>
            <option value="">last 1hours</option>
            <option value="">last 6hours</option>
            <option value="">last 24hours</option>
            <option value="">last 7days</option>
          </select><Span/>
          {
            ether === true 
            ?
            <>
            <button 
            className={classes['btn-token-selected']}
            onClick={etherHandler}><div><span><FaEthereum/> Ethereum</span></div></button><Span/> 
            </>
            :
            <>
            <button 
            className={classes['btn-token']}
            onClick={etherHandler}><div><span><FaEthereum/> Ethereum</span></div></button><Span/> 
            </>
          }
          {
            doge === true 
            ?
            <>
              <button 
              className={classes['btn-token-selected']}
              onClick={dogeHandler}><div><span><SiDogecoin/> Doge</span></div></button> 
            </>
            :
            <>
              <button 
              className={classes['btn-token']}
              onClick={dogeHandler}><div><span><SiDogecoin/> Doge</span></div></button>
            </>
          }
          <div className={classes['add-more-collect']}>
            <Link to = "/">더 보기</Link>
          </div>
        </div>
        <div>
          {/* 여기는 인기 collect 컴포넌트가 들어가야함 */}
          
        </div>
      </div>
    </>
  )
}

export default Main