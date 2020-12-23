import React, { useEffect, useRef } from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './Hero.css'

let HeroSection = (props) => {
    const {lang} = props.MainInfo
    const shadowElement = useRef()
    
    useEffect(() => {
        if(lang=='ar'){
            shadowElement.current.classList.add('shadow-div-ar-collapse')
            console.log('hero useffect component', shadowElement.current.classList)
        }
    },[lang])

    console.log('Hero Rendered')
    return (
        <React.Fragment>
        <div className={lang == 'en'? 'hero-section' : 'hero-section ar'}>
           <div>
                {lang == 'en' && <div className='shadow-div-en'>FROM <span>GREECE</span> TO THE WORLD</div>}
                {lang == 'en' && <div>READY IN 60 SECONDS</div>}

                {lang == 'ar' && <div className='shadow-div-ar' ref={shadowElement}>من اليونان الي العالم</div>}
                {lang == 'ar' && <div>جاهز في ٦٠ ثانية</div>}
           </div>
        </div>
    <div className="whatsapp"><a href='https://wa.me/96178839346' target="_blank"><WhatsAppIcon fontSize="large" color="primary"/></a></div>
    </React.Fragment>
    )
}

export default HeroSection