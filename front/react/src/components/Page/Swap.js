import React,{useState} from 'react';
import SideNav from '../Layout/SideNav';
import classes from './Swap.module.css';
import { FaEthereum } from "react-icons/fa";
import {SiKaios} from 'react-icons/si';
import {BsFillArrowDownCircleFill} from 'react-icons/bs';
import Clock from 'react-live-clock';

const Swap = ({tokenSwap, setKAiInputValue, setEthInputValue, kaiInputValue, ethInputValue, kaiBalance, ethBalance, isSwap, setIsSwap}) => {

    const [inputNum, setInputNum] = useState(false);
    
    const swapTokenHandler = () => {
    setIsSwap(isSwap=> !isSwap)
    console.log(isSwap);
    }

    const onChageKai = (event) =>{
    setEthInputValue(event.target.value);
    setKAiInputValue(event.target.value * 100);
    setInputNum(true);
    if(inputNum == null){
        setInputNum(false);
    }
    }

    const onChangeEth = (event) =>{
    setKAiInputValue(event.target.value);
    setEthInputValue(event.target.value / 100);
    setInputNum(true);
    if(inputNum == null){
        setInputNum(false);
    }
    }


    return (
    <div>
        <SideNav />
        <div className={classes['padding-left360']}>
        <div className={classes['swap-box']}>
            {/* 상단의 옵션 Trade tokens in an instant 부분 */}
            <div className={classes['swap-setting']}>
                <h2>Swap</h2>
                <div>Trade tokens in an instant</div>
                {/* 나중에 도구 tool을 추가할까 말까 생각중인데 지금은 안넣을래 */}
                <div></div>
            </div>

            <hr className={classes['hr-nomal']}/> <br />
            {
                isSwap == true
                ?
                <>
                    <div className={classes['token-name']}><SiKaios/>KAI</div><div>{kaiBalance}</div> 
                    <label htmlFor="">
                        <input 
                        className={classes['input-token']}
                        type="number" 
    
                        defaultValue={ kaiInputValue|| ''}
                        placeholder="0.0"
                        onChange={onChangeEth}/>
                    </label>
                </>
                :
                <>
                    <div className={classes['token-name']}><FaEthereum/>ETH</div><div>{ethBalance}</div>
                        <label htmlFor="">
                            <div>
                            <input 
                            className={classes['input-token']}
                            type="number"
                            
                            defaultValue={ ethInputValue|| ''}
                            placeholder="0.0"
                            onChange={onChageKai}/>
                            </div>
                        </label>
                </>
            }
            
            <div 
                className={classes['text-align-center']}
                // onClick={''}
            >
                <button 
                    className={classes['switch-token-btn']}
                    onClick={swapTokenHandler}>
                    <BsFillArrowDownCircleFill className={classes['BsFillArrowDownCircleFill']}/>
                </button>
            </div>
            
            {
                isSwap == false
                ?
                <>
                    <div className={classes['token-name']}><SiKaios/>KAI</div><div>{kaiBalance}</div> 
                    <label htmlFor="">
                        <input 
                        className={classes['input-token']}
                        type="number" 
                        defaultValue={ kaiInputValue|| ''}
                        placeholder="0.0"
                        onChange={onChangeEth}/>
                    </label>
                </>
                :
                <>
                    <div className={classes['token-name']}><FaEthereum/>ETH</div><div>{ethBalance}</div>
                        <label htmlFor="">
                            <div>
                            <input 
                            className={classes['input-token']}
                            type="number"
                            defaultValue={ ethInputValue|| ''}
                            placeholder="0.0"
                            onChange={onChageKai}/>
                            </div>
                        </label>
                </>
            }

            <div className={classes['slippage-tolerance-box']}>
                <div className={classes['margin-right']}>Slippage Tolerance</div>
                <div className={classes['green-font']}>0.5%</div>
            </div>


            {
                inputNum == true
                ?
                <>
                    <button onClick={tokenSwap}
                        className={classes['swap-token-button']}
                    >Swap</button>
                </>
                :
                <>
                    <button 
                    className={classes['swap-token-button']}
                    disabled='disabled'
                    >Enter an amount</button>
                </>
            }
        </div>
        <div className={classes['current-situation']}>
            <h1>Current-Situation</h1>
            <h4>※!caution!※ liquidity so much</h4>
            <div>
                <Clock format={''} ticking={true} timezone={'KR/Pacific'}/>
            </div><br />
            <div>1Eth <FaEthereum/> = 100KAI <SiKaios/></div>
        </div>
        </div>


    </div>
    )
}

export default Swap