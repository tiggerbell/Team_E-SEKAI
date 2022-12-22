import React from 'react'
import classes from './Footer.module.css'
import eslogo from '../../assets/esLogo.png'


const Footer = () => {
  return (
    <>
    <div className={classes['footer-flex']}>
        <div className={classes['footer-box1']}>
            <div className={classes['eslogo-box']}>
                <img src={eslogo} alt="eslogo" width="160" height="120" />
                <div>E-SEKAI</div>
            </div>

            <div className={classes['footer-box1-under']}>
                <div>E-SEKAI the homepage of NFT's</div>
                <div>©2022 Euclid Labs, Inc. All Rights Reserved.</div>
            </div>
        </div>

        <div className={classes['footer-ranges']}>
            <h4>Marketplace</h4>
            <ul>
                <li>Popular collections</li>
                <li>Launchpad</li>
                <li>Auctions</li>
            </ul>
        </div>

        <div className={classes['footer-ranges']}>
            <h4>E-SAKAI Games</h4>
            <ul>
                <li>최하진's 재밌는 게임1</li>
                <li>최하진's 재밌는 게임2</li>
                <li>최하진's 재밌는 게임3</li>
            </ul>
        </div>

        <div className={classes['footer-ranges']}>
            <h4>Resources</h4>
            <ul>
                <li>About Us</li>
                <li>API</li>
                <li>Careers</li>
                <li>System Status</li>
                <li>Support</li>
                <li>Trust & Safety</li>
                <li>Shop</li>
                <li>Copyright Policy</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

    </div>
    </>
  )
}

export default Footer