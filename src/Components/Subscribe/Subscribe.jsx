import React from 'react'
import './Subscribe.css'
import SendRoundedIcon from '@material-ui/icons/SendRounded';


let Subscribe = () => {
    return(
        <div className='subscribe-div'>
            <div className='subscribe-div-title'>Subscribe for the latest offers</div>
            <div className="subscribe-div-content">
                <input type='email' placeholder='Enter your email'/>
                < SendRoundedIcon />
            </div>
            
        </div>
    )
}


export default Subscribe


