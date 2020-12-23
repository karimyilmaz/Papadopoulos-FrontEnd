import React from 'react'
import './Pod.css'
import Button from '../Button/Button'




let Pod = (props) => {
    const {lang} = props.MainInfo
    return (
        <div className="pod-div">
            <div className="pod-div-background"></div>
            <div className={lang == 'en'? "pod-div-content": "pod-div-content ar"}>
                {lang=='ar' && <h2>بيتزا اليوم</h2>}
                {lang=='ar' && <h4>ترافل الفرادو صوص مغمسة بأربعة و عشرون قراط من الدهب</h4>}
                {lang=='en' && <h2>Pizza Of the Day</h2>}
                {lang=='en' && <h4>traffle alfredo sauce topped with 24 carat of gold</h4>}
                
            </div>
            
        </div>
    )

}


export default Pod