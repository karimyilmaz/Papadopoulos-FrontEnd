import React from 'react'
import './DrawerToggleButton.css';
// import yellow from "@material-ui/core/colors/yellow";
import MenuIcon from '@material-ui/icons/Menu';


let DrawerToggleButton = (props) => {
       return (
        <button onClick={() => {
            props.drawerClickHandler(true)
        }} className='toggle-button'><MenuIcon style={{color: "white"}}/></button>
       )
    }
    

export default DrawerToggleButton;
