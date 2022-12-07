import React from 'react'
import SideNav from './SideNav'
import Slider from './Slider'
import classes from './Main.module.css'


const Main = (props) => {
  return (
    <>
      <div className={classes['inline-block']}>
        <SideNav />
        <Slider />
        
      </div>
    </>
  )
}

export default Main