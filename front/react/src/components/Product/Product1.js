import React from 'react';
import classes from './Product1.module.css';
import SideNav from '../Layout/SideNav';
import { FaEthereum } from "react-icons/fa" ;   
import {AiOutlineHeart} from 'react-icons/ai';
import nftImg from '../../assets/c_millenia_pfp_1668187735016.webp';
import {IoMdList} from 'react-icons/io';
import {BsFillShareFill} from 'react-icons/bs';
import {SlSizeFullscreen} from 'react-icons/sl';
import {FiMoreHorizontal} from 'react-icons/fi';
import {BsEye} from 'react-icons/bs';





const Product1 = () => {
  return (
    <div>
        <SideNav/>
        <div className={classes['padding-left360']}>
            <div className={classes['p1']}>
                <div className={classes['p1-left']}>
                    <div>
                        <header>
                            <div className={classes['']}>
                                <FaEthereum/>
                            </div>
                            <div className={classes['favority']}>
                                <div className={classes['favority-amount']}>{"6200"}</div>
                                <AiOutlineHeart/>
                            </div>
                        </header>
                        <div className={classes['text-center']}>
                            <img 
                                src={nftImg}
                                alt="nftImg"
                                className={classes['frame-img']}/>
                                <hr />
                        </div>
                    </div> <br />

                    <div className={classes['align-center']}>
                        <IoMdList />
                        <div 
                            className={classes['padding-left']}>
                                Discription
                        </div> 
                    </div><br /> <hr /><br />
                    <div className={classes['decription-content']}>
                        <p><b>By RIKLEE</b></p>
                        <p>The Aquarius symbol is water bearer, which represents the gifts of truth and pure</p>
                        <p>intentions that this Goddess brings to the world. She's innovative, intelligent and not</p>
                        <p>afraid to speak her mind.</p> <br />
                        <p>Element -Air Symbol - Water Bearer Colour - Blue</p>
                    </div>
                </div>

                <div className={classes['p1-right']}>
                    <section>
                        <div className={classes['section-box']}>
                            <div>김작가</div>
                            <div className={classes['button-list']}>
                                <button >
                                    <BsFillShareFill/>
                                </button>
                                <button>
                                    <SlSizeFullscreen/>
                                </button>
                                <button>
                                    <FiMoreHorizontal/>
                                </button>
                            </div>
                        </div>
                        <h1 className={classes['margin-left13']}>정신나갈것 같은 안드로이드</h1> <br />

                    </section>
                    <section className={classes['section-flex']}> 
                        <div className={classes['margin-right10']}>
                            <BsEye/> <span>344 views</span>
                        </div>
                        <div>
                            <AiOutlineHeart/> <span>6200</span>
                        </div> 
                    </section> <br /><br />
                    <div className={classes['margin-left13']}>
                        <div>Current price</div>
                        <div>0.13 ETH $157.72</div>
                        <div>
                            <button 
                                className={classes['button-style1']}>purchase
                            </button>
                            <button
                                className={classes['button-style1']}>Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </div>
  )
}

export default Product1