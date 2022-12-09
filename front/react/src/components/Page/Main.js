import React, {useState} from 'react'
import SideNav from '../Layout/SideNav'
import Slider from '../Layout/Slider/Slider'
import classes from './Main.module.css'
import { FaEthereum } from "react-icons/fa" ;   
import { SiDogecoin } from "react-icons/si";
import { Link } from 'react-router-dom';
import topNft1 from '../../assets/c_millenia_pfp_1668187735016.webp'
import Footer from '../Layout/Footer';

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
        <div className={classes['padding-left360']}>
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

          <div className={classes['popular-collect-container']}>
            {/* 여기는 인기 collect 컴포넌트가 들어가야함 */}
            <Link to = "/">1</Link>
            <Link to = "/">2</Link>
            <Link to = "/">3</Link>
            <Link to = "/">4</Link>
            <Link to = "/">5</Link>
            <Link to = "/">6</Link>
            <Link to = "/">7</Link>
            <Link to = "/">8</Link>
            <Link to = "/">9</Link>
            <Link to = "/">10</Link>
            <Link to = "/">11</Link>
            <Link to = "/">12</Link>
          </div>

          <div className={classes['top-upvote-title-flex']}>
            <h1>Top upvoted drops</h1>
            <div className={classes['add-more-collect']}>
            <Link to = "/">더 보기</Link>
            </div>
          </div>

          <div className={classes['top-img-flex']}>
            <div className={classes['top-nft-wrap']}>
              <img 
                src={topNft1} alt="topNft1"
                width="218" height="165" />
              <div className={classes['author']}>
                <div>Kim JC</div>
              </div>
              <div className={classes['like-create-at-flex-gap-1']}>
                <div className={classes['like-color-red']}>🧡6200</div>
                <div>Dec 15, 09:00</div>
              </div>
            </div>

            <div className={classes['top-nft-wrap']}>
              <img 
                src={topNft1} alt="topNft1"
                width="218" height="165" />
            </div>

            <div className={classes['top-nft-wrap']}>
              <img 
                src={topNft1} alt="topNft2"
                width="218" height="165" />
            </div>

            <div className={classes['top-nft-wrap']}>
              <img 
                src={topNft1} alt="topNft3"
                width="218" height="165" />
            </div>

            <div className={classes['top-nft-wrap']}>
              <img 
                src={topNft1} alt="topNft4"
                width="218" height="165" />
            </div>

          </div>

          {/* footer */}
          <div>
            <Footer/>
          </div>
          

        </div>
      </div>
  
    </>
  )
}

export default Main