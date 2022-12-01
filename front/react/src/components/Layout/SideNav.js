import React, {useState} from 'react';
import classes from './SideNav.module.css';




const SideNav = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(true)
  }



  return (
    <div className={classes['side-nav']}>
        <div onClick={toggleHandler}>market place</div>
        {toggle && 
        <>
            <div>popular collections</div>
            <div>auction</div>
        </>}
        <div>insight</div>
        <div>ES list</div>
        <div>ES game</div>
    </div>
  )
}

export default SideNav