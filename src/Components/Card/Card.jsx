import React from 'react'
import './Card.css'
import Button from '../Button/Button'
import product1 from '../../images/product-1.jpg'
import product2 from '../../images/product-2.jpg'
import product3 from '../../images/product-3.jpg' 
import sweet1 from '../../images/sweet-2.jpg' 
import sweet2 from '../../images/sweet-3.jpg' 
import sweet3 from '../../images/sweet3.jpg' 



let Card = (props) => {
    const lang = props.lang
    return (
        <div className="card">
            <div className="image-div">
                <img src={ props.image=="product1"? product1: props.image=="product2"? product2: props.image=="product3"? product3 : 
            props.image=="sweet1"? sweet1: props.image=="sweet2"? sweet2: props.image=="sweet3"? sweet3 : product1  } />
            </div>

            <div className={lang=='en'? "card-title-desc" : "card-title-desc-ar"}>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <h3>{props.price}</h3>
            </div>
            
            
            <div className="card-button">
                < Button classn={lang=='ar'? "btn-ar" : "btn"} content={lang =='ar'? "اطلب الان" : "Order Now"}/>
            </div>
            

        </div>
     
    )

}


export default Card