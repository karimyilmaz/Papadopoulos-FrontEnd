import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '../Button/Button'
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import './Navbar.css'
import { getCookie, removeCookie } from '../../cookie'


let Navbar = (props) => {
    let [toggleVisible, setToggleVisible] = useState(false)
    let [navbarBgVisible, setNavbarBgVisible] = useState(false)
    let [shopCartMouseOn, setShopCartMouseOn] = useState(false)
    let {lang, setLang, user_info, setUserInfo} = props.MainInfo

    const onResizeHandler = () => {
        const threshold = (user_info.name)? 1090 : 823

        if (window.innerWidth <  threshold){ 
          if (!toggleVisible)   
              setToggleVisible(true)
      }
       else {
           if(toggleVisible){
               setToggleVisible(false)
               props.drawerClickHandler(false)
           }} 
   }

   const onScrollHandler = () => {
       if(window.scrollY === 0){
           if(navbarBgVisible) 
           setNavbarBgVisible(false)
        }else{
            if(!navbarBgVisible)
            setNavbarBgVisible(true)
        }        
    } 
    
    // props.drawerClickHandler(false); 
    window.addEventListener('resize', onResizeHandler)
    window.addEventListener('scroll', onScrollHandler)
    //window.onload = onResizeHandler

    const signoutHandler = () => {
        removeCookie('user-info')
        props.MainInfo.setUserInfo(getCookie())
    }

    const changeLang = () => {
        if(lang === 'en')        
            setLang('ar')
        else
            setLang('en')
        }


    onResizeHandler()

    return ( 
        
        <nav className={navbarBgVisible ? "nav-bg": "nav-bg-trans"}>
            <div className="navigation-bar">
                {lang == 'en' && <div className='logo'><Link to='/'>PAPADOPOULOS</Link></div>}
                {lang == 'en' && !toggleVisible && <ul className='navigation-items'>
                        <li className='navigation-item'><Link to='/menu'>{lang=='en' ? "MENU": "قائمة طعام"}</Link></li>
                        <li className='navigation-item'><Link to='/offers'>OFFERS</Link></li>
                        <li className='navigation-item'><Link to='/locations'>LOCATIONS</Link></li>
                        <li className='navigation-item'><Link onClick={changeLang}>عربي</Link></li>

                </ul>}

                {lang == 'en' && !toggleVisible && <div className={(user_info.name)? "navigation-welcome-cart" : "navigation-signin-cart"}>
                    {(user_info.name)? <div className="navigation-signin"><Link to='/' onClick={signoutHandler}>Welcome {user_info.name}</Link></div> : 
                    <div className="navigation-signin"><Link to='/login'>SIGN IN</Link></div>}
                    < ShoppingCartOutlinedIcon onMouseEnter={() => setShopCartMouseOn(true)} 
                    onMouseLeave={() => setShopCartMouseOn(false)} style={{color: shopCartMouseOn? "yellow" : "white"}} />
                </div>}
                
                {lang == 'en' && toggleVisible && <div className='toggle-button-div'>< DrawerToggleButton drawerClickHandler={props.drawerClickHandler}/></div>}

                
                {/* {Arabic Language avigation Bar } */ }
                {lang == 'ar' && toggleVisible && <div className='toggle-button-div-ar'>< DrawerToggleButton drawerClickHandler={props.drawerClickHandler}/></div>}

                {lang == 'ar' && !toggleVisible && <div className={(user_info.name)? "navigation-welcome-cart-ar" : "navigation-signin-cart-ar"}>
                    < ShoppingCartOutlinedIcon onMouseEnter={() => setShopCartMouseOn(true)} 
                    onMouseLeave={() => setShopCartMouseOn(false)} style={{color: shopCartMouseOn? "yellow" : "white"}} />
                    
                    {(user_info.name)? <div className="navigation-signin-ar"><Link to='/' onClick={signoutHandler}>{user_info.name} أهلا</Link></div> : 
                    <div className="navigation-signin-ar"><Link to='/login'>تسجيل الدخول</Link></div>}
                    
                </div>}
                
                
                    {lang == 'ar' && !toggleVisible && <ul className='navigation-items-ar'>
                            <li className='navigation-item'><Link to='/menu'>قائمة طعام</Link></li>
                            <li className='navigation-item'><Link to='/offers'>عروض</Link></li>
                            <li className='navigation-item'><Link to='/locations'>فروع</Link></li>
                            <li className='navigation-item'><Link onClick={changeLang}>english</Link></li>

                    </ul>}
                {lang == 'ar' && <div className='logo-ar'><Link to='/'>بابادابولوس</Link></div> }
                {/* {Arabic Language avigation Bar } */ }
                
                
                
                            



                {/* {console.log(v)} */}
            </div>
        </nav>
            
        
    )
}

export default Navbar