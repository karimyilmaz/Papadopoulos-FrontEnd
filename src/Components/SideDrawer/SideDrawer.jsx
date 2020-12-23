import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import './SideDrawer.css'
import {Link} from 'react-router-dom'
import { PinDropSharp } from '@material-ui/icons';
// import { PinDropSharp } from '@material-ui/icons';

let SideDrawer = (props) => {
    return(
        <div className="side-drawer">
            <div className="side-drawer-close"><button onClick={() => {
                props.drawerClickHandler(false)
            }}>< CloseIcon /></button></div>
            <div className="side-drawer-items">
                <Link to='/'><div>MENU</div></Link>
                <Link to='/offers'><div>OFFERS</div></Link>
                <Link to='/locations'><div>LOCATIONS</div></Link>
                <Link to='/login'><div>SIGN IN</div></Link>
            </div>
        
        </div>
    )
}

export default SideDrawer