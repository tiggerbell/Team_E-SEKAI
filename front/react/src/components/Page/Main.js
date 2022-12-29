import React, {useState} from 'react'
import SideNav from '../Layout/SideNav'
import Slider from '../Layout/Slider/Slider'
import classes from './Main.module.css'
import { FaEthereum } from "react-icons/fa" ;   
import { SiKaios } from "react-icons/si";
import { Link } from 'react-router-dom';
import topNft1 from '../../assets/c_millenia_pfp_1668187735016.webp'
import popCollect1 from '../../assets/fCgR75fYed__y5HRYdFV5R0NTNorqquwS_MkpnuvFNA.png'
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
                onClick={dogeHandler}><div><span><SiKaios/> Kai</span></div></button> 
              </>
              :
              <>
                <button 
                className={classes['btn-token']}
                onClick={dogeHandler}><div><span><SiKaios/> Kai</span></div></button>
              </>
            }

            <div className={classes['add-more-collect']}>
              <Link to = "/">더 보기</Link>
            </div>
          </div>

          <div className={classes['popular-collect-container']}>
            {/* 여기는 인기 collect 컴포넌트가 들어가야함 */}
            <Link to = "/">
              <div className={classes['pop-rank']}>1</div>
              <img src={popCollect1} alt="pop1" />  
              <div className={classes['block']}>
                <div className={classes['flex']}>
                  <h3>DUELBOTS</h3>
                  <span>125.82{"%"}</span>
                </div> 
                <div className={classes['flex']}>
                  <div className={classes['margin200']}>
                    <span>Floor</span>
                    <FaEthereum/>
                    <span>13.9</span>
                  </div>
                  <div>
                    <FaEthereum/>
                    <span>4,127.94</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to = "/">
              <div className={classes['pop-rank']}>5</div>
                <img src={popCollect1} alt="pop1" />  
                <div className={classes['block']}>
                  <div className={classes['flex']}>
                    <h3>DUELBOTS</h3>
                    <span>125.82{"%"}</span>
                  </div> 
                  <div className={classes['flex']}>
                    <div className={classes['margin200']}>
                      <span>Floor</span>
                      <FaEthereum/>
                      <span>13.9</span>
                    </div>
                    <div>
                      <FaEthereum/>
                      <span>4,127.94</span>
                    </div>
                  </div>
                </div>
            </Link>
            <Link to = "/">
              <div className={classes['pop-rank']}>9</div>
                <img src={popCollect1} alt="pop1" />  
                <div className={classes['block']}>
                  <div className={classes['flex']}>
                    <h3>DUELBOTS</h3>
                    <span>125.82{"%"}</span>
                  </div> 
                  <div className={classes['flex']}>
                    <div className={classes['margin200']}>
                      <span>Floor</span>
                      <FaEthereum/>
                      <span>13.9</span>
                    </div>
                    <div>
                      <FaEthereum/>
                      <span>4,127.94</span>
                    </div>
                  </div>
                </div>
            </Link>
      
            <Link to = "/">
              <div className={classes['pop-rank']}>2</div>
                <img src={popCollect1} alt="pop1" />  
                <div className={classes['block']}>
                  <div className={classes['flex']}>
                    <h3>DUELBOTS</h3>
                    <span>125.82{"%"}</span>
                  </div> 
                  <div className={classes['flex']}>
                    <div className={classes['margin200']}>
                      <span>Floor</span>
                      <FaEthereum/>
                      <span>13.9</span>
                    </div>
                    <div>
                      <FaEthereum/>
                      <span>4,127.94</span>
                    </div>
                  </div>
                </div>
            </Link>
            <Link to = "/">
              <div className={classes['pop-rank']}>6</div>
                <img src={popCollect1} alt="pop1" />  
                <div className={classes['block']}>
                  <div className={classes['flex']}>
                    <h3>DUELBOTS</h3>
                    <span>125.82{"%"}</span>
                  </div> 
                  <div className={classes['flex']}>
                    <div className={classes['margin200']}>
                      <span>Floor</span>
                      <FaEthereum/>
                      <span>13.9</span>
                    </div>
                    <div>
                      <FaEthereum/>
                      <span>4,127.94</span>
                    </div>
                  </div>
                </div>
            </Link>
            <Link to = "/">
              <div className={classes['pop-rank']}>10</div>
                <img src={popCollect1} alt="pop1" />  
                <div className={classes['block']}>
                  <div className={classes['flex']}>
                    <h3>DUELBOTS</h3>
                    <span>125.82{"%"}</span>
                  </div> 
                  <div className={classes['flex']}>
                    <div className={classes['margin200']}>
                      <span>Floor</span>
                      <FaEthereum/>
                      <span>13.9</span>
                    </div>
                    <div>
                      <FaEthereum/>
                      <span>4,127.94</span>
                    </div>
                  </div>
                </div>
            </Link>

            <Link to = "/">
              <div className={classes['pop-rank']}>3</div>
                <img src={popCollect1} alt="pop1" />  
                <div className={classes['block']}>
                  <div className={classes['flex']}>
                    <h3>DUELBOTS</h3>
                    <span>125.82{"%"}</span>
                  </div> 
                  <div className={classes['flex']}>
                    <div className={classes['margin200']}>
                      <span>Floor</span>
                      <FaEthereum/>
                      <span>13.9</span>
                    </div>
                    <div>
                      <FaEthereum/>
                      <span>4,127.94</span>
                    </div>
                  </div>
                </div>
            </Link>
            <Link to = "/">
              <div className={classes['pop-rank']}>7</div>
                <img src={popCollect1} alt="pop1" />  
                <div className={classes['block']}>
                  <div className={classes['flex']}>
                    <h3>DUELBOTS</h3>
                    <span>125.82{"%"}</span>
                  </div> 
                  <div className={classes['flex']}>
                    <div className={classes['margin200']}>
                      <span>Floor</span>
                      <FaEthereum/>
                      <span>13.9</span>
                    </div>
                    <div>
                      <FaEthereum/>
                      <span>4,127.94</span>
                    </div>
                  </div>
                </div>
            </Link>
            <Link to = "/">
              <div className={classes['pop-rank']}>11</div>
                <img src={popCollect1} alt="pop1" />  
                <div className={classes['block']}>
                  <div className={classes['flex']}>
                    <h3>DUELBOTS</h3>
                    <span>125.82{"%"}</span>
                  </div> 
                  <div className={classes['flex']}>
                    <div className={classes['margin200']}>
                      <span>Floor</span>
                      <FaEthereum/>
                      <span>13.9</span>
                    </div>
                    <div>
                      <FaEthereum/>
                      <span>4,127.94</span>
                    </div>
                  </div>
                </div>
            </Link>

            <Link to = "/">
              <div className={classes['pop-rank']}>4</div>
                <img src={popCollect1} alt="pop1" />  
                <div className={classes['block']}>
                  <div className={classes['flex']}>
                    <h3>DUELBOTS</h3>
                    <span>125.82{"%"}</span>
                  </div> 
                  <div className={classes['flex']}>
                    <div className={classes['margin200']}>
                      <span>Floor</span>
                      <FaEthereum/>
                      <span>13.9</span>
                    </div>
                    <div>
                      <FaEthereum/>
                      <span>4,127.94</span>
                    </div>
                  </div>
                </div>
            </Link>
            <Link to = "/">
              <div className={classes['pop-rank']}>8</div>
                <img src={popCollect1} alt="pop1" />  
                <div className={classes['block']}>
                  <div className={classes['flex']}>
                    <h3>DUELBOTS</h3>
                    <span>125.82{"%"}</span>
                  </div> 
                  <div className={classes['flex']}>
                    <div className={classes['margin200']}>
                      <span>Floor</span>
                      <FaEthereum/>
                      <span>13.9</span>
                    </div>
                    <div>
                      <FaEthereum/>
                      <span>4,127.94</span>
                    </div>
                  </div>
                </div>
            </Link>
            <Link to = "/">
              <div className={classes['pop-rank']}>12</div>
                <img src={popCollect1} alt="pop1" />  
                <div className={classes['block']}>
                  <div className={classes['flex']}>
                    <h3>DUELBOTS</h3>
                    <span>125.82{"%"}</span>
                  </div> 
                  <div className={classes['flex']}>
                    <div className={classes['margin200']}>
                      <span>Floor</span>
                      <FaEthereum/>
                      <span>13.9</span>
                    </div>
                    <div>
                      <FaEthereum/>
                      <span>4,127.94</span>
                    </div>
                  </div>
                </div>
            </Link>
          </div>

          <div className={classes['top-upvote-title-flex']}>
            <h1>Top upvoted drops</h1>
            <div className={classes['add-more-collect']}>
            <Link to = "/">더 보기</Link>
            </div>
          </div>

          <div className={classes['top-img-flex']}>
            <Link to ='/product1'>
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
            </Link>
    

            <div className={classes['top-nft-wrap']}>
              <img 
                 src="https://gateway.pinata.cloud/ipfs/QmbRt8xZ38XyPmjvScexCaQ1G4ViwiB3rrALvK8UqwH2SD/c15.jpeg"  alt="topNft1"
                width="218" height="165" />
              <div className={classes['author']}>
                <div>Choi Ha</div>
              </div>
              <div className={classes['like-create-at-flex-gap-1']}>
                <div className={classes['like-color-red']}>🧡328</div>
                <div>Dec 17, 09:00</div>
              </div>
            </div>

            <div className={classes['top-nft-wrap']}>
              <img 
                src="https://gateway.pinata.cloud/ipfs/QmbRt8xZ38XyPmjvScexCaQ1G4ViwiB3rrALvK8UqwH2SD/c14.PNG" alt="topNft1"
                width="218" height="165" />
              <div className={classes['author']}>
                <div>An Ju</div>
              </div>
              <div className={classes['like-create-at-flex-gap-1']}>
                <div className={classes['like-color-red']}>🧡18</div>
                <div>Dec 27, 09:00</div>
              </div>
            </div>
         
            <div className={classes['top-nft-wrap']}>
              <img 
              src="https://gateway.pinata.cloud/ipfs/QmbRt8xZ38XyPmjvScexCaQ1G4ViwiB3rrALvK8UqwH2SD/c4.png" alt="topNft1"
                width="218" height="165" />
              <div className={classes['author']}>
                <div>무명</div>
              </div>
              <div className={classes['like-create-at-flex-gap-1']}>
                <div className={classes['like-color-red']}>🧡2</div>
                <div>Dec 29, 09:00</div>
              </div>
            </div>

            <div className={classes['top-nft-wrap']}>
              <img 
                src="https://gateway.pinata.cloud/ipfs/QmbRt8xZ38XyPmjvScexCaQ1G4ViwiB3rrALvK8UqwH2SD/c8.png" alt="topNft1"
                width="218" height="165" />
              <div className={classes['author']}>
                <div>무명</div>
              </div>
              <div className={classes['like-create-at-flex-gap-1']}>
                <div className={classes['like-color-red']}>🧡777</div>
                <div>Dec 31, 09:00</div>
              </div>
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