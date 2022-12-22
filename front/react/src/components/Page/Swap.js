import React,{useState} from 'react'
import SideNav from '../Layout/SideNav';
import classes from './Swap.module.css'
import { FaEthereum } from "react-icons/fa" ;   
import {SiKaios} from 'react-icons/si';
import {BsFillArrowDownCircleFill} from 'react-icons/bs';

const Swap = ({buy}) => {
  const [changeKai, setChageKai] = useState(null);
  const [inputNum, setInputNum] = useState(false);


  
  const onChageKai = (event) =>{
    setChageKai(event.target.value * 100);
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

            <hr/>

            <div className={classes['token-name']}><FaEthereum/>ETH</div>
            <label htmlFor="">
                <div>
                    <input 
                        className={classes['input-token']}
                        type="number"
                        onChange={onChageKai}
                        placeholder="0.0"
                        />
                </div>
                <div>
                    {/* 나중에 이더변환 가격 넣을 div */}
                </div>
            </label>
            
            <div className={classes['text-align-center']}><BsFillArrowDownCircleFill/></div>
            
            <div className={classes['token-name']}><SiKaios/>KAI</div>

            <label htmlFor="">
                <input 
                    className={classes['input-token']}
                    type="number" 
                    defaultValue={changeKai || ''}
                    placeholder="0.0"
                    />
            </label>

            <div className={classes['slippage-tolerance-box']}>
                <div className={classes['margin-right']}>Slippage Tolerance</div>
                <div className={classes['green-font']}>0.5%</div>
            </div>


            {
                inputNum == true
                ?
                <>
                    <button onClick={buy} 
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
       </div>


    </div>
  )
}

export default Swap