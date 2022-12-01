import React from 'react'
import esLogoImg from '../../assets/esLogo.png'
import classes from './Header.module.css'
import { CgUserAdd, CgSearch, CgUser } from "react-icons/cg";

const Header = () => {
  return (
    <div className={classes['eslogo-box']}>
        <img src={esLogoImg} alt="es로고이미지" />
        <div>E-SEKAI</div>

        {/* 검색창 */}
        <div className={classes['search-box']}>
            <form>
               <input 
                className={classes["search-txt"]} 
                type="text" 
                placeholder="Search Collections, Creators"
                />
                  <button className={classes["search-btn"]} type="submit">
                    <i className="fas fa-search">
                        <CgSearch/>
                    </i>
                  </button>
            </form>
        </div>

        {/* 유저 배너 */}
        <div className={classes['log-box']}>
            <div className={classes['my-page']}><CgUser/></div>
            <div className={classes['create-user']}><CgUserAdd/></div>
        </div>

    </div>
  )
}

export default Header