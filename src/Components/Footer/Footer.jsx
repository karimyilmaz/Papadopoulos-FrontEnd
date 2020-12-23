import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import Subscribe from '../Subscribe/Subscribe'
import './Footer.css'


let Footer = (props) => {
    const {lang} = props.MainInfo
    return(
        <div className="footer-div">
            <div className="footer-div-background"></div>
            <div className="footer-div-content">
                <div className={lang == 'en'? "footer-content" : "footer-content ar"}>
                    {lang == 'en'? <h2>PAPADOPOULOS</h2> : <h2>بابادابولوس</h2>}
                    <div className="social-media">
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <YouTubeIcon/>
                        <LinkedInIcon/>
                    </div>
                </div>
                

                {/* <Subscribe/> */}

            </div>
        </div>
    )
}


export default Footer